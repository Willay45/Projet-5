const express = require('express');
const upload = require('../middleware/upload-img/upload.middleware');
const image = require('../controllers/image.controllers.js');

const router = express.Router();

router.post('/upload', upload);
router.post('/', image.create);
router.get('/', image.findAll);

module.exports = router;
