require("../config/database");
const mongoose = require("mongoose");

const Country = mongoose.Schema({
 name: String,
 code: String,
});
module.exports = mongoose.model("country", Country);
