const express = require("express");

const {
  getAllInquiry,
  createInquiry,
  statusAccept,
  statusReject,
} = require("../controller/buyerInquiryController");

const router = express.Router();

router.route("/").get(getAllInquiry).post(createInquiry);
router.route("/status-accept/:id").put(statusAccept);
router.route("/status-reject/:id").put(statusReject);

module.exports = router;
