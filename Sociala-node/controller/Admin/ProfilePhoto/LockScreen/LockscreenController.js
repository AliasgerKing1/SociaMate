const routes = require("express").Router();
const LockScreen = require("../../../../models/Admin/LockScreen");
const sha1 = require("sha1");
const jwt = require("jsonwebtoken");

routes.post("/", (req, res)=> {
    if(req.headers.header) {
        let token = req.headers.header;
        let obj = jwt.decode(token, "Aliasger web");
        let user = obj.username;
    let password = sha1(req.body.password);
LockScreen.find({username : user}, (error,result)=> {
        if(result[0].password == password) {
            let obj = {id : result[0]._id, username : user};
            let Admintoken = jwt.sign(obj , "Aliasger web");
            res.send({success : true, status : 200, Admintoken : Admintoken});
        }else {
            res.send({success : false,status: 401, errType : 2});
        }
})
    }
})


routes.post("/addadmin", (req,res)=> {
    req.body[1].password = sha1(req.body[1].password);
    LockScreen.create(req.body, (error)=> {
        res.send({sucess : true, status : 200});
    })
})
routes.get("/", (req,res)=> {
    LockScreen.find({}, (error,result)=> {
        res.send(result);
    })
})

routes.put("/:id", (req,res)=> {
    let id = req.params.id;
    LockScreen.updateMany({_id : id}, req.body, (error)=> {
res.send({success : true, status : 200})
    })
})
module.exports = routes;