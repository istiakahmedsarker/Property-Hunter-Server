const mongoose = require("mongoose");

const subscribersSchema = new mongoose.Schema({
  subscribed_email: {
    type: String,
    required: [true, "Subscriber email is required"],
  },
  subscribed_date: {
    type: String,
    required: [true, "Subscriber date is required"],
  },
  subscribed_time: {
    type: String,
    required: [true, "Subscriber time is required"],
  },
});

const Subscriber = mongoose.model("subscriber", subscribersSchema);
module.exports = Subscriber;
