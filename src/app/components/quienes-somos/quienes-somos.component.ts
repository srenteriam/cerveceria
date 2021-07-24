import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.css']
})
export class QuienesSomosComponent implements OnInit {

  constructor() {
    window.scroll({ 
      top: 0,
      left: 0, 
      behavior: 'smooth' 
    })
   }

  ngOnInit(): void {
  }

}
