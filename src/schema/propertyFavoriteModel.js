const mongoose = require("mongoose");

const propertyFavoriteSchema = new mongoose.Schema({
  user_email: {
    type: String,
    require: [true, "User email is required"],
  },
  property_id: {
    type: String,
    require: [true, "Property ID is required"],
  },
});

const PropertyFavorite = mongoose.model(
  "PropertyFavorite",
  propertyFavoriteSchema
);

module.exports = PropertyFavorite;
