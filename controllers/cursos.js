'use strict'

var Cursos = require('../models/cursos');

function crearCurso(req, resp){
    var cursoRecibido = req.body;

    var nuevoCurso =  new Cursos();
    
    nuevoCurso.nombre = cursoRecibido.nombre;

    nuevoCurso.precio = cursoRecibido.precio;

    nuevoCurso.duracionHoras = cursoRecibido.duracionHoras;

    nuevoCurso.save().then(
        (cursoGuardado) =>{
            resp.status(200).send({cursoCreado: cursoGuardado});
        },

        err=> {
            resp.status(500).send({message: "No se pudo crear intente nuevamente"});
        }
    );
}

function editarCurso(req, resp){

    var idCursoAEditar =req.params._id;
    var datosRecibidos = req.body;

    var cursoEditar =  new Cursos();

    cursoEditar._id = idCursoAEditar;
    
    cursoEditar.nombre = datosRecibidos.nombre;

    cursoEditar.precio = datosRecibidos.precio;

    cursoEditar.duracionHoras = datosRecibidos.duracionHoras;

    Cursos.findByIdAndUpdate(idCursoAEditar, cursoEditar, {new: true}).then(
        (cursoEditado) =>{
            resp.status(200).send({cursoEditado: cursoEditado});
        },

        err=> {
            resp.status(500).send({message: "No se pudo editar"});
        }
    );
}

module.exports = {
    crearCurso,
    editarCurso
}