const express = require('express');
const user = require('../controllers/user.controllers.js');

const router = express.Router();

// Read all User
router.get('/', user.findAll);

router.post('/', user.create);

module.exports = router;
