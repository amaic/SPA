export default interface INavigator
{
    INavigator: symbol;
}

export const INavigatorIdentifier = Symbol("INavigator");

export function IsINavigator(instance: any): instance is INavigator
{
    return instance?.INavigator === INavigatorIdentifier;
}