const express = require('express');
const driver = require('../controllers/driver.controllers.js');

const router = express.Router();


router.post('/', driver.create);

module.exports = router;
