import {EventEmitter, Injectable,} from "@angular/core";
import {Lugar} from "../_models";

@Injectable()
export class PlaceService {

  listaLugares:Lugar[];
  lugarEscogido: Lugar;

  lugares:Lugar[];
  lugarSeleccionado:Lugar[]
  envioArreglo: EventEmitter<[any]> = new EventEmitter();



  enviarArreglo(arregloLugares:[any]) {

    //this.lugarSeleccionado=arregloLugares
    this.envioArreglo.emit(arregloLugares);
  }
  constructor(){
    this.lugares = [
      {idLugar:1,tipoLugar:'Casa',sectorLugar:'Miraflores',
        habitacion:[
          {
            idHabitacion:1,
            tipoHabitacion:'baño',
            luz_solar:true

          },
          {
            idHabitacion:2,
            tipoHabitacion:'dormitorio',
            luz_solar:true
          }

        ]

      },
      {
        idLugar:2,tipoLugar:'Departamento',sectorLugar:'La gasca',
        habitacion:[
          {
            idHabitacion:1,
            tipoHabitacion:'Sala',
            luz_solar:true

          }
        ]
      }
    ]
    this.lugarSeleccionado=this.lugares
  }






}


