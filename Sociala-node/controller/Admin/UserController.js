const routes = require("express").Router();
const Admin = require("../../models/Admin/Login");
const jwt = require("jsonwebtoken");

routes.get("/", (req, res)=> {
    if(req.headers.header) {
     let token = req.headers.header;
     let obj = jwt.decode(token, "Aliasger web");
     Admin.find({ _id: obj.id }, (error, result) => {
       res.send(result[0]);
     });
   }
   })
   
   module.exports = routes;