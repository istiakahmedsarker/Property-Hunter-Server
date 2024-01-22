const express = require('express');
const {
  getAllComment,
  createComment,
  deleteComment,
  getSingleComment,
} = require('../controller/commentController');
const router = express.Router();

router.route('/').get(getAllComment).post(createComment);
router.route('/:id').get(getSingleComment).delete(deleteComment);

module.exports = router;
