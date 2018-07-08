import { Component, OnInit } from '@angular/core';
import {LugarService} from "../../_services";

@Component({
  selector: 'app-descripcion-habitacion',
  templateUrl: './descripcion-habitacion.component.html',
  styleUrls: ['./descripcion-habitacion.component.css']
})
export class DescripcionHabitacionComponent implements OnInit {

  roomArray:[any]
  constructor(private _lugarService:LugarService) { }

  ngOnInit() {
    this.escucharCambios()
  }

  escucharCambios() {
    this._lugarService
      .envioArreglo
      .subscribe(
        (arreglo:[any]) => {
          this.roomArray = [arreglo];
          console.log('arreglo de habitacion recibido',this.roomArray)
        }
      )
  }

}
