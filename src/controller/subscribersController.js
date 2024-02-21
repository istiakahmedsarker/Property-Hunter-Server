const Subscribers = require("../schema/subscriberModel");

// create subscriber

const createSubscriber = async (req, res) => {
  try {
    const email = req.body.subscribed_email;
    const filter = await Subscribers.findOne({ subscribed_email: email });
    console.log(filter);
    if (filter) {
      return res.status(200).json({
        status: "failed",
        message: "Already Subscribed by this email",
        data: {
          mail: email,
        },
      });
    } else {
      const subscriber = await Subscribers.create(req.body);
      return res.status(200).json({
        status: "success",
        data: {
          subscriber,
        },
      });
    }
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err,
    });
  }
};

// get all subscriber
const getAllSubscriber = async (req, res) => {
  try {
    const subscribers = await Subscribers.find();
    res.status(200).json({
      status: "success",
      result: subscribers.length,
      data: {
        subscribers,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: err,
    });
  }
};
module.exports = {
  createSubscriber,
  getAllSubscriber,
};
