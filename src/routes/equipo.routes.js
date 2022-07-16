const express = require('express');
const investController = require('../controllers/invest.controller');
const ayudController = require('../controllers/ayud.controller');
const router = express.Router();

router.get('/equipo/investigadores', investController.renderInvest);
router.get('/equipo/ayudantes', ayudController.renderAyud);

module.exports = router;