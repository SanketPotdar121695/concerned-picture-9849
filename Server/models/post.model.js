const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  sub_headings: [String],
  descriptions: [String],
  images: [String]
});

const commentSchema = new mongoose.Schema({
  userID: String,
  username: String,
  comment: String
});

const likeSchema = new mongoose.Schema({
  userID: String,
  like: {
    type: String,
    enum: ['liked', 'disliked', 'neutral']
  }
});

const subscribeSchema = new mongoose.Schema({
  userID: String,
  subscribed: Boolean
});

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    category: { type: String, required: true },
    comments: [commentSchema],
    content: contentSchema,
    cover_image: String,
    subscribes: [subscribeSchema],
    likes: [likeSchema],
    rating: Number,
    date: String,
    userID: String
  },
  {
    versionKey: false
  }
);

const DeletedPostModel = mongoose.model('deleted_post', postSchema);
const PostModel = mongoose.model('post', postSchema);

module.exports = { PostModel, DeletedPostModel };