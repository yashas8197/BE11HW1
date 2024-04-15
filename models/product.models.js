const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productPhoto: {
    type: String,
    required: true,
  },
  productCategory: {
    type: String,
    required: true,
  },
  productInfo: {
    type: String,
    required: true,
  },
  productColor: {
    type: String,
    required: true,
  },
  productSize: {
    type: String,
    required: true,
  },
  productPrice: {
    type: Number,
    required: true,
  },
});

const ProductCard = mongoose.model("ProductCard", productSchema);

module.exports = ProductCard;
