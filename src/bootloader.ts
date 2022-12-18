import { ServiceCollection } from "@amaic/dijs";
import { IServiceCollection, ServiceRegistrationMode } from "@amaic/dijs-abstractions";
import IAppSettings, { IAppSettingsIdentifier } from "./interfaces/IAppSettings";
import "@amaic/dijs-extensions-registration";
import { IStateManager, IStateManagerIdentifier, IStateManagerStorage, IStateManagerStorageIdentifier, StateManager, StateManagerLocalStorage }from "amaic-sma";

let fetchAppSettingsTask: Promise<Response> | undefined;

export default function Bootloader(appSettingsUrl: string): void
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

async function Startup(): Promise<void>
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

    registerServices(serviceCollection, appSettings);

}

async function registerServices(serviceCollection: IServiceCollection, appSettings: IAppSettings): Promise<void>
{
    serviceCollection.RegisterTransientClass<IStateManager, typeof StateManager>(
        IStateManagerIdentifier,
        StateManager,
        (classType, serviceProvider)=> new classType(serviceProvider.GetRequiredServices<IStateManagerStorage>(IStateManagerStorageIdentifier))
    );

    serviceCollection.RegisterTransientClass<IStateManagerStorage, typeof StateManagerLocalStorage>(
        IStateManagerStorageIdentifier,
        StateManagerLocalStorage
    );
}