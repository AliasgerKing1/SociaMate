require("../../config/Database");
const mongoose = require("mongoose");

const AdminProfilePhoto = mongoose.Schema({
 username : String,
 image : String
});
module.exports = mongoose.model("adminphoto", AdminProfilePhoto);
