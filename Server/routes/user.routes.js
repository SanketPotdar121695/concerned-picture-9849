const { Router } = require('express');
const { authAdmin } = require('../middlewares/authAdmin.middleware');
const { passCheck } = require('../middlewares/pass_check.middleware');
const {
  signup,
  login,
  logout,
  getUsers
} = require('../controllers/user.controllers');

const userRouter = Router();

userRouter.post('/register', passCheck, signup);
userRouter.post('/login', login);
userRouter.get('/logout', logout);

module.exports = { userRouter };
