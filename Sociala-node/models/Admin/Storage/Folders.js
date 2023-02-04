require("../../../config/Database");
const mongoose = require("mongoose");

const Folders = mongoose.Schema({
 folder_name : String,
 data : Array
});
module.exports = mongoose.model("folder", Folders);
