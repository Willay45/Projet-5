const express = require('express');
const user = require('../controllers/user.controllers.js');

const router = express.Router();

// Read all User
router.get('/', user.findAll);

module.exports = router;
