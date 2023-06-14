const express = require('express');

function containsSpecialChars(str) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
  }

const registerMiddleWare= (req, res, next)=>{
 const {pass} = req.body

 if(pass.toLowerCase() ===pass || !containsSpecialChars(pass) || pass.length<8){
    res.send("cannot register")

 }else{
    next()
 }
}

module.exports={
   registerMiddleWare
}
