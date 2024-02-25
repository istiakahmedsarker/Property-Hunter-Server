const express = require("express");

const {
  getAllInquiry,
  createInquiry,
  statusAccept,
  statusReject,
  deleteInquiry,
  getInquiryById,
  getByOwnerEmail,
} = require("../controller/buyerInquiryController");

const router = express.Router();

router.route("/").get(getAllInquiry).post(createInquiry);
router.route("/status-accept/:id").put(statusAccept);
router.route("/status-reject/:id").put(statusReject);
router.route("/delete/:id").delete(deleteInquiry);
router.route("/:inquiryid").get(getInquiryById);
router.route("/owner-email/:email").get(getByOwnerEmail);

module.exports = router;
