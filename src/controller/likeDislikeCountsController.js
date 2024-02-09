const Comment = require("../schema/commentModel");
const increaseLike = async (req, res) => {
  const { id } = req.params;

  try {
    // Find the comment by its _id
    const comment = await Comment.findById(id);

    // If the comment is found, increment the likesCount
    if (comment) {
      comment.likesCount += 1; // Assuming likesCount is a numeric field

      // Save the updated comment
      const updatedComment = await comment.save();

      res.status(200).json({
        status: "success",
        data: {
          comment: updatedComment,
        },
      });
    } else {
      // If the comment is not found, respond with an error
      res.status(404).json({
        status: "Fail",
        message: "Comment not found",
      });
    }
  } catch (err) {
    // Handle any errors that occur during the process
    res.status(400).json({
      status: "Fail",
      message: err.message,
    });
  }
};

const increaseDislike = async (req, res) => {
  const { id } = req.params;

  try {
    // Find the comment by its _id
    const comment = await Comment.findById(id);

    // If the comment is found, increment the dislikesCount
    if (comment) {
      comment.dislikesCount += 1; // Assuming dislikesCount is a numeric field

      // Save the updated comment
      const updatedComment = await comment.save();

      res.status(200).json({
        status: "success",
        data: {
          comment: updatedComment,
        },
      });
    } else {
      // If the comment is not found, respond with an error
      res.status(404).json({
        status: "Fail",
        message: "Comment not found",
      });
    }
  } catch (err) {
    // Handle any errors that occur during the process
    res.status(400).json({
      status: "Fail",
      message: err.message,
    });
  }
};

const decreaseLike = async (req, res) => {
  const { id } = req.params;

  try {
    // Find the comment by its _id
    const comment = await Comment.findById(id);

    // If the comment is found, decrement the likesCount
    if (comment) {
      // Ensure likesCount doesn't go below zero
      comment.likesCount = Math.max(0, comment.likesCount - 1);

      // Save the updated comment
      const updatedComment = await comment.save();

      res.status(200).json({
        status: "success",
        data: {
          comment: updatedComment,
        },
      });
    } else {
      // If the comment is not found, respond with an error
      res.status(404).json({
        status: "Fail",
        message: "Comment not found",
      });
    }
  } catch (err) {
    // Handle any errors that occur during the process
    res.status(400).json({
      status: "Fail",
      message: err.message,
    });
  }
};

const decreaseDislike = async (req, res) => {
  const { id } = req.params;

  try {
    // Find the comment by its _id
    const comment = await Comment.findById(id);

    // If the comment is found, decrement the dislikesCount
    if (comment) {
      // Ensure dislikesCount doesn't go below zero
      comment.dislikesCount = Math.max(0, comment.dislikesCount - 1);

      // Save the updated comment
      const updatedComment = await comment.save();

      res.status(200).json({
        status: "success",
        data: {
          comment: updatedComment,
        },
      });
    } else {
      // If the comment is not found, respond with an error
      res.status(404).json({
        status: "Fail",
        message: "Comment not found",
      });
    }
  } catch (err) {
    // Handle any errors that occur during the process
    res.status(400).json({
      status: "Fail",
      message: err.message,
    });
  }
};

module.exports = {
  increaseLike,
  increaseDislike,
  decreaseLike,
  decreaseDislike,
};
