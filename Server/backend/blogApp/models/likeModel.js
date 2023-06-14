//import mongoose
const mongoose = require("mongoose");


//route handler

const likeSchema = new mongoose.Schema({
    postID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post", //reference to the post model
    },
    userID: {
        type: String,
        required:true,
    },
    userName: {
        type: String,
        required:true,
    }
});

//export
module.exports = mongoose.model("Like", likeSchema);