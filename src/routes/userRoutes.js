const express = require('express');
const {
  getAllUser,
  createUser,
  deleteUser,
  getSingleUser,
} = require('../controller/userController');
const router = express.Router();

router.route('/').get(getAllUser).post(createUser);
router.route('/:id').get(getSingleUser).delete(deleteUser);

module.exports = router;
