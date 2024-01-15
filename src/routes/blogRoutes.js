const express = require('express');
const { getAllBlog } = require('../controller/blogController');
const router = express.Router();

router.route('/').get(getAllBlog);

module.exports = router;
