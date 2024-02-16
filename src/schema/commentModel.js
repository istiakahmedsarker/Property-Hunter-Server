const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A comment must have a author name'],
    },
    commentMsg: {
      type: String,
      required: [true, 'A comment must have  comment message'],
    },
    authorImg: {
      type: String,
      required: [true, 'A comment must have author image'],
    },
    likesCount: [String],
    dislikesCount: [String],
    rating: {
      type: Number,
      required: [true, 'A comment must have  comment text'],
    },
    createdDate: {
      type: Date,
      default: Date.now(),
    },
    // user: {
    //   type: mongoose.Types.ObjectId,
    //   ref: 'User',
    //   required: [true, 'Needed'],
    // },
    blogId: {
      type: mongoose.Types.ObjectId,
      ref: 'Blog',
      required: [true, 'Needed'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
