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
  
<<<<<<< Updated upstream
=======

  
>>>>>>> Stashed changes

  ngAfterViewInit() {
    AOS.init();
  }
}
