const express = require("express");
const feedRouter = express.Router();
const Feedback = require("../models/Feedback");
//Post Feedback
feedRouter.post("/add", async (req, res) => {
    try {
      const newFeedback = new Feedback(req.body);
      let result = await newFeedback.save();
      res.send({ feedback: result, msg: "feedback added successfulyyy!!!!" });
    } catch (error) {
      console.log(error);
    }
  });
//GET ALL feedback
feedRouter.get("/", async (req, res) => {
    try {
      let result = await Feedback.find();
      res.send({ feedbacks: result });
    } catch (error) {
      console.log(error);
    }
  });
  //DELETE feedback
  feedRouter.delete("/delete/:id", async (req, res) => {
    try {
      let result = await Feedback.findByIdAndDelete(req.params.id);
      res.send({ msg: "feedback deleted" });
    } catch (error) {
      console.log(error);
    }
  });
  module.exports = feedRouter;