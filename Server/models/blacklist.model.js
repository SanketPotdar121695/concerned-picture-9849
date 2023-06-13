const mongoose = require('mongoose');

const blacklistSchema = new mongoose.Schema(
  {
    blacklist: { type: [String], required: true }
  },
  { versionKey: false }
);

const BlacklistModel = mongoose.model(
  'blacklist',
  blacklistSchema,
  'blacklist'
);

module.exports = { BlacklistModel };
