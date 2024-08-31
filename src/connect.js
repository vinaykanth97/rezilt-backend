const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/rezilt');

// Check if the connection is successful
const connect = async () => {
  mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
  });
}
module.exports = connect


