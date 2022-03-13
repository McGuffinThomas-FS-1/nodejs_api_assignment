const axios = require("axios");
require("dotenv").config();

const randomFact = () => {
    console.log("Real Cat Facts");
    return axios.get(`${process.env.catURL}`).then(result => result.data)
}

const randomFactBreeds = (breeds) => {
    console.log("Real Fact by Breeds");
    return axios.get(`${process.env.catURL}${breeds}`).then(result => result.data)
}

module.exports = {
    randomFact,
    randomFactBreeds
}