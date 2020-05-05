const express = require('express');
const user = require('../controllers/user.controllers.js');

const router = express.Router();

router.get('/', user.findAll);

router.post('/login', user.login);

router.post('/', user.create);

module.exports = router;
