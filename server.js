const express = require("express");
require("dotenv").config();

const {
    randomFact,
} = require("./services/catFacts");

const app = express();

// for localhost:6000/
app.get("/", (req, res, next) => {
    res.status(200).send("Cat Facts is Now Working!")
});

// get external services
// http://localhost:6000/todo
app.get("/fact", (req, res, next) => {
    randomFact()
        .then(result => res.status(200).json(result))
        .catch(err => res.status(501).json({
            error: {
                message:err.message, 
                status:err.status
            }
    }))
});

// get external service by Breed
// http://localhost:6000/to/breed
app.get("/fact/:factBreed",(req, res, next) => {
    const factBreed = req.params.factBreed;
    randomFactBreed(factBreed)
    .then(result => res.status(200).json(result)).
    catch(err => res.status(err.status || 501).json({
        error: {
            message: err.message, 
            status: err.status, 
            method: req.method
        }
    }))
})

// add middleware to handle errors and bad url paths
app.use((req, res, next) => {
    const error = new Error("NOT FOUND!");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message,
            status: error.status
        }
    })
})

app.listen(process.env.port, () => console.log(`Server starting on port ${process.env.port}`))
