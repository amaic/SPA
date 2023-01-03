export default interface IAppSettings
{
    IAppSettings: symbol;

    ApiEndpoint: string
}

export const IAppSettingsIdentifier = Symbol("IAppSettings");

export function IsIAppSettings(instance: any): instance is IAppSettings
{
    return instance?.IAppSettings === IAppSettingsIdentifier;
}