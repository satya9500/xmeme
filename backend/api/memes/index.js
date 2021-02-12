const express = require('express');
const { postMeme, getMemes } = require('./controller');

const router = express.Router();
router.route('/').post(postMeme).get(getMemes);

module.exports = router;
