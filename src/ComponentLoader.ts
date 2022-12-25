import ko from "knockout";

export default class ComponentLoader implements ko.components.DefaultLoader
{
    constructor()
    {
    }

    public getConfig(componentName: string, callback: (config: object | ko.components.Config) => void): void
    {
        callback({ template: "<div>Alexander</div>" });
        // ko.components.defaultLoader.getConfig(componentName, callback);
    }

    public loadComponent(componentName: string, config: object | ko.components.Config, callback: (component: ko.components.Component) => void): void
    {

        ko.components.defaultLoader.loadComponent(componentName, config, callback);
    }

    public loadTemplate(componentName: string, config: ko.components.TemplateConfig, callback: (resolvedTemplate: Node[]) => void): void
    {
        ko.components.defaultLoader.loadTemplate(componentName, config, callback);
    }

    public loadViewModel(componentName: string, config: ko.components.ViewModelConfig, callback: (resolvedViewModel: ko.components.CreateViewModel) => void): void
    {
        ko.components.defaultLoader.loadViewModel(componentName, config, callback);
    }

}

