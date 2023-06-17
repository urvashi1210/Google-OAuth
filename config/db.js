const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const URL = process.env.MONGO_URI;

const connection = async () => {
  try {
    await mongoose.connect(URL, { useUnifiedTopology: true , useNewUrlParser:true});
    console.log('Database connected successfully');
  } catch (error) {
    console.log('Error while connecting with the database', error.message);
  }
};

module.exports = connection;
