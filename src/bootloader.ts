import { ServiceCollection } from "@amaic/dijs";
import { IServiceCollection, IServiceProvider, ServiceRegistrationMode } from "@amaic/dijs-abstractions";
import "@amaic/dijs-extensions-registration";

type RegisterServicesCallback = (serviceCollection: IServiceCollection, appSettings: any) => Promise<void>;
export const IAppSettingsIdentifier = Symbol("IAppSettings");
const RegisterServicesCallbackDefault: RegisterServicesCallback = () => Promise.resolve();

type IntializationCallback = (serviceProvider: IServiceProvider) => Promise<void>;
const InitializationCallbackDefault: IntializationCallback = () => Promise.resolve();

let FetchAppSettingsTask: Promise<Response> | undefined;
let RegisterServices: RegisterServicesCallback | undefined;
let Initialization: IntializationCallback | undefined;

export default function Bootloader({
    appSettingsUrl = "",
    registerServices = RegisterServicesCallbackDefault,
    initialization = InitializationCallbackDefault
}): void
{
    FetchAppSettingsTask = fetch(appSettingsUrl);
    RegisterServices = registerServices;
    Initialization = initialization;

    if (document.readyState === "loading")
    {
        window.addEventListener('DOMContentLoaded', startup);
    }
    else
    {
        startup();
    }
}

async function startup(): Promise<void>
{
    if (FetchAppSettingsTask == undefined)
    {
        console.error("FetchAppSettingsTask is undefined.");
        return;
    }

    if (RegisterServices == undefined)
    {
        console.error("RegisterServices is undefined.");
        return;
    }

    if (Initialization == undefined)
    {
        console.error("Initialization is undefined.");
        return;
    }

    const appSettingsrResponse = await FetchAppSettingsTask;

    if (appSettingsrResponse.ok == false)
    {
        console.error("Unable to load %s: %d %s", appSettingsrResponse.url, appSettingsrResponse.status, appSettingsrResponse.statusText);
        return;
    }

    const appSettings = await appSettingsrResponse.json();

    const serviceCollection = new ServiceCollection();

    serviceCollection.RegisterInstance(
        ServiceRegistrationMode.Single,
        IAppSettingsIdentifier,
        appSettings
    );

    RegisterServices(serviceCollection, appSettings);

    const serviceProvider = serviceCollection.CreateServiceProvider();

    Initialization(serviceProvider);
}
