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
        const htmlElement: Node = document.createElement("div");

        
    });
});