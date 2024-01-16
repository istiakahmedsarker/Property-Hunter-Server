const Comment = require('../models/commentModel');

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
  } catch (error) {
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

module.exports = { getAllComment, createComment, deleteComment };
