const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
  {
    heading: {
      type: String,
      required: [true, 'A blog must  have a heading'],
      // unique: true,
      trim: true,
    },

    description: {
      type: String,
      required: [true, 'A blog must  have a description'],
    },

    createdAt: {
      type: Date,
      default: Date.now(),
      // select: false,
    },
    images: {
      type: [String],
      required: [true, 'A blog must  have a image'],
    },
    // comments: [
    //   {
    //     type: mongoose.Types.ObjectId,
    //     ref: 'Comment',
    //   },
    // ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

blogSchema.virtual('comments', {
  ref: 'Comment',
  foreignField: 'blogId',
  localField: '_id',
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
