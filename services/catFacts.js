const axios = require("axios");

const randomFact = () => {
    console.log("Cat Facts");
    return axios.get(`${process.env.catURL}`).then(result => {
        return result.data
    })
}

const randomFactBreed = (breed) => {
    console.log("Real Fact by Breed");
    return axios.get(`${process.env.catURL}${breed}`).then(result => {
        return result.data
    })
}

module.exports = {
    randomFact,
    randomFactBreed
}