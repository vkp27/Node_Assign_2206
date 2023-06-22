require('dotenv').config();

const mongoose = require('mongoose');

const uri = process.env.DB_URL;

async function connectToDatabase() {
  try {
    await mongoose.connect(uri, 
      { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
      }
    );
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database', error);
  }
}

module.exports = connectToDatabase;
