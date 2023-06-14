const express = require("express");
const bcrypt = require("bcrypt");
const { userModel, logoutModel } = require("../models/user.model");

var jwt = require('jsonwebtoken');
const { registerMiddleWare } = require("../middleware/register.middleware");
const { auth } = require("../middleware/auth.middleware");


const userRouter = express.Router();

// registration
userRouter.post("/register", async (req, res) => {
   const {userName, email, pass, age, city}= req.body;

   const user = await userModel.findOne({ email: email });
   if(user){
    res.send("a new user with same email cannot register")
   }else{
    try {
      bcrypt.hash(pass, saltRounds=5, async function(err, hash) {
         // Store hash in your password DB.
         if(err){
            res.send(400).send({msg:err.message})
         }else{
            const user = userModel({...req.body, pass:hash});
            await user.save();
       res.status(200).json({ msg: "New user has been updated", registeredUser: req.body });
         }
     });
   
       
     } catch (err) {
       res.status(400).send({ error: err.message });
     }
   }
  
});


//autentication
userRouter.post("/login", async (req, res) => {
  const { email, pass } = req.body;
  try {
    const user = await userModel.findOne({ email: email });
    if (user) {
      bcrypt.compare(pass, user.pass, function(err, result) {
         if(result){
            var token = jwt.sign({ userID: user._id, userName: user.userName, active:true }, 'masai');
            var refreshToken=  jwt.sign({ userID: user._id, user: user.name }, 'school', { expiresIn: 300 })
            
           res.status(200).json({msg:'Login successful!', token, refreshToken})
         }else{
            res.status(200).send({msg:"Wrong credentials"})
         }
     });
   
    } else {
      res.status(200).send({ msg: "User Not Found" });
    }
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});


//logout;
userRouter.get('/logout', auth,  async(req, res)=>{
  const token = req.headers.authorization?.split(' ')[1];
  if(token){
    try{
      const userLogout = logoutModel({token});
      await userLogout.save();
      const getuser = await userModel.findByIdAndUpdate(userID, {active:false});
      res.send({msg: "User has been logged out"})
    }catch(error){
      res.status(400).json({error:error.message})
    }
  }
 
})

module.exports = {
  userRouter,
};
