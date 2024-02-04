const mongoose = require("mongoose");
//     "email": "user.email",
//     "name": "user.displayName",
//     "country": "selectedCountry",
//     "price": "properties.price",
//     "serviceCharge": "serviceChargeAmount",
//     "transactionId": "paymentIntent.id",
//     "date": "new Date()",
//     "status": "pending"

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
});

const Payment = mongoose.model("payments", paymentSchema);

module.exports = Payment;
