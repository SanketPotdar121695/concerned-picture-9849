const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    body: String,
    device: {
      type: String,
      enum: ['Laptop', 'Tablet', 'Mobile'],
      required: true
    },
    no_of_comments: Number,
    userID: String
  },
  {
    versionKey: false
  }
);

const PostModel = mongoose.model('post', postSchema);

module.exports = { PostModel };

// Note -: The above schema is subject to change.
