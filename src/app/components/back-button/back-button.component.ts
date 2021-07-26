import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.css']
})
export class BackButtonComponent implements OnInit {

  constructor() {
    // window.scroll({ 
    //   top: 0,
    //   left: 0, 
    //   behavior: 'smooth' 
    // })
   }

   subir(){
    window.scroll({ 
      top: 0,
      left: 0, 
      behavior: 'smooth' 
    })
   }

  ngOnInit(): void {
  }

}
