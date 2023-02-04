const routes = require("express").Router();
const Country = require("../models/Country");

routes.get("/", (req,res)=> {
    Country.find({}, (error,result)=> {
        res.send(result);
    })
})

module.exports = routes;