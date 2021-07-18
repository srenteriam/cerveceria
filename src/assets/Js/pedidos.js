const { DOCUMENT } = require("@angular/common");

// ****************rubia*****************************
function incrementar() {
    valor = document.getElementById("item");
    if (valor.value < 100) valor.value++;



}

function miFunc() {
    valor = document.getElementById("item");
    if (valor.value < 100) valor.value++;
}

function decrementar() {
    valor = document.getElementById("item");
    if (valor.value > 00) valor.value--;
}




// *************Morena********************

function incrementarr() {
    valor = document.getElementById("itemm");
    if (valor.value < 100) valor.value++;
}

function miFunc() {
    valor = document.getElementById("itemm");
    if (valor.value < 100) valor.value++;
}

function decrementarr() {
    valor = document.getElementById("itemm");
    if (valor.value > 00) valor.value--;
}

// *************CLARA********************
function incrementars() {
    valor = document.getElementById("items");
    if (valor.value < 100) valor.value++;
}

function miFunc() {
    valor = document.getElementById("items");
    if (valor.value < 100) valor.value++;
}

function decrementars() {
    valor = document.getElementById("items");
    if (valor.value > 00) valor.value--;
}

function totalCervezas() {
    var rubia = parseInt(documement.getElementById('item').value);
    console.log(rubia)

}




function totalCervezas() {
    var rubia = document.getElementById('item').value;
    var morena = document.getElementById('itemm').value;
    var clara = document.getElementById('items').value

    var totall = parseInt(morena) + parseInt(rubia) + parseInt(clara);

    document.getElementById('total').value = totall;




}

function restaCervezas() {
    var rubia = document.getElementById('item').value;
    var morena = document.getElementById('itemm').value;
    var clara = document.getElementById('items').value

    var totall = parseInt(morena) + parseInt(rubia) + parseInt(clara)

    document.getElementById('total').value = totall;




}

// <!-- ======================================== SECTION PORTADA ============================================ -->

window.onload = function() {
    setTimeout(function() {
        document.getElementById('hero-background').style.width = '100%';
    })
}

// function ejemplo(){
//     alert('Diego Trujillo')
// }

// ========================== validacion=======================

var nombre =  document.getElementById('nombre')



function validiacion(){
    

    if (nombre == null) {
        swal("error!", "Los campos no pueden ir vacios!", "error", {
            button: "Aww yiss!",
          });
          return ;
        
        
    }

   

}

