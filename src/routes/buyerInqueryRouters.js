const express = require("express");

const {
  getAllInquiry,
  createInquiry,
} = require("../controller/buyerInquiryController");

const router = express.Router();

router.route("/").get(getAllInquiry).post(createInquiry);

module.exports = router;
