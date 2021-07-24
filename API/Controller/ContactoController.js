// Importar modelo
const Contacto = require('../models/Contacto.js')

// Crear
function crearContacto(request, response) {

    var params = request.body;
    console.log(params)

    var contacto = new Contacto();

    contacto.nombre = params.nombre;
    contacto.email = params.email;
    contacto.sujeto = params.sujeto;
    contacto.mensaje = params.mensaje;


    contacto.save((error, contactocreate) => {
        if (error) {
            response.status(500).send({ mensaje: "se presento un error en el servidor" })
        } else {
            response.status(200).send({ mensaje: "Contacto  almacenado" })
        }
    })
}

// Actualizar
function updateContacto(request, response) {

    var params = request.body;
    var idContacto = params.idContacto;

    console.log(idContacto)
    console.log(params)

    Contacto.findByIdAndUpdate(idContacto, params, function(error, contactoupdate) {
        if (error) {
            response.status(500).send({ mensaje: "se presento un error en el servidor" })
        } else {
            response.status(200).send({ mensaje: "Contacto  actualizado" })
        }
    })
}

// borrar

function deleteContacto(request, response) {

    var idContacto = request.body.idContacto;

    console.log(idContacto)


    Contacto.findByIdAndDelete(idContacto, function(error, contactodelete) {
        if (error) {
            response.status(500).send({ mensaje: "se presento un error en el servidor" })
        } else {
            response.status(200).send({ mensaje: "Contacto eliminado" })
        }
    })
}

// Listar
function listarContacto(request, response) {

    var filtro = request.body;

    Contacto.find({}, (error, listacontactos) => {
        if (error) {
            response.status(500).send({ mensaje: "error en el servidor" })
        } else {
            response.status(200).send(listacontactos)
        }
    })
}

module.exports = {
    crearContacto,
    updateContacto,
    deleteContacto,
    listarContacto
}