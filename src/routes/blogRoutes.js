const express = require('express');
const {
  getAllBlog,
  createBlog,
  deleteBlog,
  getSingleBlog,
} = require('../controller/blogController');
// const { verifyUser } = require('../controller/authController');
const router = express.Router();

router.route('/').get(getAllBlog).post(createBlog);
router.route('/:id').get(getSingleBlog).delete(deleteBlog);

module.exports = router;
