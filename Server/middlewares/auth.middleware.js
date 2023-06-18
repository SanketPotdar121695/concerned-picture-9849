const jwt = require('jsonwebtoken');
const { secretKey1 } = require('../config/db');
const { BlacklistModel } = require('../models/blacklist.model');

const auth = async (req, res, next) => {
  try {
    let token = req.headers.authorization?.split(' ')[1] || null;

    if (token) {
      let existingToken = await BlacklistModel.find({
        blacklist: { $in: token }
      });

      if (existingToken.length) {
        return res.status(400).send({
          error: 'Access denied!',
          description:
            'You are not logged in to perform this action. Please login again.'
        });
      }

      let decoded = jwt.verify(token, secretKey1);

      if (decoded) {
        req.body.userID = decoded.userID;
        req.body.author = decoded.username;
        return next();
      }

      return res.status(400).send({
        error: 'Access denied!',
        description: 'You are not allowed to perform this action.'
      });
    }

    return res.status(400).send({
      error: 'Access denied!',
      description:
        'You are not logged in to perform this action. Please login first.'
    });
  } catch (err) {
    return res.status(400).send({ error: err.message });
  }
};

module.exports = { auth };
