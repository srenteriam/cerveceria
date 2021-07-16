import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuestras-cervezas',
  templateUrl: './nuestras-cervezas.component.html',
  styleUrls: ['./nuestras-cervezas.component.css']
})
export class NuestrasCervezasComponent implements OnInit {

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
