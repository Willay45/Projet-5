const express = require('express');
const upload = require('../middleware/upload-img/upload.middleware');
const product = require('../controllers/product.controllers.js');

const router = express.Router();

router.get('/', product.findAll);
router.post('/', product.create);
router.post('/upload', upload);

module.exports = router;
