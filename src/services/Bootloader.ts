import { ServiceCollection } from "@amaic/dijs";
import { IServiceCollection, IServiceProvider, ServiceRegistrationMode } from "@amaic/dijs-abstractions";
import "@amaic/dijs-extensions-registration";
import IAppSettings, { IAppSettingsIdentifier } from "../interfaces/IAppSettings";
import { DefaultAppSettings } from "../options/DefaultAppSettings";

type RegisterServicesCallback = (serviceCollection: IServiceCollection, appSettings: any) => Promise<void>;
const RegisterServicesCallbackDefault: RegisterServicesCallback = () => Promise.resolve();

type StartupCallback = (serviceProvider: IServiceProvider) => Promise<void>;
const StartupCallbackDefault: StartupCallback = () => Promise.resolve();

let FetchAppSettingsTask: Promise<Response> | undefined;
let RegisterServices: RegisterServicesCallback | undefined;
let Startup: StartupCallback | undefined;

export default function Bootloader({
    appSettingsUrl = "",
    registerServices = RegisterServicesCallbackDefault,
    startup = StartupCallbackDefault
}): void
{
    FetchAppSettingsTask = fetch(appSettingsUrl);
    RegisterServices = registerServices;
    Startup = startup;

    if (document.readyState === "loading")
    {
        window.addEventListener('DOMContentLoaded', onContentLoaded);
    }
    else
    {
        onContentLoaded();
    }
}

async function onContentLoaded(): Promise<void>
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

    if (Startup == undefined)
    {
        console.error("Startup is undefined.");
        return;
    }

    const appSettingsResponse = await FetchAppSettingsTask;

    if (appSettingsResponse.ok == false)
    {
        console.error("Unable to load %s: %d %s", appSettingsResponse.url, appSettingsResponse.status, appSettingsResponse.statusText);
        return;
    }

    const appSettings: IAppSettings = 
    {
        ...DefaultAppSettings,
        ...await appSettingsResponse.json()
    };

    const serviceCollection = new ServiceCollection();

    serviceCollection.RegisterInstance(
        ServiceRegistrationMode.Single,
        IAppSettingsIdentifier,
        appSettings
    );

    RegisterServices(serviceCollection, appSettings);

    const serviceProvider = serviceCollection.CreateServiceProvider();

    Startup(serviceProvider);
}
