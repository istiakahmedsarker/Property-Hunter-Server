const BuyerInquiry = require("../schema/buyerInquiry");

const getAllInquiry = async (req, res) => {
  try {
    const user_email = req.query.useremail;
    let inquiries;
    if (user_email) {
      inquiries = await BuyerInquiry.find({ user_email: user_email });
      res.status(200).json({
        status: "success",
        result: inquiries.length,
        data: {
          inquiries,
        },
      });
    } else {
      inquiries = await BuyerInquiry.find();
      res.status(200).json({
        status: "success",
        result: inquiries.length,
        data: {
          inquiries,
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

const createInquiry = async (req, res) => {
  try {
    const inquiry = await BuyerInquiry.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        inquiry,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err,
    });
  }
};

const statusAccept = async (req, res) => {
  try {
    const id = req.params.id;
    const filter = { _id: id };
    const update = { status: "accepted" };
    await BuyerInquiry.findOneAndUpdate(filter, update);
    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err,
    });
  }
};

const statusReject = async (req, res) => {
  try {
    const id = req.params.id;
    const filter = { _id: id };
    const update = { status: "rejected" };
    await BuyerInquiry.findOneAndUpdate(filter, update);
    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err,
    });
  }
};
module.exports = {
  getAllInquiry,
  createInquiry,
  statusAccept,
  statusReject,
};
