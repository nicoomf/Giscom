const express = require('express');
const uploadController = require('../controllers/upload.controller');
const router = express.Router();

router.get('/upload', uploadController.renderUpload);
router.post('/upload/save', uploadController.saveUpload);

module.exports = router;

