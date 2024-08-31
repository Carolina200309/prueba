'use strict'

var  express = require('express');

var holamundocontroller = require('../controllers/holamundo');

var cursosController = require('../controllers/cursos');

var routes = express.Router();

routes.get('/api/saludar', holamundocontroller.saludar);

module.exports = routes;

routes.post('/api/curso',
    cursosController.crearCurso
);

routes.put('/api/curso/:_id',
    cursosController.editarCurso
);