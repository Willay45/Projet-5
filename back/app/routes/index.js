const express = require('express');

const user = require('./user.routes');
const product = require('./product.routes');
const tag = require('./tag.routes');
const driver = require('./driver.routes');

const router = express.Router();

router.use('/driver', driver);
router.use('/user', user);
router.use('/product', product);
router.use('/tag', tag);

module.exports = router;
