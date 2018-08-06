import { Component, OnInit } from '@angular/core';
import {Planta} from "../../_models/Clases/Planta";
import {PlantaService} from "../../Servicios/planta.service";
import {InternalService} from "../../Servicios/internal.service";

@Component({
  selector: 'app-descripcion-planta',
  templateUrl: './descripcion-planta.component.html',
  styleUrls: ['./descripcion-planta.component.css']
})
export class DescripcionPlantaComponent implements OnInit {

  plantaEscogida: Planta[];
  constructor(private _internalService: InternalService,
              private _plantaService: PlantaService) { }

  ngOnInit() {
    this.cargarDatosPlanta();
  }

  cargarDatosPlanta(){
    this._plantaService.obtenerMiPlanta(this._internalService.retornarPlanta().id)
      .subscribe(
        respuesta=> {
          this.plantaEscogida = <Planta[]>respuesta.plantaEncontrada;
        }
      )
  }


}
