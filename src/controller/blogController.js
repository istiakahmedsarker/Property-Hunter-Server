const Blog = require('../models/blogModel');

const getAllBlog = async (req, res) => {
  try {
    const blogs = await Blog.find();

    res.status(200).json({
      status: 'success',
      result: blogs.length,
      data: {
        blogs,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'Fail',
      message: err,
    });
  }
};

module.exports = { getAllBlog };
