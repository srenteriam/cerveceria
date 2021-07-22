import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider'
import { PeticionService } from 'src/app/services/peticion.service';




@Component({
  selector: 'app-formulario-contacto',
  templateUrl: './formulario-contacto.component.html',
  styleUrls: ['./formulario-contacto.component.css']
})
export class FormularioContactoComponent implements OnInit {

  constructor(private Peticion:PeticionService) { }

  ngOnInit(): void {
  }
// nombre="Diego"

  registrar(){
    console.log('Estamos registrando')

    this.Peticion.Post('http://localhost:3000/crearContactos',{nombre:'nombre',email:'diegotrujillo0210@gmail.com',sujeto:'ERROR',mensaje:'De Medellin'})
    
  }

}
