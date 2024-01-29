const Blog = require('../schema/blogModel');
const Comment = require('../schema/commentModel');

const getAllComment = async (req, res) => {
  try {
    const comments = await Comment.find();

    res.status(200).json({
      status: 'success',
      result: comments.length,
      data: {
        comments,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'Fail',
      message: err,
    });
  }
};

const getSingleComment = async (req, res) => {
  const { id } = req.params;
  try {
    const comment = await Comment.findById(id);

    res.status(200).json({
      status: 'success',
      data: {
        comment,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'Fail',
      message: err,
    });
  }
};

const createComment = async (req, res) => {
  try {
    console.log(req.body);
    const comment = await Comment.create(req.body);
    await Blog.updateOne(
      { _id: req.body.blogId },
      {
        $push: {
          comments: comment._id,
        },
      }
    );
    console.log(comment);

    res.status(200).json({
      status: 'success',
      data: {
        comment,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'Fail',
      message: err,
    });
  }
};

const deleteComment = async (req, res) => {
  try {
    const { id } = req.params;
    await Comment.findByIdAndDelete(id);
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

module.exports = {
  getAllComment,
  createComment,
  deleteComment,
  getSingleComment,
};
