const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A comment must have a author name'],
  },
  commentText: {
    type: String,
    // required: [true, 'A comment must have  comment text'],
  },
  rating: {
    type: Number,
    required: [true],
  },
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
