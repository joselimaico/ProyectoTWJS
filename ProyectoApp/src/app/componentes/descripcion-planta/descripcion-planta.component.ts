import {Component, OnChanges, OnInit} from '@angular/core';
import {Planta} from "../../_models/Clases/Planta";
import {PlantaService} from "../../Servicios/planta.service";
import {InternalService} from "../../Servicios/internal.service";
import {RaspberryService} from "../../Servicios/raspberry.service";
import {Registro} from "../../_models/Clases/Registro";

@Component({
  selector: 'app-descripcion-planta',
  templateUrl: './descripcion-planta.component.html',
  styleUrls: ['./descripcion-planta.component.css']
})
export class DescripcionPlantaComponent implements OnInit, OnChanges {

  plantaEscogida: Planta[];
  listadoDeRegistros: Registro[];
  displayedColumns: string[] = ['fecha', 'hora', 'estadoSuelo', 'fueRegado', 'observacionAdicional'];

  constructor(private _internalService: InternalService,
              private _plantaService: PlantaService,
              private _raspberryService: RaspberryService) { }

  ngOnInit() {
    this.cargarDatosPlanta();
  }
  ngOnChanges(){
    this.cargarDatosPlanta();
  }

  cargarDatosPlanta(){
    this._plantaService.obtenerMiPlanta(this._internalService.retornarPlanta().id)
      .subscribe(
        respuesta=> {
          let idPlanta = this._internalService.retornarPlanta().id;
          console.log('id de la planta: ',idPlanta);
          this.plantaEscogida = <Planta[]>respuesta.plantaEncontrada;
          this._raspberryService.obtenerTodosLosRegistros(idPlanta)
            .subscribe((resultado)=>{
              console.log('respuesta: ',resultado);
              this.listadoDeRegistros = <Registro[]>resultado.listaDeRegistros;
              console.log('estas fueron los registros de la planta: ',this.listadoDeRegistros);
            })
        }
      )
  }

  regarLaPlanta(){
    let fechaActual= new Date();
    let idPlanta = this._internalService.retornarPlanta().id;
    let statusSuelo = 'seco';
    let fueRegadoElSuelo = false;
    let comentarioSobreElSuelo = 'el suelo no se ha regado por más de 48hrs';


    let body = {
      fechaRegistro: `${fechaActual.getDate()}`,
      horaRegistro: `${fechaActual.getHours()}`,
      estadoSueloRegistro: `${statusSuelo}`,
      sueloRegadoRegistro: `${fueRegadoElSuelo}`,
      observacionRegistro: `${comentarioSobreElSuelo}`,
      plantaFK: `${idPlanta}`
    };

    if(body.fechaRegistro != 'undefined' &&
       body.horaRegistro != 'undefined' &&
       body.plantaFK != 'undefined'){
      this._raspberryService.guardarRegistro(body)
        .subscribe((respuesta) => {
          console.log('bien pude guardar un nuevo registro en la base', respuesta);
        })
    }



  }


}
