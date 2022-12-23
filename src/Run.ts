import { IServiceProvider } from "@amaic/dijs-abstractions";
import ko from "knockout";

export default async function Initialization(serviceProvider: IServiceProvider): Promise<void>
{
    const { default: test } = await import("./modules/index");

    console.debug(test());

    ko.components.register("content", {
        template: "<div>Hallo Welt</div>"
    })

    ko.applyBindings({});

    return Promise.resolve();
}