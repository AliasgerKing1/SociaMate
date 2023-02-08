require("../../../config/Database");
const mongoose = require("mongoose");

const Files = mongoose.Schema({
 image : String,
 username : String,
 site : String
});
module.exports = mongoose.model("files", Files);
