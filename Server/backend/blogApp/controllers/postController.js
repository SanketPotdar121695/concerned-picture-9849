const Post = require("../models/postModel");

exports.createPost = async (req,res) => {
    console.log(req.body)
    try{
            const {title, body, userID, userName} = req.body;
            const post = new Post({
                title,body, userID, userName
            });
            await post.save();
            const savedPost = await post.save();

            res.json({
                post: savedPost,
            });
    }
    catch(error) {
        return res.status(400).json({
            error: "Error while creating post",
        });
    }
};


//need some more testing after completing like wala controleer
exports.getAllPosts = async (req,res) => {
    try {
        const posts = await Post.find({userID:req.body.userID}).populate("likes").populate("comments").exec();
        res.json({
            posts,
        })
    }
    catch(error) {
        return res.status(400).json({
            error: "Error while fetching post",
        });
    }
}