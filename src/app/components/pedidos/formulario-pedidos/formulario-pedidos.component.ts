import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-pedidos',
  templateUrl: './formulario-pedidos.component.html',
  styleUrls: ['./formulario-pedidos.component.css']
})
export class FormularioPedidosComponent implements OnInit {
  valor=0
  valorrr=0
  val=0
  valorr=0
  inp=0
  total=0
  totall=0
  valoresss=0
  constructor() { }
  
   // RUBIA

  incrementar() {
    
    if(this.valor< 100){
      this.valor++
    }
    
 
}
decrementar(){
  if(this.valor > 0){
    this.valor--
  }
}
// ========= FIN

// MORENA
sumar() {
    
  if(this.inp < 100){
    this.inp++
  }
}
resta(){
  if(this.inp > 0){
    this.inp--
  }
}
// ==========

// CLARA

// va(){
//   if
// }

totalCervezas(){

this.total = this.valor + this.inp + this.val

}


  ngOnInit(): void {
    
  }

 



}
