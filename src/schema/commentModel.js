const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
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
  likesCount: {
    type: Number,
  },
  dislikesCount: {
    type: Number,
  },
  rating: {
    type: Number,
    required: [true, 'A comment must have  comment text'],
  },
  createdDate: {
    type: Date,
    default: Date.now(),
  },
  blogId: {
    type: String,
  },
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
