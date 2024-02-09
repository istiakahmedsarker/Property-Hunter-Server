const mongoose = require("mongoose");

const propertyFavoriteSchema = new mongoose.Schema({
  property_id: {
    type: String,
    required: [true, "Property ID is required"],
  },
  property_title: {
    type: String,
    required: [true, "Property title is required"],
  },
  user_email: {
    type: String,
    required: [true, "User email is required"],
  },
  property_images: {
    type: String,
    required: [true, "Property image is required"],
  },
  price: {
    type: Number,
    required: [true, "Property price is required"],
  },
  property_location: {
    type: String,
    required: [true, "Property location is required"],
  },
});

const PropertyFavorite = mongoose.model(
  "PropertyFavorite",
  propertyFavoriteSchema
);

module.exports = PropertyFavorite;
