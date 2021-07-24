import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FormularioContactoComponent } from './components/contacto/formulario-contacto/formulario-contacto.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NuestrasCervezasComponent } from './components/nuestras-cervezas/nuestras-cervezas.component';

import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';

import { FormularioPedidosComponent } from './components/pedidos/formulario-pedidos/formulario-pedidos.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';



const routes: Routes = [
  {path:'', component: InicioComponent},
  {path:'inicio', component: InicioComponent},
  {path:'nuestras-cervezas', component: NuestrasCervezasComponent},

  {path:'quienes-somos', component: QuienesSomosComponent},

  {path: 'contactos', component:ContactoComponent},
  {path: 'pedidos', component:PedidosComponent},
  {path: 'formulario', component:FormularioPedidosComponent}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
