const express = require("express");
const {
  createAnnouncement,
  getAllAnnouncement,
  getById,
  updateById,
} = require("../controller/announcementController");
const router = express.Router();

router.route("/create-announcement").post(createAnnouncement);
router.route("/").get(getAllAnnouncement);
router.route("/:id").get(getById);
router.route("/update/:id").put(updateById);

module.exports = router;
