const express = require("express");
const reviewRouter = express.Router();
const Review= require("../models/Review");
//Post review
reviewRouter.post("/add", async (req, res) => {
    try {
      const newReview = new Review(req.body);
      let result = await newReview.save();
      res.send({ review: result, msg: "review added successfulyyy!!!!" });
    } catch (error) {
      console.log(error);
    }
  });
//GET ALL reviews
reviewRouter.get("/", async (req, res) => {
    try {
      let result = await Review.find();
      res.send({ review: result });
    } catch (error) {
      console.log(error);
    }
  });
  //DELETE review
  reviewRouter.delete("/delete/:id", async (req, res) => {
    try {
      let result = await Review.findByIdAndDelete(req.params.id);
      res.send({ msg: "review deleted" });
    } catch (error) {
      console.log(error);
    }
  });
  module.exports = reviewRouter;