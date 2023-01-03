import IInitialize, { IInitializeIdentifier } from "../interfaces/IInitialize";
import IKnockoutService, { IKnockoutServiceIdentifier } from "../interfaces/IKnockoutService";

export default class KnockoutService implements IKnockoutService, IInitialize
{
    IInitialize: symbol = IInitializeIdentifier;
    IKnockoutService: symbol = IKnockoutServiceIdentifier;

    constructor()
    {

    }
    
    public Initialize(): Promise<void>
    {
        throw new Error("Method not implemented.");
    }
}