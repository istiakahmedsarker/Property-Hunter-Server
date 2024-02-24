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

    // .populate({
    //   path: 'user',
    //   select: 'name email',
    // });

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
    console.log(comment);
    const up = await Blog.updateOne(
      { _id: req.body.blogId },
      {
        $push: {
          comments: comment._id,
        },
      }
    );

    console.log(up);

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

const updateComment = async (req, res) => {
  const { id } = req.params;
  const { likeEmail, disLikeEmail, commentMsg } = req.body;

  try {
    const comment = await Comment.findById(id);
    const likesCount = comment.likesCount || [];
    const dislikesCount = comment.dislikesCount || [];
    const isLiked = likesCount.includes(likeEmail);
    const isDisliked = dislikesCount.includes(disLikeEmail);

    let updateFields = {};

    if (likeEmail) {
      if (isLiked) {
        updateFields = { $pull: { likesCount: likeEmail } };
      } else {
        updateFields = {
          $push: { likesCount: likeEmail },
          $pull: { dislikesCount: likeEmail },
        };
      }
    }

    if (disLikeEmail) {
      if (isDisliked) {
        updateFields = { $pull: { dislikesCount: disLikeEmail } };
      } else {
        updateFields = {
          $push: { dislikesCount: disLikeEmail },
          $pull: { likesCount: disLikeEmail },
        };
      }
    }

    if (commentMsg) {
      updateFields = { commentMsg };
    }

    const updateComment = await Comment.findByIdAndUpdate(id, updateFields, {
      new: true,
    });

    res.status(200).json({
      status: 'success',
      data: {
        updateComment,
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
  updateComment,
  deleteComment,
  getSingleComment,
};
