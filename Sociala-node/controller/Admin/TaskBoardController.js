const routes = require("express").Router();
const TaskBoard = require("../../models/Admin/TaskBoard");
const jwt = require("jsonwebtoken");

routes.post("/", (req, res)=> {
   TaskBoard.create(req.body, (error)=> {
        let obj = {name : req.body.name, innerdata : req.body.innerData}
        res.send(obj);
    })
        })
routes.put("/:id", (req, res)=> {
    let id = req.params.id;
   TaskBoard.updateMany({_id : id},{$push:{innerData : req.body}}, (error)=> {
        let obj = {
            projectname : req.body.projectname,
        tasktitle : req.body.tasktitle,
        taskdescription : req.body.taskdescription,
        duedate : req.body.duedate,
        tags : req.body.tags,
        tasksprogress : req.body.tasksprogress
        }
        res.send(obj);
    })
        })
routes.delete("/:id", (req,res)=> {
    let id = req.params.id;
    TaskBoard.deleteMany({_id : id}, (error)=> {
        res.send({success : true, status : 200})
    })
})
routes.get("/", (req,res)=> {
   TaskBoard.find({}, (error,result)=> {
        res.send(result);
    })
})

routes.get("/details/:id", (req,res)=> {
    let id = req.params.id;
    TaskBoard.find({_id : id }, (error,result)=> {
        res.send(result[0]);
    })
})
module.exports = routes;