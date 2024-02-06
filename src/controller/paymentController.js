const Payment = require("../schema/paymentModel");

const getAllPayment = async (req, res) => {
  try {
    const payments = await Payment.find();

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
      message: err,
    });
  }
};

// const getSingleComment = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const comment = await Comment.findById(id);

//     res.status(200).json({
//       status: "success",
//       data: {
//         comment,
//       },
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: "Fail",
//       message: err,
//     });
//   }
// };

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

// const deleteComment = async (req, res) => {
//   try {
//     const { id } = req.params;
//     await Comment.findByIdAndDelete(id);
//     res.status(204).json({
//       status: "success",
//       data: null,
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: "Fail",
//       message: err,
//     });
//   }
// };

module.exports = {
  getAllPayment,
  createPayment,
  //   deleteComment,
  //   getSingleComment,
};
