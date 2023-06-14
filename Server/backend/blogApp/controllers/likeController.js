
//import models
const Post = require("../models/postModel");
const Like = require("../models/likeModel");

//like a post

exports.likePost = async (req,res) => {
    try {
        const {postID, userID, userName} = req.body;
        const like = new Like({
            postID, userID,userName
        });
        const savedLike = await like.save();

        //update the post collection basis on this
        const udpatedPost = await Post.findByIdAndUpdate(postID, {$push: {likes: savedLike._id} }, {new :true})
        .populate("likes").exec();

        res.json({
            post:udpatedPost,
        });

    }
    catch(error) { 
        return res.status(400).json({
            error: "Error while Liking post",
        });
    }
}


//Unlike a post
exports.unlikePost = async (req,res) => {

    try{
        const{postID, likeID, userName} = req.body;
        //find and delete the like collection me se
        const deletedLike = await Like.findByIdAndDelete({_id:likeID});

        //udpate the post collection
        const udpatedPost = await Post.findByIdAndUpdate(postID,
                                                        {$pull: {likes: deletedLike._id} }, 
                                                        {new: true});

        res.json({
            post:udpatedPost,
        });

    }
    catch(error) {
        return res.status(400).json({
            error: "Error while Unliking post",
        });
    }

}




exports.dummyLink = (req,res) => {
    res.send("This is your Dummy Page");
};