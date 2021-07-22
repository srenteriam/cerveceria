global.express = require('express')
global.api = express();
const port = 3000;

//base de datos en mongo

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/CerSanNicolas',{useNewUrlParser:true,useUnifiedTopology:true},(error,res) => {
    if(error){
        console.log(error)
    }else{
        console.log('Funcionando correctamente')
    }
})

require('./rutas/rutas.js')

api.use('/',express.static(__dirname + '/pagina'));

api.listen(port,function(){
    console.log('servidor funcionando por el puerto ' + port)
})