const routes = require("express").Router();
const Folder = require("../../models/Admin/Storage/Folders");
const File = require("../../models/Admin/Storage/Files")
const randstr = require("random-string");
const path = require("path");
const jwt = require("jsonwebtoken");


routes.post("/folder", (req, res)=> {
   Folder.create(req.body, (error,result)=> {
        res.send(result);
    })
        })
        routes.get("/folder", (req,res)=> {
           Folder.find({}, (error,result)=> {
                res.send(result);
            })
        })
routes.delete("/folder/:id", (req,res)=> {
    let id = req.params.id;
    Folder.findOneAndDelete({_id : id}, (error,result)=> {
        res.send(result)
    })
})






// ---------------------------------File Area----------------------------

routes.post("/file", (req,res)=> {
    let body = JSON.parse(req.body.data);
    let image = req.files.photo;
    randorm_string = randstr({length : 25 });
    let original_name = image.name;
    let arr = original_name.split(".");
    let ext = arr[arr.length-1];
    let new_name = randorm_string + "." + ext;
    body.image = new_name;
    image.mv(path.resolve() + "/assets/files/" + new_name, (error,result)=> {
        File.create(body, (error)=> {
            let obj = {image : new_name, username : body.username};
            res.send(obj);
     })
    })
})

routes.get("/file", (req,res)=> {
    File.find({}).limit(5).sort({id : -1}).exec((error,result)=> {
        res.send(result)
    })
})

routes.delete("/file/:id", (req,res)=> {
    let id = req.params.id;
    File.findOneAndDelete({_id : id}, (error,result)=> {
        res.send(result);
    })
})




module.exports = routes;