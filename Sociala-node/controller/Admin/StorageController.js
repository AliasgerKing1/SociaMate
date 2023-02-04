const routes = require("express").Router();
const Folder = require("../../models/Admin/Storage/Folders");
const jwt = require("jsonwebtoken");

routes.post("/folder", (req, res)=> {
   Folder.create(req.body, (error)=> {
        let obj = {folder_name : req.body.folder_name}
        res.send(obj);
    })
        })
        routes.get("/folder", (req,res)=> {
           Folder.find({}, (error,result)=> {
                res.send(result);
            })
        })
// routes.put("/:id", (req, res)=> {
//     let id = req.params.id;
//    Folder.updateMany({_id : id},{$push:{innerData : req.body}}, (error)=> {
//         let obj = {
//             projectname : req.body.projectname,
//         tasktitle : req.body.tasktitle,
//         taskdescription : req.body.taskdescription,
//         duedate : req.body.duedate,
//         tags : req.body.tags,
//         tasksprogress : req.body.tasksprogress
//         }
//         res.send(obj);
//     })
//         })
// routes.delete("/:id", (req,res)=> {
//     let id = req.params.id;
//     Folder.deleteMany({_id : id}, (error)=> {
//         res.send({success : true, status : 200})
//     })
// })

// routes.get("/details/:id", (req,res)=> {
//     let id = req.params.id;
//     Folder.find({_id : id }, (error,result)=> {
//         res.send(result[0]);
//     })
// })
module.exports = routes;