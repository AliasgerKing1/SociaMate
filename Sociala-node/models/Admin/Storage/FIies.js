require("../../../config/Database");
const mongoose = require("mongoose");

const Files = mongoose.Schema({
 Files : Array,
});
module.exports = mongoose.model("files", Files);
