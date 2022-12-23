import Test from "../src/modules";

describe("dummy", () =>
{
    test("no1", () =>
    {
        const result = Test();

        expect(result).toBe("Alexander Mauri was here!");
    });
});