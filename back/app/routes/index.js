const express = require('express');

const user = require('./user.routes');
const product = require('./product.routes');
const tag = require('./tag.routes');

const router = express.Router();

router.use('/user', user);
router.use('/product', product);
router.use('/tag', tag);

module.exports = router;
