const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  social_title: {
    type: String,
  },
  name: {
    type: String,
  },
  lastname: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  Birthdata: {
    type: Date,
  },

  isAdmin: {
    type: Boolean,
    default: false,
  },
});
const User = mongoose.model("User", userSchema);
module.exports = User;
