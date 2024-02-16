const Blog = require('../schema/blogModel');

const getAllBlog = async (req, res) => {
  try {
    console.log(req.query);
    const queryObject = {};

    if (req.query.title) {
      queryObject.heading = { $regex: req.query.title, $options: 'i' };
    }

    let query = Blog.find(queryObject);

    if (req.query.sort) {
      const sortItem = req.query.sort.replace(',', ' ');
      query = query.sort(sortItem);
    }

    if (req.query.select) {
      const selectItem = req.query.select.replace(',', ' ');
      query = query.select(selectItem);
    }

    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 3;

    if (req.query.page || req.query.limit) {
      const skip = (page - 1) * limit;
      query = query.skip(skip).limit(limit);
    }

    const totalBlogs = await Blog.countDocuments();
    const blogs = await query;

    // const blogs = await Blog.find(req.query).select('-__v');

    res.status(200).json({
      status: 'success',
      result: blogs.length,
      data: {
        blogs,
        page,
        limit,
        totalBlogs,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'Fail',
      message: err,
    });
  }
};

const getSingleBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findById(id).populate({
      path: 'comments',
      select: '-__v -createdDate',
    });

    res.status(200).json({
      status: 'success',
      data: {
        blog,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'Fail',
      message: err,
    });
  }
};

const createBlog = async (req, res) => {
  try {
    const blog = await Blog.create(req.body);

    res.status(200).json({
      status: 'success',
      data: {
        blog,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'Fail',
      message: err,
    });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    await Blog.findByIdAndDelete(id);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: 'Fail',
      message: err,
    });
  }
};

module.exports = { getAllBlog, createBlog, deleteBlog, getSingleBlog };
