const express = require('express');

const user = require('./user.routes');
const product = require('./product.routes');
const image = require('./image.routes');

const router = express.Router();

router.use('/user', user);
router.use('/product', product);
router.use('/image', image);

module.exports = router;
