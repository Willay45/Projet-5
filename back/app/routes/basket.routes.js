const express = require('express');
const basket = require('../controllers/basket.controllers.js');

const router = express.Router();

router.get('/:userId', basket.findById);

module.exports = router;