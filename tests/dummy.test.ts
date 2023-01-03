// import Test from "../src/modules";

describe("dummy", () =>
{
    test("no1", async () =>
    {
        const { default: test } = await import("../src/modules");

        const result = test();

        expect(result).toBe("Alexander Mauri was here!");
    });

    test("no2", () =>
    {
        interface IFoo
        {
            Field1: string;
            Field2: number;
            Field3: boolean;
        }

        class DefaultFoo implements IFoo
        {
            Field1: string = "";
            Field2: number = 0;
            Field3: boolean = false;            
        }

        const json = "{ \"Field2\":357, \"Field4\": \"xyz\"}";
        
        const fromJson = JSON.parse(json);

        expect(fromJson.Field1).toBeUndefined();
        expect(fromJson.Field2).toBe(357);
        expect(fromJson.Field3).toBeUndefined();
        expect(fromJson.Field4).toBe("xyz");

        const foo = {
            ...new DefaultFoo(),
            ...fromJson
        };

        expect(foo.Field1).toBe("");
        expect(foo.Field2).toBe(357);
        expect(foo.Field3).toBe(false);
        expect(foo.Field4).toBe("xyz");

    });
});