import { IServiceCollection, ServiceRegistrationMode, ServiceType } from "@amaic/dijs-abstractions";
import { IStateManager, IStateManagerIdentifier, IStateManagerStorage, IStateManagerStorageIdentifier, StateManager, StateManagerLocalStorage, StateManagerLocationStorage } from "@amaic/sma";
import IAppSettings from "./interfaces/IAppSettings";
import IKnockoutService, { IKnockoutServiceIdentifier } from "./interfaces/IKnockoutService";
import INavigator, { INavigatorIdentifier } from "./interfaces/INavigator";
import KnockoutService from "./services/KnockoutService";
import Navigator from "./services/Navigator";

import "@amaic/dijs-extensions-registration";

export default async function RegisterServices(serviceCollection: IServiceCollection, appSettings: IAppSettings): Promise<void>
{
    serviceCollection.RegisterClass<IKnockoutService, typeof KnockoutService>(
        ServiceRegistrationMode.Single,
        ServiceType.Singleton,
        IKnockoutServiceIdentifier,
        KnockoutService
    )

    serviceCollection.RegisterClass<INavigator, typeof Navigator>(
        ServiceRegistrationMode.Single,
        ServiceType.Singleton,
        INavigatorIdentifier,
        Navigator
    );

    registerStateManager(serviceCollection);
}

function registerStateManager(serviceCollection: IServiceCollection)
{
    serviceCollection.RegisterTransientClass<IStateManager, typeof StateManager>(
        IStateManagerIdentifier,
        StateManager,
        (ct, sp) => new ct(sp.GetRequiredServices<IStateManagerStorage>(IStateManagerStorageIdentifier))
    );

    serviceCollection.AddTransientClass<IStateManagerStorage, typeof StateManagerLocalStorage>(
        IStateManagerStorageIdentifier,
        StateManagerLocalStorage
    );

    serviceCollection.AddTransientClass<IStateManagerStorage, typeof StateManagerLocationStorage>(
        IStateManagerStorageIdentifier,
        StateManagerLocationStorage
    );
}