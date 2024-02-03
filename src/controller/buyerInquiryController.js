const BuyerInquiry = require("../schema/buyerInquiry");

const getAllInquiry = async (req, res) => {
  try {
    const inquiries = await BuyerInquiry.find();
    res.status(200).json({
      status: "success",
      result: inquiries.length,
      data: {
        inquiries,
      },
    });
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

module.exports = {
  getAllInquiry,
  createInquiry,
};
