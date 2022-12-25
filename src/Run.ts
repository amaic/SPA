import { IServiceProvider } from "@amaic/dijs-abstractions";
import ko from "knockout";
import ComponentLoader from "./ComponentLoader";

export default async function Initialization(serviceProvider: IServiceProvider): Promise<void>
{

    ko.components.loaders.length = 0;

    ko.components.loaders.push(new ComponentLoader());

    ko.components.register("content", {});

    ko.applyBindings({});

    return Promise.resolve();
}