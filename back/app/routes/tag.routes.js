const express = require('express');
const tag = require('../controllers/tag.controllers.js');

const router = express.Router();

router.get('/', tag.findAll);

module.exports = router;
