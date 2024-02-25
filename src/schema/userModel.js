const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A user must have a name'],
    },
    role: {
      type: String,
      default: 'user',
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'A user must have a email'],
    },
    image: {
      type: String,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

userSchema.virtual('blogs', {
  ref: 'Blog',
  foreignField: 'author',
  localField: '_id',
});

const User = mongoose.model('User', userSchema);

module.exports = User;
