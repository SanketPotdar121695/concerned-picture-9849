const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    gender: String,
    password: String,
    age: Number,
    city: String,
    is_married: Boolean
  },
  {
    versionKey: false
  }
);

const UserModel = mongoose.model('user', userSchema);

module.exports = { UserModel };

// Note -: The above schema is subject to change.
