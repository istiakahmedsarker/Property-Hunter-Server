const express = require("express");
const {
  getAllPayment,
  createPayment,
  deletePayment,
  // getSingleComment,
} = require("../controller/paymentController");
const router = express.Router();

router.route("/").get(getAllPayment).post(createPayment);
router.route("/delete-payment/:id").delete(deletePayment);

module.exports = router;
