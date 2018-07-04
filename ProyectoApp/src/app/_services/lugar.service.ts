import {EventEmitter, Injectable,} from "@angular/core";
import {Lugar} from "../_models";

@Injectable()
export class LugarService {
  nombreUsuario = 'Adrian';
  lugares:Lugar[];
  lugarSeleccionado:Lugar[]
  envioArreglo: EventEmitter<Lugar[]> = new EventEmitter();



  enviarArreglo(arregloLugares:Lugar[]) {
    //this.nombreUsuario = nombreUsuario;
    this.lugarSeleccionado=arregloLugares
    this.envioArreglo.emit(arregloLugares);
  }
  constructor(){
    this.lugares = [
      {idLugar:1,tipoLugar:'Casa',sectorLugar:'Miraflores',
        habitacion:[
          {
            tipoHabitacion:'baño',
            luz_solar:true

          },
          {
            tipoHabitacion:'dormitorio',
            luz_solar:true
          }

        ]

      },
      {
        idLugar:2,tipoLugar:'Departamento',sectorLugar:'La gasca',
        habitacion:[
          {tipoHabitacion:'Sala',
            luz_solar:true

          }
        ]
      }
    ]
    this.lugarSeleccionado=this.lugares
  }






}


