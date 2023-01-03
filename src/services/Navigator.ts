import IInitialize, { IInitializeIdentifier } from "../interfaces/IInitialize";
import INavigator, { INavigatorIdentifier } from "../interfaces/INavigator";

export default class Navigator implements INavigator, IInitialize
{
    INavigator: symbol = INavigatorIdentifier;
    IInitialize: symbol = IInitializeIdentifier;

    constructor()
    {

    }

    public async Initialize(): Promise<void>
    {
        await Promise.resolve();
    }


}