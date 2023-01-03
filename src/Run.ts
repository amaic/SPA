import { IServiceProvider } from "@amaic/dijs-abstractions";
import "./../node_modules/bootstrap/scss/bootstrap.scss";
import "bootstrap";
import "./main.scss";
import { INavigatorIdentifier } from "./interfaces/INavigator";
import IInitialize from "./interfaces/IInitialize";
import { HomePage } from "./pages";

export default async function Startup(serviceProvider: IServiceProvider): Promise<void>
{
    const navigator = serviceProvider.GetRequiredService(INavigatorIdentifier);

    await (navigator as IInitialize).Initialize();

    new HomePage();

    console.debug("SPA is running.");
}