import { ServiceCollection } from "@amaic/dijs";
import { IServiceCollection, ServiceRegistrationMode } from "@amaic/dijs-abstractions";
import "@amaic/dijs-extensions-registration";

type RegisterServicesCallback = (serviceCollection: IServiceCollection, appSettings: any) => Promise<void>;
export const IAppSettingsIdentifier = Symbol("IAppSettings");
const RegisterServicesCallbackDefault: RegisterServicesCallback = () => Promise.resolve();

let FetchAppSettingsTask: Promise<Response> | undefined;
let RegisterServices: RegisterServicesCallback | undefined;

export default function Bootloader({
    appSettingsUrl = "",
    registerServices = RegisterServicesCallbackDefault
}): void
{
    FetchAppSettingsTask = fetch(appSettingsUrl);
    RegisterServices = registerServices;

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
        console.error("fetchAppSettingsTask is undefined.");
        return;
    }

    if (RegisterServices == undefined)
    {
        console.error("registerServicesCallback is undefined.");
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
}
