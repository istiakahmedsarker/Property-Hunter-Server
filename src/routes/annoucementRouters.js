const express = require("express");
const {
  createAnnouncement,
  getAllAnnouncement,
} = require("../controller/announcementController");
const router = express.Router();

router.route("/create-announcement").post(createAnnouncement);
router.route("/").get(getAllAnnouncement);

module.exports = router;
