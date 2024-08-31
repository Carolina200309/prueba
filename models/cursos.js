'use strict'

var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var CursosSchema = Schema({
    nombre: String,
    precio: Number,
    duracionHoras: Number
});

module.exports = mongoose.model('curso', CursosSchema);