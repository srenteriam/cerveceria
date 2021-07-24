import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

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
