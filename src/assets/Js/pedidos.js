const { DOCUMENT } = require("@angular/common");



// ****************redAleP*****************************
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




// *************porterP********************

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

// *************paleAleP********************
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
    var redAleP = parseInt(documement.getElementById('item').value);
    console.log(redAleP)

}
 



function totalCervezas() {
    var redAleP = document.getElementById('item').value;
    var porterP = document.getElementById('itemm').value;
    var paleAleP = document.getElementById('items').value

    var totalP = parseInt(porterP) + parseInt(redAleP) + parseInt(paleAleP);

    document.getElementById('total').value = totalP;




}

function restaCervezas() {
    var redAleP = document.getElementById('item').value;
    var porterP = document.getElementById('itemm').value;
    var paleAleP = document.getElementById('items').value

    var totalP = parseInt(porterP) + parseInt(redAleP) + parseInt(paleAleP)

    document.getElementById('total').value = totalP;

    console.log(totalP);




}

// <!-- ======================================== SECTION PORTADA ============================================ -->

window.onload = function() {
    setTimeout(function() {
        document.getElementById('hero-background').style.width = '100%';
    })
}



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

