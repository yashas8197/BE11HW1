const mongoose = require("mongoose");

const flipKartProduct = new mongoose.Schema({
  flipKartProductName: {
    type: String,
    required: true,
  },
  flipKartProductUrl: {
    type: String,
    required: true,
  },
  flipKartProductRating: {
    type: Number,
    required: true,
  },
  flipKartProductDescrition: {
    type: String,
    required: true,
  },
  flipKartProductfeature: {
    type: String,
    required: true,
  },
  flipKartProductWarrenty: {
    type: Number,
    required: true,
  },
  flipKartProductPrice: {
    type: Number,
    required: true,
  },
  flipKartProductDiscount: {
    type: Number,
    required: false,
  },
  flipKartProductDelivery: {
    type: String,
    required: true,
  },
  flipKartProductAvailable: {
    type: String,
    required: true,
  },
});

const FlipkartProduct = mongoose.model("FlipkartProduct", flipKartProduct);

module.exports = FlipkartProduct;
