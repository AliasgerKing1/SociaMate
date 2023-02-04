const routes = require("express").Router();
const Msg = require("../models/Message");
const jwt = require("jsonwebtoken");

routes.post("/", (req, res)=> {
    Msg.create(req.body, (error)=> {
        let obj = {message : req.body.message}
        res.send(obj);
    })
        })

routes.get("/", (req,res)=> {
    Msg.find({}, (error,result)=> {
        res.send(result);
    })
})
routes.get("/:token", (req,res)=> {
    let token = req.params.token;
    if(token) {
        let obj = jwt.decode(token, "Aliasger web");
        Msg.find({ _id: obj.id }, (error, result) => {
            console.log(result)
          res.send(result[0]);
        });
    }
})

routes.get("/:id", (req,res)=> {
    let id = req.params.id;
    Msg.find({_id : id}, (error,result)=> {
        res.send(result[0]);
    })
})
module.exports = routes;