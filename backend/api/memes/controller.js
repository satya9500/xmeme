const ErrorResponse = require('../../util/errorResponse');
const asyncHandler = require('../../middleware/async');
const Meme = require('./model');

// @route : /memes/
// @req-type : POST
// @description : Post a meme
exports.postMeme = asyncHandler(async (req, res, next) => {
  const meme = await Meme.create({
    name: req.body.name,
    caption: req.body.caption,
    url: req.body.url
  });
  return res.status(200).json({
    success: true,
    meme
  });
});

// @route : /memes/
// @req-type : GET
// @description : Get all memes
exports.getMemes = asyncHandler(async (req, res, next) => {
  const page = req.query.page;
  const memes = await Meme.find().skip((page - 1) * 100).limit(100);
  return res.status(200).json({
    success: true,
    count: memes.length,
    memes
  });
});

// @route : /memes/:id
// @req-type : GET
// @description : Get meme by id
exports.getMeme = asyncHandler(async (req, res, next) => {
  const meme = await Meme.findById(req.params.id);
  if (!meme)
    return next(new ErrorResponse(`Meme with ${req.params.id} does not exist`, 404));
  return res.status(200).json({
    success: true,
    meme
  });
});

// @route : /memes/:id
// @req-type : PUT
// @description : Update meme by id
exports.updateMeme = asyncHandler(async (req, res, next) => {
  const meme = await Meme.findById(req.params.id);
  if (!meme)
    return next(new ErrorResponse(`Meme with ${req.params.id} does not exist`, 404));
  meme.caption = req.body.caption == null ? meme.caption : req.body.caption;
  meme.url = req.body.url == null ? meme.url : req.body.url;
  meme.save();
  return res.status(200).json({
    success: true,
    meme
  });
});

// @route : /memes/:id
// @req-type : DELETE
// @description : Delete meme by id
exports.deleteMeme = asyncHandler(async (req, res, next) => {
  const meme = await Meme.findById(req.params.id);
  if (!meme)
    return next(new ErrorResponse(`Meme with ${req.params.id} does not exist`, 404));
  meme.delete();
  return res.status(200).json({
    success: true,
    meme
  });
});
