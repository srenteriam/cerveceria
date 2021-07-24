import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider'
import { Router } from '@angular/router';
import { PeticionService } from 'src/app/services/peticion.service';
Router




@Component({
  selector: 'app-formulario-contacto',
  templateUrl: './formulario-contacto.component.html',
  styleUrls: ['./formulario-contacto.component.css']
})
export class FormularioContactoComponent implements OnInit {

nombreC="";
 emailC="";
 sujetoC="";
 mensajeC="";
 mensaje: string = "";
  
  constructor(private Peticion:PeticionService, private router :Router) { }

  ngOnInit(): void {
  }

  validarformulario(){
    this.mensaje = ""
    if(this.nombreC == '' || this.nombreC == null || this.nombreC == undefined){
      this.mensaje = "Campo Obligatorio"
      return false;
    }else{ return true}
  }
 

  registrar(){

    this.validarformulario()
    if(this.validarformulario() == true){

    
    console.log('Estamos registrando')


    this.Peticion.Post('http://localhost:3000/crearContacto',{nombre:this.nombreC,email:this.emailC,sujeto:this.sujetoC,mensaje:this.mensajeC}).then(
      (res)=> {

    

      console.log(res)
      })}
    if(this.validarformulario() == true ){
      this.router.navigate(['/inicio'])
    }
  }

}
