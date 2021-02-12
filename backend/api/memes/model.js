const mongoose = require('mongoose');

const meme = new mongoose.Schema({
  author: {
    type: String,
    required: true
  },
  caption: {
    type: String,
    trim: true,
  },
  imageUrl: {
    type: String,
    lowercase: true,
    trim: true,
  },
  creationDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Meme', meme);
