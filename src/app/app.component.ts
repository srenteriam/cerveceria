import { Component } from '@angular/core';
import * as AOS from 'aos';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cerveceria';
  nombre = 10;
  email = 20;
  subjecto = 30;
  mensaje = 40;

  // calcular() {
  //   alert("Diego Trujillo")
  // }

  ngAfterViewInit() {
    AOS.init();
  }
}
