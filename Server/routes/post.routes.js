const { Router } = require('express');
const { auth } = require('../middlewares/auth.middleware');
const {
  createPost,
  getPosts,
  updatePost,
  deletePost,
  addComment,
  deleteComment
} = require('../controllers/post.controllers');

const postRouter = Router();

// Routes for CRUD operations on posts
postRouter.post('/create', auth, createPost);
postRouter.get('/:myPosts?', auth, getPosts); // Updates required
postRouter.patch('/update/:postID', auth, updatePost);
postRouter.delete('/delete/:postID', auth, deletePost);

// Routes for comments
postRouter.post('/comments/add/:postID', auth, addComment);
postRouter.delete('/comments/delete/:postID/:commentID', auth, deleteComment);

module.exports = { postRouter };
