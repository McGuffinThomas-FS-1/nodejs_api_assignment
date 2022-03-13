
const randomFactBreeds = (breeds) => {
    console.log("Mocked Fact by Breed");
    return Promise.resolve({
        "summary":"Get a list of breeds",
        "description": "Returns a a list of breeds",
        "operationId": "getBreeds",
    });
}

const randomFact = (fact) => {
    console.log("Mocked Cat Facts");
    return Promise.resolve({
        "description":"An API for facts about cats",
        "email": "contact@catfact.ninja",
        "title": "Cat Fact API",
        completed: true    
    });
}

module.exports = {
    randomFact,
    randomFactBreeds
}