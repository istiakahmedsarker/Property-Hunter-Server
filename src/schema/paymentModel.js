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
    type: Date,
    default: Date.now,
  },
  amount: {
    type: Number,
    required: [true, "Amount is required"],
  },
  address: {
    type: String,
    required: [true, "Address is required"],
  },
});

const Payment = mongoose.model("payments", paymentSchema);

module.exports = Payment;
