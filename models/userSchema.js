const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  phone: Number,
});
const userDB = mongoose.model("userTbl", userSchema);

module.exports = userDB;
