const express = require("express");

const {
  createSubscriber,
  getAllSubscriber,
  deleteSubscriber,
} = require("../controller/subscribersController");

const router = express.Router();

router.route("/add-subscriber").post(createSubscriber);
router.route("/all-subscriber").get(getAllSubscriber);
router.route("/delete/:id").delete(deleteSubscriber);

module.exports = router;
