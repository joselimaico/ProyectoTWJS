import { Component, OnInit } from '@angular/core';
import {LugarService} from "../../../Servicios/lugar.service";
import {HabitacionService} from "../../../Servicios/habitacion.service";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-formulario-lugar',
  templateUrl: './formulario-lugar.component.html',
  styleUrls: ['./formulario-lugar.component.css']
})
export class FormularioLugarComponent implements OnInit {

  inputNombreLugar: string;
  inputTipoLugar: string;
  inputSectorLugar: string;
  inputDescripcionLugar: string;

  inputNombreHabitacion: string;
  inputTamanioHabitacion: string;
  inputAmbienteHabitacion: string;
  inputLuzSolar: string;

  opcionesTipoLugar = [
    'Oficina',
    'Departamento',
    'Jardín',
    'Hogar'
  ];

  opcionesSectorLugar =[
    'Norte',
    'Centro-Norte',
    'Centro',
    'Centro-Sur',
    'Sur'
  ];

  opcionesTamanioHabitacion = [
    'Extra Grande',
    'Grande',
    'Mediana',
    'Pequeña'
  ];

  opcionesAmbienteHabitacion = [
    'Húmeda',
    'Cálida',
    'Seca'
  ];

  opcionesLuzSolar = [
    'Si',
    'No'
  ];

  urlImagenLugar = 'https://media-cdn.tripadvisor.com/media/photo-s/0c/11/0b/bb/lugar-dos-afectos.jpg';
  urlImagenHabitacion = 'http://albergueoabeiro.com/wp-content/uploads/2016/04/habitacion-cama-de-matrimonio.jpg';

  constructor(private _lugarService: LugarService,
              private _habitacionService: HabitacionService) { }

  ngOnInit() {
  }

  crearNuevoRegistro(){
    let bodyLugar = this.crearBodyLugar();
    if (bodyLugar != null){
      this._lugarService.crearNuevoLugar(bodyLugar)
        .subscribe(res => {
          // console.log('esto devuelve el server: ',res);
          let idLugar = res.newPlace.id;
          // console.log('id del lugar es: ',idLugar);
          let bodyHabitacion = this.crearNuevaHabitacion(idLugar);
          console.log('el body de la habitacion: ',bodyHabitacion);

          if (bodyHabitacion.nombreHabitacion!='undefined'&&
              bodyHabitacion.descripcionHabitacion != 'undefined'&&
              bodyHabitacion.luzSolarHabitacion != 'undefined' &&
              bodyHabitacion.tamanioHabitacion != 'undefined' &&
              bodyHabitacion.imagenHabitacion != 'undefined')
          {
            this._habitacionService.crearNuevaHabitacion(bodyHabitacion)
              .subscribe( resultado => {
                  console.log('el servidor pudo guardar una nueva habitación: ',resultado);
                }
              )
          }

        })
    }
  }


  crearNuevaHabitacion(FKLugar){
    let luzSolar: boolean;
    if(this.inputLuzSolar === 'Si'){
      luzSolar = true;
    }
    if(this.inputLuzSolar === 'No'){
      luzSolar = false;
    }
    let body = {
      nombreHabitacion: `${this.inputNombreHabitacion}`,
      tamanioHabitacion: `${this.inputTamanioHabitacion}`,
      luzSolarHabitacion: `${luzSolar}`,
      descripcionHabitacion: `${this.inputAmbienteHabitacion}`,
      imagenHabitacion: `${this.urlImagenHabitacion}`,
      lugarFK: `${FKLugar}`
    };
    //console.log('objeto JSON', body);
    return body;
  }


  crearBodyLugar(){
    let body = {
      nombreLugar: `${this.inputNombreLugar}`,
      tipoLugar: `${this.inputTipoLugar}`,
      sectorLugar: `${this.inputSectorLugar}`,
      descripcionLugar: `${this.inputDescripcionLugar}`,
      imagenLugar: `${this.urlImagenLugar}`
    };
    //console.log('objeto JSON', body);
    return body;
  }

}
