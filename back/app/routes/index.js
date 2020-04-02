const express = require('express');

const user = require('./user.routes');
const product = require('./product.routes');

const router = express.Router();

router.use('/user', user);
router.use('/product', product);

module.exports = router;
