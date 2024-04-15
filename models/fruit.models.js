const mongoose = require("mongoose");

const fruitSchema = new mongoose.Schema({
  fruitName: {
    type: String,
    required: true,
  },
  fruitImg: {
    type: String,
    required: true,
  },
  fruitDescription: {
    type: String,
    required: true,
  },
  fruitCalories: {
    type: Number,
    required: true,
  },
  fruitCarboHydrates: {
    type: Number,
    required: true,
  },
  fruitProtien: {
    type: Number,
    requried: true,
  },
  fruitFat: {
    type: Number,
    required: true,
  },
});

const FruitPost = mongoose.model("FruitPost", fruitSchema);

module.exports = FruitPost;
