const Payment = require("../schema/paymentModel");

const getAllPayment = async (req, res) => {
  try {
    let payments;
    if (req.query.useremail) {
      payments = await Payment.find({ customer_email: req.query.useremail });
      res.status(200).json({
        status: "success",
        result: payments.length,
        data: {
          payments,
        },
      });
    } else {
      payments = await Payment.find();
      res.status(200).json({
        status: "success",
        result: payments.length,
        data: {
          payments,
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

const createPayment = async (req, res) => {
  try {
    const payment = await Payment.create(req.body);

    res.status(200).json({
      status: "success",
      data: {
        payment,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err,
    });
  }
};

const deletePayment = async (req, res) => {
  try {
    const { id } = req.params;
    await Payment.findByIdAndDelete(id);
    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err,
    });
  }
};

const getAllPaymentByEmail = async (req, res) => {
  try {
    const { useremail } = req.query;

    if (!useremail) {
      return res.status(400).json({
        status: "Fail",
        message: "Missing 'useremail' parameter in the query.",
      });
    }

    const payments = await Payment.find({ customer_email: useremail });

    res.status(200).json({
      status: "success",
      result: payments.length,
      data: {
        payments,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err.message,
    });
  }
};


module.exports = {
  getAllPayment,
  getAllPaymentByEmail,
  createPayment,
  deletePayment,
};
