import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FooterComponent } from './components/footer/footer.component';
import { NuestrasCervezasComponent } from './components/nuestras-cervezas/nuestras-cervezas.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { SuscribeComponent } from './components/contacto/suscribe/suscribe.component';
import { SobrenosotrosComponent } from './components/contacto/sobrenosotros/sobrenosotros.component';
import { FormularioContactoComponent } from './components/contacto/formulario-contacto/formulario-contacto.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { RedesSocialesComponent } from './components/redes-sociales/redes-sociales.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
    FooterComponent,
    NuestrasCervezasComponent,
    ContactoComponent,
    SuscribeComponent,
    SobrenosotrosComponent,
    FormularioContactoComponent,
    BackButtonComponent,
    RedesSocialesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
