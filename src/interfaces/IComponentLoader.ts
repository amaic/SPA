export default interface IComponentLoader
{
    IComponentLoader: symbol;

    getConfig(name: string, callback: (componentConfig: object) => void): void;

    loadComponent(name: string, componentConfig: object, callback: (result: LoadComponentCallbackParams | null) => void): void;

    loadTemplate(name: string, templateConfig: object, callback: (domNodeArray: Array<Node>) => void): void;

    loadViewModel(name: string, viewModelConfig: object, callback: (viewModelFactory: ViewModelFactory) => void): void;
}

export const IComponentLoaderIdentifier = Symbol("IComponentLoader");

export interface LoadComponentCallbackParams
{
    template: Array<Node>;

    createViewModel(params: Array<any>, componentInfo: object): void;
}

export type ViewModelFactory = (params: Array<any>, componentInfo: object) => object;