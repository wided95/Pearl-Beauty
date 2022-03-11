const mongoose = require("mongoose");
const feedbackSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  lastname:{
type:String,
  },
  message: {
    type: String,
  },
});
const Feedback = mongoose.model("Feedback", feedbackSchema);
module.exports = Feedback;
