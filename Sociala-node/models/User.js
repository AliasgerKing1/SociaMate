require("../config/database");
const mongoose = require("mongoose");

const User = mongoose.Schema({
  userName: String,
  email: String,
  password: String,
  phone : String,
intrest : String,
country : String,
city : String,
address : String,
bio : String,
image : String
});
module.exports = mongoose.model("user", User);
