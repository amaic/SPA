export default interface IInitialize
{
    IInitialize: symbol;

    Initialize(): Promise<void>;
}

export const IInitializeIdentifier = Symbol("IInitialize");

export function IsIInitialize(instance: any): instance is IInitialize
{
    return instance?.IInitialize === IInitializeIdentifier;
}