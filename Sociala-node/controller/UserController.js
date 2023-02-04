const routes = require("express").Router();
const User = require("../models/User");
const sha1 = require("sha1");
const jwt = require("jsonwebtoken");
const randstr = require("random-string");
const path = require("path");

routes.post("/", (req, res)=> {
    delete req.body.confPass;
    req.body.password = sha1(req.body.password);
    User.create(req.body, (error)=> {
        res.send({success : true, status : 200});
    })
        })
routes.post("/loginauth", (req, res)=> {
    let email = req.body.email;
    let password = sha1(req.body.password);
    User.find({email : email}, (error, result)=> {
        if(result.length == 1) {
            if(result[0].password == password) {
                let obj = {id : result[0]._id, email : result[0].email};
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

routes.get("/", (req,res)=> {
    
    User.find({}, (error, result)=> {
        let new_result = result.map((x)=> {
            x.image = "http://localhost:4000/user_images/" + x.image;
            return x;
        })
        res.send(new_result);
        })
})
routes.delete("/:id", (req,res)=> {
    let id = req.params.id;
    User.deleteMany({_id : id}, (error)=> {
        res.send({success : true, status : 200});
    })
})

routes.put("/:id", (req,res)=> {
    let id = req.params.id;
    let body = JSON.parse(req.body.data);
        let image = req.files.photo;
    randorm_string = randstr({length : 50 });
    let original_name = image.name;
    let arr = original_name.split(".");
    let ext = arr[arr.length-1];
    let new_name = randorm_string + "." + ext;
    body.image = new_name;
    image.mv(path.resolve() + "/assets/user_images/" + new_name, (error)=> {
        User.updateMany({_id : id},body, (error)=> {
            let obj = {image : "http://localhost:4000/user_images/" + new_name, userName : body.userName};
         res.send(obj);
     })
    })
})


routes.get("/total", (req, res) => {
  User.count((error, result) => {
    res.send({ total: result });
  });
});
module.exports = routes;