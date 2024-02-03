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
    enum: ["apartment", "home", "villa"],
  },
  question: {
    type: String,
    required: [true, "Question is required"],
  },
});

const BuyerInquiry = mongoose.model("BuyerInquiry", buyerInquirySchema);
module.exports = BuyerInquiry;
