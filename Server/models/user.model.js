const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    gender: String,
    city: String,
    age: Number,
    isAdmin: Boolean
  },
  {
    versionKey: false
  }
);

const UserModel = mongoose.model('user', userSchema);

module.exports = { UserModel };
