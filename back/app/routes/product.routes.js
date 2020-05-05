const express = require('express');
const upload = require('../middleware/upload-img/upload.middleware');
const product = require('../controllers/product.controllers.js');

const router = express.Router();

router.get('/product-tag', product.findProductTag);
router.get('/', product.findAll);
router.get('/:productId', product.findById);
router.post('/', product.create);
router.post('/upload', upload);

module.exports = router;
