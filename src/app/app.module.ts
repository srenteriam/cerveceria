import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FooterComponent } from './components/footer/footer.component';
import { NuestrasCervezasComponent } from './components/nuestras-cervezas/nuestras-cervezas.component';

import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';

import { ContactoComponent } from './components/contacto/contacto.component';
import { SuscribeComponent } from './components/contacto/suscribe/suscribe.component';
import { SobrenosotrosComponent } from './components/contacto/sobrenosotros/sobrenosotros.component';
import { FormularioContactoComponent } from './components/contacto/formulario-contacto/formulario-contacto.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { RedesSocialesComponent } from './components/redes-sociales/redes-sociales.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { FormularioPedidosComponent } from './components/pedidos/formulario-pedidos/formulario-pedidos.component';
import { LightboxComponent } from './components/pedidos/lightbox/lightbox.component';
import { PortadaComponent } from './components/pedidos/portada/portada.component';
import { FormsModule } from '@angular/forms';
import { TargetasComponent } from './components/pedidos/targetas/targetas.component';
import { PortadaMAComponent } from './components/pedidos/portada-ma/portada-ma.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientModule } from '@angular/common/http';
import { PaginaEnMantenimientoComponent } from './components/pagina-en-mantenimiento/pagina-en-mantenimiento.component';
import { DatosComponent } from './components/datos/datos.component';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
    FooterComponent,
    NuestrasCervezasComponent,

    QuienesSomosComponent,

    ContactoComponent,
    SuscribeComponent,
    SobrenosotrosComponent,
    FormularioContactoComponent,
    BackButtonComponent,
    RedesSocialesComponent,
    PedidosComponent,
    FormularioPedidosComponent,
    LightboxComponent,
    PortadaComponent,
    TargetasComponent,
    PortadaMAComponent,
    PaginaEnMantenimientoComponent,
    DatosComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
