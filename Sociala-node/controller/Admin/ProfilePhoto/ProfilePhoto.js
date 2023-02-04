const routes = require("express").Router();
const Photo = require("../../../models/Admin/ProfilePhoto");
const randstr = require("random-string");
const path = require("path");
const jwt = require("jsonwebtoken");

routes.get("/", (req,res)=> {

   if(req.headers.header) {
      let token = req.headers.header;
      let obj = jwt.decode(token, "Aliasger web");
    Photo.find({username : obj.username}, (error, result)=> {
        let new_result = result.map((x)=> {
            x.image = "http://localhost:4000/admin_image/" + x.image;
            return x;
        })
        res.send(new_result);
        })
    } 
})

routes.post("/", (req,res)=> {
    let body = JSON.parse(req.body.data);
        let image = req.files.photo;
    randorm_string = randstr({length : 50 });
    let original_name = image.name;
    let arr = original_name.split(".");
    let ext = arr[arr.length-1];
    let new_name = randorm_string + "." + ext;
    body.image = new_name;
    image.mv(path.resolve() + "/assets/admin_image/" + new_name, (error)=> {
        Photo.create(body, (error)=> {
            let obj = {image : "http://localhost:4000/admin_image/" + new_name, username : body.username};
         res.send(obj);
     })
    })
})


module.exports = routes;