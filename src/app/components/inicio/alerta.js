swal.fire({
    html: '<div><a><img src="../logos/SVG/logo.svg" alt="LogoSanNicolas" width="100" height="100"><img src="../logos/SVG/Titulo.svg" alt="LogoSanNicolas" width="100" height="100"></a><h1 class="talerta">¿ ERES MAYOR DE EDAD ?</h1><P class="palerta">"PROHÍBASE EL EXPENDIO DE BEBIDAS EMBRIAGANTES A MENORES DE EDAD", "EL EXCESO DE ALCOHOL ES PERJUDICIAL PARA LA SALUD".</P></div>',
    background: 'rgb(255, 255, 255)',
    width: '80%',
    confirmButtonText: 'Si, soy mayor de edad',
    backdrop: '#89650a88',

    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterkey: false,

    showCorfirmButton: true,

    showDenyButton: true,
    denyButtonText: 'No, soy menor de edad',
    buttonsStyling: false,

    customClass: {
        confirmButton: 'confirmbutton',
        denyButton: 'denybutton',

    },
}).then((result)=>{
    if(result.isDenied)
    window.open('https://www.google.com','_self');
})