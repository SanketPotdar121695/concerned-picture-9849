const { PostModel, DeletedPostModel } = require('../models/post.model');
const { UserModel } = require('../models/user.model');

const getUsersforAdmin = async (req, res) => {
  try {
    let { email } = req.query;
    let userID = req.params.userID;
    let filters = userID ? { userID } : email ? { email } : {};

    let users = await UserModel.find(filters);
    res.status(200).json(users);
  } catch (err) {
    return res.status(400).send({ error: err.message });
  }
};

const updateUserforAdmin = async (req, res) => {
  try {
    let userID = req.params.userID;
    let updates = req.body;

    if (userID) {
      await UserModel.findByIdAndUpdate(userID, updates);

      return res.status(200).send({
        message: `The user with ID: ${userID} has been updated successfully!`
      });
    }

    return res
      .status(400)
      .send({ error: 'Something went wrong! Wrong credential provided.' });
  } catch (err) {
    return res.status(400).send({ error: err.message });
  }
};

const deleteUserforAdmin = async (req, res) => {
  try {
    let userID = req.params.userID;

    if (userID) {
      await UserModel.findByIdAndDelete(userID);

      return res.status(200).send({
        message: `The user with ID: ${userID} has been removed from the DB.`
      });
    }

    return res
      .status(400)
      .send({ error: 'Something went wrong! Wrong credential provided.' });
  } catch (err) {
    return res.status(400).send({ error: err.message });
  }
};

const getPostsforAdmin = async (req, res) => {
  let { q, _page, _limit, _sort, _order, category } = req.query;
  let userID = req.params.userID;
  let filters = userID ? { userID } : {};

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

const deletePostforAdmin = async (req, res) => {
  try {
    let postID = req.params.postID;

    if (postID) {
      let deletedPost = await PostModel.findByIdAndRemove(postID);
      let post = new DeletedPostModel(deletedPost);
      await post.save();

      return res.status(200).send({
        message: `The post with ID: ${postID} has been deleted successfully!`
      });
    }

    return res
      .status(400)
      .send({ error: 'Something went wrong! Wrong credential provided.' });
  } catch (err) {
    return res.status(400).send({ error: err.message });
  }
};

const getDeletedPostsforAdmin = async (req, res) => {
  try {
    let deletedPosts = await DeletedPostModel.find();

    return res.status(200).send(deletedPosts);
  } catch (err) {
    return res.status(400).send({ error: err.message });
  }
};

module.exports = {
  getUsersforAdmin,
  updateUserforAdmin,
  deleteUserforAdmin,
  getPostsforAdmin,
  deletePostforAdmin,
  getDeletedPostsforAdmin
};

// Get users/ delete users/ update user by 'isAdmin' key/ search users by email.
