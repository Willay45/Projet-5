const express = require('express');

const user = require('./user.routes');

const router = express.Router();

router.use('/user', user);

module.exports = router;
