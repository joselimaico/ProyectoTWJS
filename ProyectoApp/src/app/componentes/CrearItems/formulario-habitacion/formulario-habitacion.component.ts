import { Component, OnInit } from '@angular/core';
import {Lugar} from "../../../_models/Clases/Lugar";
import {InternalService} from "../../../Servicios/internal.service";
import {HabitacionService} from "../../../Servicios/habitacion.service";

@Component({
  selector: 'app-formulario-habitacion',
  templateUrl: './formulario-habitacion.component.html',
  styleUrls: ['./formulario-habitacion.component.css']
})
export class FormularioHabitacionComponent implements OnInit {


  iNombreHabitacion: string;
  iTamanioHabitacion: string;
  iAmbienteHabitacion: string;
  iLuzSolar: string;

  urlImagenHabitacion = 'http://albergueoabeiro.com/wp-content/uploads/2016/04/habitacion-cama-de-matrimonio.jpg';

  miLugarPadre : Lugar[];


  opcTamanioHabitacion = [
    'Extra Grande',
    'Grande',
    'Mediana',
    'Pequeña'
  ];

  opcAmbienteHabitacion = [
    'Húmeda',
    'Cálida',
    'Seca'
  ];

  opcLuzSolar = [
    'Si',
    'No'
  ];

  constructor(private _internalService: InternalService,
              private _habitacionService: HabitacionService) { }

  ngOnInit() {
  }

  generarNuevaHabitacion(){
    let idLugar = this._internalService.retornarLugar();
    let bodyHabitacion = this.crearNuevaHabitacion(idLugar);
    if (bodyHabitacion.nombreHabitacion!='undefined'&&
      bodyHabitacion.descripcionHabitacion != 'undefined'&&
      bodyHabitacion.luzSolarHabitacion != 'undefined' &&
      bodyHabitacion.tamanioHabitacion != 'undefined' &&
      bodyHabitacion.imagenHabitacion != 'undefined')
    {
      this._habitacionService.crearNuevaHabitacion(bodyHabitacion)
        .subscribe( resultado => {
            console.log('el servidor pudo guardar una nueva habitación: ',resultado);
            // let idHabitacion = resultado.newRoom.id;
            // this._router.navigate([`/Lugar/${idLugar}/Habitacion/${idHabitacion}`]);
          }
        )
    }
  }

  crearNuevaHabitacion(FKLugar){
    let luzSolar: boolean;
    if(this.iLuzSolar === 'Si'){
      luzSolar = true;
    }
    if(this.iLuzSolar === 'No'){
      luzSolar = false;
    }
    let body = {
      nombreHabitacion: `${this.iNombreHabitacion}`,
      tamanioHabitacion: `${this.iTamanioHabitacion}`,
      luzSolarHabitacion: `${luzSolar}`,
      descripcionHabitacion: `${this.iAmbienteHabitacion}`,
      imagenHabitacion: `${this.urlImagenHabitacion}`,
      lugarFK: `${FKLugar}`
    };
    return body;
  }


}
