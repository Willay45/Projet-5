const express = require('express');

const user = require('./user.routes');
const product = require('./product.routes');
const tag = require('./tag.routes');
const driver = require('./driver.routes');
const basket = require('./basket.routes');

const router = express.Router();

router.use('/driver', driver);
router.use('/user', user);
router.use('/product', product);
router.use('/tag', tag);
router.use('/basket', basket);

module.exports = router;
