const { PostModel } = require('../models/post.model');

const createPost = async (req, res) => {
  try {
    let post = new PostModel({
      ...req.body,
      likes: 0,
      rating: 0,
      comments: []
    });
    await post.save();

    return res
      .status(200)
      .send({ message: 'A new post has been added to the DB.' });
  } catch (err) {
    return res.status(400).send({ error: err.message });
  }
};

const getPosts = async (req, res) => {
  const { q, _page, _limit, _sort, _order, category } = req.query;
  const filters = req.url === '/myPosts' ? { userID: req.body.userID } : {};

  if (q)
    filters.$or = [
      { title: new RegExp(q, 'i') },
      { category: new RegExp(q, 'i') },
      { content: new RegExp(q, 'i') }
    ];

  if (category) {
    filters.category = { $in: category };
  }

  Object.keys(req.query).forEach((key) => {
    const value = parseInt(req.query[key]);
    const [field, operator] = key.split('_');

    if (operator === 'lte') {
      filters[field] = filters[field] || {};
      filters[field]['$lte'] = value;
    } else if (operator === 'gte') {
      filters[field] = filters[field] || {};
      filters[field]['$gte'] = value;
    }
  });

  const sort = {};

  if (_sort) {
    if (_order === 'asc') {
      sort[_sort] = 1;
    } else if (_order === 'desc') {
      sort[_sort] = -1;
    } else {
      sort[_sort] = 1;
    }
  }

  const limit = Number(_limit) || 10;
  const page = Number(_page) || 1;
  const skip = (page - 1) * limit;

  try {
    if (_page && _sort) {
      const posts = await PostModel.find(filters)
        .sort(sort)
        .skip(skip)
        .limit(limit);
      return res.status(200).json(posts);
    } else if (_page) {
      const posts = await PostModel.find(filters).skip(skip).limit(limit);
      return res.status(200).json(posts);
    } else if (_sort) {
      const posts = await PostModel.find(filters).sort(sort);
      return res.status(200).json(posts);
    } else {
      const posts = await PostModel.find(filters);
      return res.status(200).json(posts);
    }
  } catch (err) {
    return res.status(400).send({ error: err.message });
  }
};

const updatePost = async (req, res) => {
  try {
    let post =
      (await PostModel.findOne({
        _id: req.params.postID,
        userID: req.body.userID
      })) || null;

    if (post) {
      await PostModel.updateOne({ _id: req.params.postID }, req.body);
      return res.status(200).send({
        message: `The post with ID: ${req.params.postID} has been updated successfully!`
      });
    }
    return res.status(400).send({ error: "This post doesn't exist anymore!" });
  } catch (err) {
    return res.status(400).send({ error: err.message });
  }
};

const deletePost = async (req, res) => {
  try {
    let post =
      (await PostModel.findOne({
        _id: req.params.postID,
        userID: req.body.userID
      })) || null;

    if (post) {
      await PostModel.deleteOne({ _id: req.params.postID });
      return res.status(200).send({
        message: `The post with ID: ${req.params.postID} has been deleted successfully!`
      });
    }
    return res.status(400).send({ error: "This post doesn't exist anymore!" });
  } catch (err) {
    return res.status(400).send({ error: err.message });
  }
};

const addComment = async (req, res) => {
  try {
    await PostModel.updateMany(
      {},
      {
        $push: {
          comments: {
            ...req.body,
            userID: req.body.userID,
            username: req.body.author
          }
        }
      }
    );
    return res.status(200).send({
      message: `Your comment on the post with ID: ${req.params.postID} has been added successfully!`
    });
  } catch (err) {
    return res.status(400).send({ error: err.message });
  }
};

const deleteComment = async (req, res) => {
  try {
    const { postID, commentID } = req.params;

    if (postID && commentID) {
      await PostModel.updateMany(
        { _id: postID },
        { $pull: { comments: { _id: commentID } } }
      );

      return res.status(200).send({
        message: `The comment with ID: ${commentID} has been deleted successfully!`
      });
    }

    return res.status(400).send({
      error: 'Something went wrong! Please provide correct credentials.'
    });
  } catch (err) {
    return res.status(400).send({ error: err.message });
  }
};

module.exports = {
  createPost,
  getPosts,
  updatePost,
  deletePost,
  addComment,
  deleteComment
};

// http://API.cyclic.app/posts/myPosts
