const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    cuisines: {
      type: [String],
      enum: [
        "Italian",
        "Mexican",
        "Chinese",
        "Indian",
        "American",
        "French",
        "Japanese",
        "Mediterranean",
        "Thai",
        "Vegetarian",
        "Vegan",
        "Other",
      ],
    },
    location: {
      type: String,
      required: true,
    },
    owner: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    owner: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
    },
    website: {
      type: String,
    },
    openingYear: {
      type: Number,
    },
    rating: {
      type: Number,
    },
    specialDishes: {
      type: [String],
    },
    photoUrls: {
      type: [String],
    },
  },
  { timestamps: true },
);

const Restaurants = mongoose.model("Restaurants", restaurantSchema);

module.exports = Restaurants;
