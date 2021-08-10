import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PeticionService } from '../../services/peticion.service';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})

export class DatosComponent implements OnInit {

listapedidos: any
  
constructor(private Peticion:PeticionService, private activateRoute: ActivatedRoute, private router:Router) { 
  window.scroll({ 
    top: 0,
    left: 0, 
    behavior: 'smooth' 
  })
}

ngOnInit(): void {
  this.listar()
  this.Eliminar(this.activateRoute.snapshot.params.id)
}

listar(){
  console.log('Listado Pedidos')

  this.Peticion.Post('http://localhost:3000/listar',{}).then(
    (res) => {
      console.log(res);
      this.listapedidos = res;
    }
  )
}

Eliminar(idPedido: any){
  
    this.Peticion.Post('http://localhost:3000/eliminar',{
    idPedido:this.activateRoute.snapshot.params.id}).then(
    (res) => {        
      console.log(res);
      this.router.navigate(["/datos"])     
    })
  }
}
