import { IServiceProvider } from "@amaic/dijs-abstractions";
import ko from "knockout";

export default async function Initialization(serviceProvider: IServiceProvider): Promise<void>
{
    ko.components.register("content", {
        template: "<div>Hallo Welt</div>"
    })

    ko.applyBindings({});

    return Promise.resolve();
}