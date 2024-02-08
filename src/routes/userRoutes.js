const express = require("express");
const {
  getAllUser,
  createUser,
  deleteUser,
  getSingleUser,
  makeModerator,
  makeMember,
  makeUser,
} = require("../controller/userController");
const router = express.Router();

router.route("/").get(getAllUser).post(createUser);
router.route("/:id").get(getSingleUser).delete(deleteUser);
router.route("/make-moderator/:id").put(makeModerator);
router.route("/make-member/:id").put(makeMember);
router.route("/make-user/:id").put(makeUser);

module.exports = router;
