const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  customer_name: {
    type: String,
    required: [true, "Customer Name is required"],
  },
  customer_email: {
    type: String,
    required: [true, "Email is required"],
  },
  transaction_id: {
    type: String,
    required: [true, "Transaction ID is required"],
  },
  transaction_date: {
    type: String,
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
  },
  country: {
    type: String,
    required: [true, "Country is required"],
  },
  status: {
    type: String,
    required: [true, "Status is required"],
  },
  property_id: {
    type: String,
    required: [true, "property id is required"],
  },
  owner_email: {
    type: String,
    required: [true, "owner email is required"],
  },
  time: {
    type: String,
  },
  date: {
    type: String,
  },
});

const Payment = mongoose.model("payments", paymentSchema);

module.exports = Payment;
