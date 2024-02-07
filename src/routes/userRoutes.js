const express = require('express');
const {
  getAllUser,
  createUser,
  deleteUser,
  getSingleUser,
  makeAdmin,
  getSingleUserWithEmail,
} = require('../controller/userController');
const router = express.Router();

router.route('/').get(getAllUser).post(createUser);
router.route('/:id').get(getSingleUser).delete(deleteUser);
router.route('/make-admin/:id').put(makeAdmin);
router.route('/email/:email').get(getSingleUserWithEmail);

module.exports = router;
