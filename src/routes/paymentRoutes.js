const express = require("express");
const {
  getAllPayment,
  getAllPaymentByEmail,
  createPayment,
  deletePayment,
  // getSingleComment,
} = require("../controller/paymentController");
const router = express.Router();

router.route("/").get(getAllPayment).post(createPayment);
router.route("/delete-payment/:id").delete(deletePayment);
router.route("/get-payment-by-email").get(getAllPaymentByEmail);

module.exports = router;
