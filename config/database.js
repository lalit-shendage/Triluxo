const mongoose = require('mongoose');
require("dotenv").config();
const database=process.env.DATABASE;

const connectDatabase = async () => {
  try {
    await mongoose.connect(`${database}/book_library`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = connectDatabase;
