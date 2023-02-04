require("../../config/Database");
const mongoose = require("mongoose");

const TaskBoard = mongoose.Schema({
  name : String,
  innerData : Array
});
module.exports = mongoose.model("taskboard", TaskBoard);
