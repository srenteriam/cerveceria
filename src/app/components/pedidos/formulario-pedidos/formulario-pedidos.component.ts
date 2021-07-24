import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PeticionService } from '../../../services/peticion.service';


@Component({
  selector: 'app-formulario-pedidos',
  templateUrl: './formulario-pedidos.component.html',
  styleUrls: ['./formulario-pedidos.component.css']
})
export class FormularioPedidosComponent implements OnInit {

  nombreP = "";
  correoP = "";
  tipoP = "";
  redAleP = "";
  porterP = "";
  paleAleP = "";
  totalP = "";
  direccionP = "";
  telefonoP  = "";
  comentarioP = "";
  
  constructor(private Peticion:PeticionService, private router:Router) { }
  
  ngOnInit(): void {
    
  }

  crearpedido(){
  
    console.log('Estamos Registrando')

    this.Peticion.Post('http://localhost:3000/create',{
      nombre:this.nombreP, 
      correo:this.correoP,
      tipo: this.tipoP,
      redAle: this.redAleP,
      porter: this.porterP,
      paleAle: this.paleAleP,
      total: this.totalP,
      direccion: this.direccionP,
      telefono: this.telefonoP,  
      comentario: this.comentarioP 
    }).then(
      (res) => {
        console.log(res)
      })

    
      this.router.navigate(["/inicio"])
    }
  
 
















}
