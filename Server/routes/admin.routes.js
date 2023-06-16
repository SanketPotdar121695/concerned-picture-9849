const { Router } = require('express');
const { authAdmin } = require('../middlewares/authAdmin.middleware');
const {
  getPostsforAdmin,
  deletePostforAdmin,
  getUsersforAdmin,
  updateUserforAdmin,
  deleteUserforAdmin,
  getDeletedPostsforAdmin
} = require('../controllers/admin.cotrollers');

const adminRouter = Router();

// Users routes for admin
adminRouter.get('/users/:userID?', authAdmin, getUsersforAdmin);
adminRouter.patch('/users/update/:userID', authAdmin, updateUserforAdmin);
adminRouter.delete('/users/remove/:userID', authAdmin, deleteUserforAdmin);

// Posts routes for admin
adminRouter.get('/posts/:userID?', authAdmin, getPostsforAdmin);
adminRouter.delete('/posts/delete/:postID', authAdmin, deletePostforAdmin);
adminRouter.get('/deletedPosts', authAdmin, getDeletedPostsforAdmin);

module.exports = { adminRouter };
