const express = require("express");
const {
  getAllPayment,
  createPayment,
  //   deleteComment,
  //   getSingleComment,
} = require("../controller/paymentController");
const router = express.Router();

router.route("/").get(getAllPayment).post(createPayment);
// router.route("/:id").get(getSingleComment).delete(deleteComment);

module.exports = router;
