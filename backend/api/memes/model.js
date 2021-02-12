const mongoose = require('mongoose');

const meme = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  caption: {
    type: String,
    trim: true,
  },
  url: {
    type: String,
    lowercase: true,
    trim: true,
  },
  creationDate: {
    type: Date,
    default: Date.now
  }
});

meme.index({ name: 1, caption: 1, url: 1 }, { unique: true });

module.exports = mongoose.model('Meme', meme);
