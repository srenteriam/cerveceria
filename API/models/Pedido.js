// Modelo de Datos

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var PedidoSchema = new Schema({
    nombre: String,
    correo: String,
    tipo: String,
    redAle: Number,
    porter: Number,
    paleAle: Number,
    total: Number,
    direccion: String,
    telefono: Number,
    comentario: String
    
})

module.exports = mongoose.model('pedido',PedidoSchema)