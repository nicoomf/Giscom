const express = require('express');
const indexController = require('../controllers/index.controller');
const subsController = require('../controllers/subs.controller');
const router = express.Router();

router.get('/', indexController.renderIndex);
router.get('/nosotros', indexController.renderAbout);

// Suscrpciones:
router.put('/evento/save-subs/:id', subsController.addSubs);

module.exports = router;