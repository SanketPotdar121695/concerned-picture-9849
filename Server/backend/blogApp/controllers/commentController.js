//import model
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

//business logic

exports.createComment = async (req, res) => {
  try {
    //fetch data from req body
    const { postID, userID, userName, body } = req.body;
    //create a comment object
    const comment = new Comment({
      postID,
      userName,
      userID,
      body,
    });

    //save the new comment into the database
    const savedComment = await comment.save();

    //find the post by ID, add the new commnet to its comments array
    const udpatedPost = await Post.findByIdAndUpdate(
      postID,
      { $push: { comments: savedComment._id } },
      { new: true }
    )
      .populate("comments") //populate the comments array with comment documents
      .exec();

    res.json({
      post: udpatedPost,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Error While Creating comment",
    });
  }
};




exports.deleteComment = async (req, res) => {
  try {
    //fetch data from req body
    const { postID , commentID } = req.body;
    
    //find and delete the like collection me se
    const deletedComment = await Comment.findByIdAndDelete({_id:commentID});

    //find the post by ID, add the new commnet to its comments array
    const udpatedPost = await Post.findByIdAndUpdate(
      postID,
      { $pull: { comments: deletedComment._id } },
      { new: true }
    ).populate("comments") //populate the comments array with comment documents
      .exec();

    res.json({
      post: udpatedPost,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Error While Deleting comments",
    });
  }
};