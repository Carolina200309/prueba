'use strict'

var application = require('./application');
var mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/desarrolloweb")
.then(
    () => {
        console.log("conexion exitosa con la BBDD. Iniciando la aplicacion");
        application.listen(8552, function(){
            console.log("La aplicacion web se ha iniaco correctamente ");
        });
    },
    err =>{
        console.log("conexion con BBDD fallida. Aplicacion no iniciada");
    }
);