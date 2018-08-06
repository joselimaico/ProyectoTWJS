import { Component, OnInit } from '@angular/core';
import {PlantaService} from "../../../Servicios/planta.service";
import {InternalService} from "../../../Servicios/internal.service";
import {Planta} from "../../../_models/Clases/Planta";
import {Router} from "@angular/router";

@Component({
  selector: 'app-formulario-planta',
  templateUrl: './formulario-planta.component.html',
  styleUrls: ['./formulario-planta.component.css']
})
export class FormularioPlantaComponent implements OnInit {

  inputNombrePlanta: string;
  inputDescripcionPlanta: string;
  urlPlanta = 'https://www.hogarmania.com/archivos/201509/tipos-de-coleos-plantas-jardineria-848x477x80xX.jpg';

  constructor(private _plantaService: PlantaService,
              private _internalService: InternalService,
              private _router: Router) { }

  ngOnInit() {
  }

  registrarNuevaPlanta(){

    let body = {
      nombrePlanta: `${this.inputNombrePlanta}`,
      detallePlanta: `${this.inputDescripcionPlanta}`,
      imagenPlanta: `${this.urlPlanta}`,
      habitacionFK: `${this._internalService.retornarHabitacion().id}`
    };

    console.log('el body es: ',body);

    if(body.nombrePlanta != 'undefined' &&
       body.detallePlanta != 'undefined' &&
       body.imagenPlanta != 'undefined' &&
       body.habitacionFK != 'undefined'){
      this._plantaService.crearNuevaPlanta(body)
        .subscribe((respuesta)=>{
          this._internalService.actualizarPlanta(<Planta>respuesta.newPlant);
          this._router.navigate(['/PaginaPrincipal']);
        })
    }

  }


}
