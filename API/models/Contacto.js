// Modelo de Datos

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var ContactoSchema = new Schema({
    nombre: String,
    email: String,
    sujeto: String,
    mensaje: String

})

module.exports = mongoose.model('contacto', ContactoSchema)