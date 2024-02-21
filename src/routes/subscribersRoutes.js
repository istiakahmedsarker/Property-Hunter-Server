const express = require("express");

const {
  createSubscriber,
  getAllSubscriber,
} = require("../controller/subscribersController");

const router = express.Router();

router.route("/add-subscriber").post(createSubscriber);
router.route("/all-subscriber").get(getAllSubscriber);

module.exports = router;
