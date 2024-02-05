const express = require("express");
const {
  getAllUser,
  createUser,
  deleteUser,
  getSingleUser,
  makeAdmin,
} = require("../controller/userController");
const router = express.Router();

router.route("/").get(getAllUser).post(createUser);
router.route("/:id").get(getSingleUser).delete(deleteUser);
router.route("/make-admin/:id").put(makeAdmin);

module.exports = router;
