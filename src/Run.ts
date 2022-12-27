import { IServiceProvider } from "@amaic/dijs-abstractions";
import ko from "knockout";
import ComponentLoader from "./ComponentLoader";
import "./../node_modules/bootstrap/scss/bootstrap.scss";

export default async function Initialization(serviceProvider: IServiceProvider): Promise<void>
{

    ko.components.loaders.length = 0;

    ko.components.loaders.push(new ComponentLoader());

    ko.components.register("amaic-spa-content", {});

    ko.applyBindings({});

    return Promise.resolve();
}