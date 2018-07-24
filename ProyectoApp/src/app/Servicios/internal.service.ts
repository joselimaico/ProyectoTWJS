import { Injectable } from '@angular/core';
import {Usuario} from "../_models/Clases/Usuario";
import {Habitacion} from "../_models/Clases/Habitacion";
import {Lugar} from "../_models/Clases/Lugar";
import {Planta} from "../_models/Clases/Planta";

@Injectable({
  providedIn: 'root'
})
export class InternalService {

  UsuarioActual:Usuario;
  LugarEscogido: Lugar;
  HabitacionEscogida: Habitacion;
  PlantaEscogida: Planta;

  constructor() { }

  actualizarUsuario(user:Usuario){
    this.UsuarioActual = user;
  }

  actualizarLugar(place:Lugar){
    this.LugarEscogido = place;
  }

  actualizarHabitacion(room:Habitacion){
    this.HabitacionEscogida = room;
  }

  actualizarPlanta(plant:Planta){
    this.PlantaEscogida = plant;
  }



  retornarUsuario(){
    return this.UsuarioActual;
  }

  retornarLugar(){
    return this.LugarEscogido;
  }

  retornarHabitacion(){
    return this.HabitacionEscogida;
  }

  retornarPlanta(){
    return this.PlantaEscogida;
  }
  
}
