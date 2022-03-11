const express = require("express");
const productRouter = express.Router();
const Product = require("../models/Product");

//Post Product
productRouter.post("/add", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    let result = await newProduct.save();
    res.send({ product: result, msg: "product added successfulyyy!!!!" });
  } catch (error) {
    console.log(error);
  }
});
//GET ALL PRODUCTS
productRouter.get("/", async (req, res) => {
  try {
    let result = await Product.find();
    res.send({ products: result });
  } catch (error) {
    console.log(error);
  }
});
// GET PRODUCT BY ID
productRouter.get("/:id", async (req, res) => {
  try {
    let result = await Product.findById(req.params.id);
    res.send({ product: result, msg: "product by id" });
  } catch (error) {
    console.log(error);
  }
});
//UPDATE PRODUCT
productRouter.put("/:id", async (req, res) => {
  try {
    let result = await Product.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ msg: "product updated" });
  } catch (error) {
    console.log(error);
  }
});
// UPDATE REVIEW
productRouter.put("/rate/:id", async (req, res) => {
  try {
    let result = await Product.findByIdAndUpdate(
      { _id: req.params.id },
      { $push: { review: { ...req.body } } }
    );
    res.send({ msg: "review added" });
  } catch (error) {
    console.log(error);
  }
});
// DELETE REVIEW

//DELETE PRODUCT
productRouter.delete("/:id", async (req, res) => {
  try {
    let result = await Product.findByIdAndDelete({ _id: req.params.id });
    res.send({ msg: "product deleted" });
  } catch (error) {
    console.log(error);
  }
});
module.exports = productRouter;
