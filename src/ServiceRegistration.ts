import { IServiceCollection } from "@amaic/dijs-abstractions";
import { IStateManager, IStateManagerIdentifier, IStateManagerStorage, IStateManagerStorageIdentifier, StateManager, StateManagerLocalStorage } from "amaic-sma";
import IAppSettings from "./interfaces/IAppSettings";

export default async function RegisterServices(serviceCollection: IServiceCollection, appSettings: IAppSettings): Promise<void>
{
    serviceCollection.RegisterTransientClass<IStateManager, typeof StateManager>(
        IStateManagerIdentifier,
        StateManager,
        (classType, serviceProvider) => new classType(serviceProvider.GetRequiredServices<IStateManagerStorage>(IStateManagerStorageIdentifier))
    );

    serviceCollection.RegisterTransientClass<IStateManagerStorage, typeof StateManagerLocalStorage>(
        IStateManagerStorageIdentifier,
        StateManagerLocalStorage
    );
}