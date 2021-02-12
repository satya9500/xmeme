const ErrorResponse = require('../../util/errorResponse');
const asyncHandler = require('../../middleware/async');
const Meme = require('./model');

// @route : /api/v1/meme/
// @req-type : POST
// @description : Post a meme
exports.postMeme = asyncHandler(async (req, res, next) => {
  const meme = await Meme.create({
    author: req.body.author,
    caption: req.body.caption,
    imageUrl: req.body.imageUrl
  });
  return res.status(200).json({
    success: true,
    meme
  });
});

// @route : /api/v1/meme/
// @req-type : GET
// @description : Get all memes
exports.getMemes = asyncHandler(async (req, res, next) => {
  const memes = await Meme.find();
  return res.status(200).json({
    success: true,
    memes
  });
});
