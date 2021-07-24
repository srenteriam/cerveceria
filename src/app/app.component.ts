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
  
<<<<<<< HEAD


  

=======
>>>>>>> b003aefd8035fad17261bec716aad3f9f15e2579

  ngAfterViewInit() {
    AOS.init();
  }
}
