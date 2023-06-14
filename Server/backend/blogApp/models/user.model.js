const mongoose = require('mongoose')

const userSchema= mongoose.Schema({
    userName:String,
    email:String,
    pass: String,
    city: String,
    age:Number,
    active:Boolean,
    Date: {
        type:String,
        default:  new Date
    }
}, {
    versionKey:false
})

const logoutSchema= mongoose.Schema({
   token: String
}, {
    versionKey:false
})




//model
const userModel= mongoose.model('user', userSchema)
const logoutModel= mongoose.model('blacklist', logoutSchema)

module.exports={
    userModel,
    logoutModel,
}