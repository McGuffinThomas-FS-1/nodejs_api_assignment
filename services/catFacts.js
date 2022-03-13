const axios = require("axios");

const randomFact = () => {
    console.log("Cat Facts");
    return axios.get(`${process.env.catURL}`).then(result => {
        return result.data
    })
}

module.exports = {
    randomFact,
}