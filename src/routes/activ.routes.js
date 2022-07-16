const express = require('express');
const activController = require('../controllers/activ.controller');
const eventController = require('../controllers/event.controller');

const router = express.Router();

// Publicaciones:
router.get('/actividades/publicaciones', activController.renderPublicaciones);
router.get('/actividades/publicaciones/:id', activController.renderPublic);

// Eventos:
router.get('/actividades/eventos/:id', eventController.renderEvento);


module.exports = router;