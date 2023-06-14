const express = require("express");
const bcrypt = require("bcrypt");
const { userModel, logoutModel } = require("../models/user.model");
var jwt = require('jsonwebtoken');


const auth = async(req, res, next)=>{
    const token=req.headers.authorization?.split(" ")[1];
    const blacklist = await logoutModel.findOne({ token });
    if(token){
        if(blacklist){
           res.send({msg: "Please Login again"})
           return
        }
       try{
        jwt.verify(token, 'masai', (err, decoded)=>{
            if(decoded){
                req.body.userID= decoded.userID;
                req.body.userName=decoded.userName;
                req.body.active=decoded.active;
                next()
            }else{
                res.send({msg:"token is not recognixed "})
            }
        })

       }catch(err){
res.json({msg: err.message})
       } 
    }else{
        res.send({msg:"Please Login"})
    }
}

module.exports={
    auth
}