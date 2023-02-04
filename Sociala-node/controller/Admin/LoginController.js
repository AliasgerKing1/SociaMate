const routes = require("express").Router();
const Admin = require("../../models/Admin/Login");
const sha1 = require("sha1");
const jwt = require("jsonwebtoken");

routes.post("/", (req, res)=> {
    let user = req.body.username;
    let password = sha1(req.body.password);
Admin.find({username : user}, (error,result)=> {
    if(result.length == 1) {
        if(result[0].password == password) {
            let obj = {id : result[0]._id, username : result[0].username};
            let token = jwt.sign(obj , "Aliasger web");
            res.send({success : true, status : 200, token : token});
        }else {
            res.send({success : false,status: 401, errType : 2});
        }
    }else {
        res.send({success : false,status: 401, errType : 1});
    }
})
})


routes.post("/addadmin", (req,res)=> {
    req.body[1].password = sha1(req.body[1].password);
    Admin.create(req.body, (error)=> {
        res.send({sucess : true, status : 200});
    })
})
routes.get("/", (req,res)=> {
    Admin.find({}, (error,result)=> {
        res.send(result);
    })
})

routes.put("/:id", (req,res)=> {
    let id = req.params.id;
    Admin.updateMany({_id : id}, req.body, (error)=> {
res.send({success : true, status : 200})
    })
})
module.exports = routes;