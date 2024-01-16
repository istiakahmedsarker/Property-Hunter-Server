const express = require('express');
const {
  getAllComment,
  createComment,
  deleteComment,
} = require('../controller/commentController');
const router = express.Router();

router.route('/').get(getAllComment).post(createComment);
router.route('/:id').delete(deleteComment);

module.exports = router;
