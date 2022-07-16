const express = require('express');
const adminController = require('../controllers/admin.controller');
const ayudController = require('../controllers/ayud.controller');
const investController = require('../controllers/invest.controller');
const uploadController = require('../controllers/upload.controller');
const activController = require('../controllers/activ.controller');
const eventController = require('../controllers/event.controller');
const router = express.Router();

const auth = require('../helpers/auth');

// Inicio y Registro de administracion:
router.get('/admin/signup', auth.isAuthenticated, adminController.renderSignUpForm);
router.post('/admin/signup', auth.isAuthenticated, adminController.signUp);
router.get('/admin/administradores', auth.isAuthenticated, adminController.renderAdministradores);
router.get('/admin/signin', adminController.renderSignInForm);
router.post('/admin/signin', adminController.signIn);
router.get('/admin/logout', auth.isAuthenticated, adminController.logOut);
router.get('/admin/panel', auth.isAuthenticated, adminController.renderPanel);

// Subir imagenes:
router.get('/admin/subir-imagen', auth.isAuthenticated, uploadController.renderUpload);
router.post('/admin/subir-imagen/save', auth.isAuthenticated, uploadController.saveUpload);

// Admin Seccion de Equipo:
// Investigadores:
router.get('/admin/investigadores', auth.isAuthenticated, investController.renderAdminInvest);
router.get('/admin/nuevo-invest', auth.isAuthenticated, investController.renderInvestForm);
router.post('/admin/save-invest', auth.isAuthenticated, investController.createInvest);
router.get('/admin/edit-invest/:id', auth.isAuthenticated, investController.renderEditInvest);
router.put('/admin/edit-invest/:id', auth.isAuthenticated, investController.updateInvest);
router.delete('/admin/delete-invest/:id', auth.isAuthenticated, investController.deleteInvest);
// Ayudantes:
router.get('/admin/ayudantes', auth.isAuthenticated, ayudController.renderAdminAyud);
router.get('/admin/nuevo-ayud', auth.isAuthenticated, ayudController.renderAyudForm);
router.post('/admin/save-ayud', auth.isAuthenticated, ayudController.createAyud);
router.get('/admin/edit-ayud/:id', auth.isAuthenticated, ayudController.renderEditAyud);
router.put('/admin/edit-ayud/:id', auth.isAuthenticated, ayudController.updateAyud);
router.delete('/admin/delete-ayud/:id', auth.isAuthenticated, ayudController.deleteAyud);

// Admin Seccion de Actividades:
// Publicaciones:
router.get('/admin/publicaciones', auth.isAuthenticated, activController.renderAdminPublicaciones);
router.get('/admin/nueva-public', auth.isAuthenticated, activController.renderNuevaPublic);
router.post('/admin/save-public', auth.isAuthenticated, activController.createPublic);
router.get('/admin/edit-public/:id', auth.isAuthenticated, activController.renderEditPublic);
router.put('/admin/edit-public/:id', auth.isAuthenticated, activController.updatePublic);
router.delete('/admin/delete-public/:id', auth.isAuthenticated, activController.deletePublic);
router.post('/addCategoria', auth.isAuthenticated, activController.addCategoria);


//Eventos:
router.get('/admin/eventos', auth.isAuthenticated, eventController.renderAdminEventos);
router.get('/admin/nuevo-evento', auth.isAuthenticated, eventController.renderNuevoEvento);
router.post('/admin/save-evento', auth.isAuthenticated, eventController.createEvento);
router.get('/admin/edit-event/:id', auth.isAuthenticated, eventController.renderEditEvento);
router.put('/admin/edit-event/:id', auth.isAuthenticated, eventController.updateEvent);
router.delete('/admin/delete-event/:id', auth.isAuthenticated, eventController.deleteEvent);

module.exports = router;