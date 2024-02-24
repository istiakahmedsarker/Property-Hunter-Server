const express = require("express");
const {
  getAllPayment,
  createPayment,
  deletePayment,
  getByOwner,
} = require("../controller/paymentController");
const router = express.Router();

router.route("/").get(getAllPayment).post(createPayment);
router.route("/delete-payment/:id").delete(deletePayment);
router.route("/owner-email/:email").get(getByOwner);

module.exports = router;
