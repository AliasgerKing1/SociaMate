require("../../config/Database");
const mongoose = require("mongoose");

const admin = mongoose.Schema({
  name : String,
  username: String,
  password: String,
  type: String,
  rights: String,
  description: String,
});
module.exports = mongoose.model("admin", admin);
