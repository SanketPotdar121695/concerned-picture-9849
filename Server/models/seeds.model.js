const mongoose = require('mongoose');


const seedsSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true},

  },
  {
    versionKey: false
  }
);

const seedsModel = mongoose.model('seed', seedsSchema);


module.exports = { seedsModel };