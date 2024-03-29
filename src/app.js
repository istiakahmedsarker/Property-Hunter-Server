const express = require("express");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_KEY);
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://property-hunter-tm.netlify.app",
      "https://property-hunter-react.vercel.app",
    ],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

const blogRouter = require("./routes/blogRoutes");
const propertyRouter = require("./routes/propertyRoutes");
const commentRouter = require("./routes/commentRoutes");
const userRouter = require("./routes/userRoutes");
const paymentRouter = require("./routes/paymentRoutes");
const buyerInquiry = require("./routes/buyerInqueryRouters");
const propertyFavorite = require("./routes/propertyFavoriteRouters");
const likeDislikeRoutes = require("./routes/likeDislikeCountsRoutes");
const announcementRouters = require("./routes/annoucementRouters");
const getAnnouncementRoutes = require("./routes/getAnnouncementRoutes");
const subscriberRouters = require("./routes/subscribersRoutes");
const sendEmailRouter = require("./routes/sendEmailRouters");
const authRouter = require("./routes/authRouter");
// const apartmentRouter = require("./routes/apartmentRoutes");

// initial server start
app.get("/", (req, res) => {
  res
    .status(200)
    .json({ message: "Server is running", app: "Property Hunter" });
});

// routes mounting
app.use("/api/v1/blogs", blogRouter);
app.use("/api/v1/properties", propertyRouter);
app.use("/api/v1/comments", commentRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/payments", paymentRouter);
app.use("/api/v1/buyer-inquiries", buyerInquiry);
app.use("/api/v1/property-favorite", propertyFavorite);
app.use("/api/v1/like-dislike", likeDislikeRoutes);
app.use("/api/v1/announcement", announcementRouters);
app.use("/api/v1/getAnnouncement", getAnnouncementRoutes);
app.use("/api/v1/subscriber", subscriberRouters);
app.use("/api/v1/send-emails", sendEmailRouter);
app.use("/api/v1/jwt", authRouter);

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

// handle error for unknown routes
app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: `Can't find ${req.originalUrl} on this server`,
  });
});

module.exports = app;
