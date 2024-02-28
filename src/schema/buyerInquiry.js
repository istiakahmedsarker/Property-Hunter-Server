const mongoose = require("mongoose");

const buyerInquirySchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  phone: {
    type: Number,
    required: [true, "Phone number is required"],
  },
  job_title: {
    type: String,
    required: [true, "Job title is required"],
  },
  annual_income: {
    type: Number,
    required: [true, "Income is required"],
  },
  savings: {
    type: Number,
    required: [true, "Savings is required"],
  },
  home_preferences: {
    type: String,
    required: [true, "Home Preference is required"],
    enum: ["apartment", "home", "villa", "office"],
  },
  question: {
    type: String,
  },
  status: {
    type: String,
    default: "pending",
  },
  user_email: {
    type: String,
    required: [true, "User Email is required"],
  },
  buyer_property_images: {
    type: String,
    required: [true, "Property image is required"],
  },
  buyer_property_title: {
    type: String,
    required: [true, "Property title is required"],
  },
  buyer_property_price: {
    type: Number,
    required: [true, "Property price is required"],
  },
  buyer_property_squareFootage: {
    type: Number,
    required: [true, "Property square footage is required"],
  },
  buyer_property_ownerEmail: {
    type: String,
  },
  buyer_property_id: {
    type: String,
  },
  date: {
    type: String,
  },
});

const BuyerInquiry = mongoose.model("BuyerInquiry", buyerInquirySchema);
module.exports = BuyerInquiry;
