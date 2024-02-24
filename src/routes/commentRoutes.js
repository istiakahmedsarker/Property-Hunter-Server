const express = require('express');
const {
  getAllComment,
  createComment,
  updateComment,
  deleteComment,
  getSingleComment,
} = require('../controller/commentController');
const { verifyUser } = require('../controller/authController');
const router = express.Router();

router.route('/').get(getAllComment).post(createComment);
router
  .route('/:id')
  .get(getSingleComment)
  .patch(verifyUser, updateComment)
  .delete(verifyUser, deleteComment);

module.exports = router;
