const express = require("express");
const router = express.Router();


//Import Controller
const { dummyLink, likePost, unlikePost } = require("../controllers/likeController");
const {createComment, deleteComment} = require("../controllers/commentController");
const {createPost, getAllPosts} = require("../controllers/postController");
const { auth } = require("../middleware/auth.middleware");



//Mapping Create
router.get("/posts",auth, getAllPosts);

router.get("/dummyroute", auth, dummyLink);
router.post("/comments/create",auth, createComment);
router.post("/comments/delete",auth, deleteComment);
router.post("/posts/create",auth, createPost);

router.post("/likes/like",auth, likePost);
router.post("/likes/unlike",auth, unlikePost);

//export
module.exports = router;
