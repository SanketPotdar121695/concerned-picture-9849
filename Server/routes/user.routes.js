const { Router } = require('express');
const {passCheck} = require("../middlewares/pass_check.middleware");
const { signup, login, logout } = require('../controllers/user.controllers');

const userRouter = Router();

userRouter.post('/register', passCheck, signup);
userRouter.post('/login', login);
userRouter.get('/logout', logout);

module.exports = { userRouter };
