export default interface IKnockoutService
{
    IKnockoutService: symbol;
}

export const IKnockoutServiceIdentifier = Symbol("IKnockoutService");

export function IsIKnockoutService(instance: any): instance is IKnockoutService
{
    return instance?.IKnockoutService === IKnockoutServiceIdentifier;
}