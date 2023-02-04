require("../../config/Database");
const mongoose = require("mongoose");

const LockScreen = mongoose.Schema({
  password: String,
  username : String
});
module.exports = mongoose.model("lockscreen", LockScreen);
