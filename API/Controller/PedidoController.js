// Importar modelo
const Pedido = require('../models/Pedido.js')

// Crear
function create(request, response) {

    var params = request.body;
    console.log(params)

    var pedido = new Pedido();

    pedido.nombre = params.nombre;
    pedido.correo = params.correo;
    pedido.tipo = params.tipo;
    pedido.redAle = params.redAle;
    pedido.porter = params.porter;
    pedido.paleAle = params.paleAle;
    pedido.total = params.total;
    pedido.direccion = params.direccion;
    pedido.telefono = params.telefono;
    pedido.comentario = params.comentario;


    pedido.save((error, pedidocreate) => {
        if (error) {
            response.status(500).send({ mensaje: "se presento un error en el servidor" })
        } else {
            response.status(200).send({ mensaje: "Pedido almacenado" })
        }
    })
}

// Actualizar
function updateOrden(request, response) {

    var params = request.body;
    var idPedido = params.idPedido;

    console.log(idPedido)
    console.log(params)

    Pedido.findByIdAndUpdate(idPedido, params, function(error, ordenupdate) {
        if (error) {
            response.status(500).send({ mensaje: "se presento un error en el servidor" })
        } else {
            response.status(200).send({ mensaje: "Pedido actualizado" })
        }
    })
}

// borrar

function deleteOrden(request, response) {

    var idPedido = request.body.idPedido;

    console.log(idPedido)


    Pedido.findByIdAndDelete(idPedido, function(error, ordedelete) {
        if (error) {
            response.status(500).send({ mensaje: "se presento un error en el servidor" })
        } else {
            response.status(200).send({ mensaje: "Usuario eliminado" })
        }
    })
}

// Listar
function listar(request, response) {

    var filtro = request.body;

    Pedido.find({}, (error, listapedidos) => {
        if (error) {
            response.status(500).send({ mensaje: "error en el servidor" })
        } else {
            response.status(200).send(listapedidos)
        }
    })
}

module.exports = {
    create,
    updateOrden,
    deleteOrden,
    listar
}