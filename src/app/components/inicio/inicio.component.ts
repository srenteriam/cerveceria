import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  
  prueba(){}
  result(){}

  

  constructor() { 
    window.scroll({ 
      top: 0,
      left: 0, 
      behavior: 'smooth' 
    })
  }

  ngOnInit(): void {
    Swal.fire({
      html: '<div><a><img src="assets/logos/Logo.svg" alt="LogoSanNicolas" width="100" height="100"><img src="assets/logos/Titulo.svg" alt="LogoSanNicolas" width="100" height="100"></a><h1 class="talerta">¿ ERES MAYOR DE EDAD ?</h1><P class="palerta">"PROHÍBASE EL EXPENDIO DE BEBIDAS EMBRIAGANTES A MENORES DE EDAD", "EL EXCESO DE ALCOHOL ES PERJUDICIAL PARA LA SALUD".</P></div>',
      background: 'rgb(255, 255, 255)',
      width: '80%',
      confirmButtonText: 'Si, soy mayor de edad',
      backdrop: '#89650a88',
      allowOutsideClick: false,
      allowEscapeKey: false,
      

      denyButtonText: 'No, soy menor de edad',
      buttonsStyling: false,
      showDenyButton:true,

      customClass: {
        confirmButton: 'confirmbutton',
        denyButton: 'denybutton',
      },
    }).then((result)=>{
      if(result.isDenied)
      window.open('https://www.google.com','_self');
  })
  

  }
}
