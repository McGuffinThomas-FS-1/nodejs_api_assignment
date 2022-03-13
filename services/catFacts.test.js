const { randomFact, randomFactBreeds } = require("./catFacts")

jest.mock("./catFacts.js")

describe("Random Fact Service Test", () => {
    test("should return random facts API data", async () => {
        const result = await randomFact();
        expect(result.description).toEqual("An API for facts about cats");
        expect(result.email).toEqual("contact@catfact.ninja");
        expect(result.title).toEqual("Cat Fact API");
    });

    test("should return a Breed"), async () => {
        const result = await randomFactBreeds();
        expect(result.summary.toEqual("Get a list of breeds"));
        expect(result.description.toEqual("Returns a a list of breeds"));
        expect(result.operationId.toEqual("getBreeds"));
    };
})