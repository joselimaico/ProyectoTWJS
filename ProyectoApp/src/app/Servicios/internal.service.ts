import { Injectable } from '@angular/core';
import {Habitacion} from "../_models/Clases/Habitacion";
import {Lugar} from "../_models/Clases/Lugar";
import {Planta} from "../_models/Clases/Planta";

@Injectable({
  providedIn: 'root'
})
export class InternalService {

  idLugar: number;

  LugarEscogido: Lugar;
  HabitacionEscogida: Habitacion;
  PlantaEscogida: Planta;

  constructor() { }


  actualizarIdLugar(idPlace){
    this.idLugar = idPlace;
  }

  retornarIdLugar(){
    return this.idLugar;
  }

  actualizarLugar(place: Lugar){
    this.LugarEscogido = place;
    console.log('lugar escogido: ',this.LugarEscogido);
  }

  retornarLugar(){
    return this.LugarEscogido;
  }


  actualizarHabitacion(room:Habitacion){
    this.HabitacionEscogida = room;
    console.log('habitacion escogida: ',this.HabitacionEscogida);
  }

  retornarHabitacion(){
    return this.HabitacionEscogida;
  }


  actualizarPlanta(plant:Planta){
    this.PlantaEscogida = plant;
  }

  retornarPlanta(){
    return this.PlantaEscogida;
  }

}
