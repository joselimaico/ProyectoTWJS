import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  crearNuevoRegistro(){
    let bodyLugar = this.crearNuevoLugar();
    let bodyHabitacion = this.crearNuevaHabitacion();
    if (bodyLugar != null){
    // AQUI LA CONSULTA AL SERVIDOR USANDO REQUEST EXCLUSIVO DEL LUGAR
    }
    if(bodyHabitacion != null){
    // AQUI LA CONSULTA AL SERVIDOR USANDO REQUEST EXCLUSIVO DE LA HABITACIÓN
    }

  }


  crearNuevaHabitacion(){
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
      imagenHabitacion: `${this.urlImagenHabitacion}`
    };
    console.log('objeto JSON', body);
    return body;
  }


  crearNuevoLugar(){
    let body = {
      nombreLugar: `${this.inputNombreLugar}`,
      tipoLugar: `${this.inputTipoLugar}`,
      sectorLugar: `${this.inputSectorLugar}`,
      descripcionLugar: `${this.inputDescripcionLugar}`,
      imagenLugar: `${this.urlImagenLugar}`
    };
    console.log('objeto JSON', body);
    return body;
  }

}
