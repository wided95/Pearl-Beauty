const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },

  url: {
    type: String,
  },
  category: {
    type: String,
  },
  stock: {
    type: Number,
  },

  review: [],
  createAt: {
    type: Date,
    default: Date.now,
  },
  quantity: {
    type: Number,
    default: 0,
  },
});
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
