import { Component, OnInit } from '@angular/core';
import {InternalService} from "../../Servicios/internal.service";
import {HabitacionService} from "../../Servicios/habitacion.service";
import {Habitacion} from "../../_models/Clases/Habitacion";
import {Planta} from "../../_models/Clases/Planta";

@Component({
  selector: 'app-descripcion-habitacion',
  templateUrl: './descripcion-habitacion.component.html',
  styleUrls: ['./descripcion-habitacion.component.css']
})
export class DescripcionHabitacionComponent implements OnInit {

  habitacionEscogida : Habitacion[];
  listaPlantasDeLaHabitacion: Planta[];

  constructor(private _internalService:InternalService,
              private _habitacionService:HabitacionService) { }

  ngOnInit() {
    this.cargarDatosDeHabitacion();
  }

  cargarDatosDeHabitacion(){
    this._habitacionService.
    obtenerHabitacionEscogida(this._internalService.retornarHabitacion().id)
      .subscribe((respuesta)=>{
        console.log('esto arroja el servidor back: ',respuesta);
        this.habitacionEscogida = <Habitacion[]>respuesta.habitacion;
      })
  }

}
