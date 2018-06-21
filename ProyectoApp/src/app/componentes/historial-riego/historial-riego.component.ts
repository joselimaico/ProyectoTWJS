import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-historial-riego',
  templateUrl: './historial-riego.component.html',
  styleUrls: ['./historial-riego.component.css']
})
export class HistorialRiegoComponent implements OnInit {

  riegos=[
    {
      fecha:'30/03/2018',
      hora:'12 pm',
      estadoSuelo:'Seco',
      riego:'Si'

    }
    ]
  constructor() { }

  ngOnInit() {
  }

}
