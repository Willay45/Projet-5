const express = require('express');
const basket = require('../controllers/basket.controllers.js');

const router = express.Router();

router.get('/:userId', basket.findById);
router.post('/', basket.create);

module.exports = router;
