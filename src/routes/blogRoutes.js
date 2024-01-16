const express = require('express');
const {
  getAllBlog,
  createBlog,
  deleteBlog,
} = require('../controller/blogController');
const router = express.Router();

router.route('/').get(getAllBlog).post(createBlog);
router.route('/:id').delete(deleteBlog);

module.exports = router;
