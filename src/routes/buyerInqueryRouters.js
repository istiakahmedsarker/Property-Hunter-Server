const express = require("express");

const {
  getAllInquiry,
  createInquiry,
  statusAccept,
  statusReject,
  deleteInquiry,
  getInquiryById,
} = require("../controller/buyerInquiryController");

const router = express.Router();

router.route("/").get(getAllInquiry).post(createInquiry);
router.route("/status-accept/:id").put(statusAccept);
router.route("/status-reject/:id").put(statusReject);
router.route("/delete/:id").delete(deleteInquiry);
router.route("/:inquiryid").get(getInquiryById);

module.exports = router;
