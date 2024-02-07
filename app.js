require("dotenv").config();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./src/app");
const stripe = require("stripe")(process.env.STRIPE_KEY);
dotenv.config();

const port = process.env.PORT || 3000;

const db = process.env.DATABASE;

const main = async () => {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("DB connect successfully");
};

// payment stripe

app.post("/api/v1/create-payment-intent", async (req, res) => {
  const { price } = req.body;
  const amount = parseInt(price * 100);
  console.log("amount", amount);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: "usd",
    payment_method_types: ["card"],
  });
  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

main().catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Server running from port ${port}`);
});
