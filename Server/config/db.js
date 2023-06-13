require('dotenv').config();
const mongoose = require('mongoose');

const PORT = process.env.PORT;
const secretKey1 = process.env.secretKey1;
const secretKey2 = process.env.secretKey2;

const connection = async () => {
  try {
    await mongoose.connect(process.env.mongoURL);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.log('Something went wrong!', err.message);
  }
  console.log(`App is running on port ${PORT}`);
};

module.exports = { PORT, secretKey1, secretKey2, connection };
