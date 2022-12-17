import { ServiceCollection } from "@amaic/dijs";
import { ServiceRegistrationMode } from "@amaic/dijs-abstractions";
import "@amaic/dijs-extensions-registration";
import IAppSettings, { IAppSettingsIdentifier } from "./interfaces/IAppSettings";

let fetchAppSettingsTask: Promise<Response> | undefined;

export default function Bootloader(appSettingsUrl: string)
{
    fetchAppSettingsTask = fetch(appSettingsUrl);

    if (document.readyState === "loading")
    {
        window.addEventListener('DOMContentLoaded', Startup);
    }
    else
    {
        Startup();
    }
}

async function Startup()
{
    if (fetchAppSettingsTask == undefined)
    {
        console.error("fetchAppSettingsTask is undefined.");
        return;
    }

    const appSettingsrResponse = await fetchAppSettingsTask;

    if (appSettingsrResponse.ok == false)
    {
        console.error("Unable to load %s: %d %s", appSettingsrResponse.url, appSettingsrResponse.status, appSettingsrResponse.statusText);
        return;
    }

    const appSettings: IAppSettings = await appSettingsrResponse.json();

    const serviceCollection = new ServiceCollection();

    serviceCollection.RegisterInstance(
        ServiceRegistrationMode.Single,
        IAppSettingsIdentifier,
        appSettings
        );

    const serviceProvider = serviceCollection.CreateServiceProvider();

    const test = serviceProvider.GetRequiredService<IAppSettings>(IAppSettingsIdentifier);

    console.debug(test.ApiEndpoint);
}