const express = require('express');
const product = require('../controllers/product.controllers.js');

const router = express.Router();

// Read all User
router.get('/', product.findAll);

module.exports = router;
