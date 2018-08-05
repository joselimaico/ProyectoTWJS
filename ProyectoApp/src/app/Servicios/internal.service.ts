import { Injectable } from '@angular/core';
import {Usuario} from "../_models/Clases/Usuario";
import {Habitacion} from "../_models/Clases/Habitacion";
import {Lugar} from "../_models/Clases/Lugar";
import {Planta} from "../_models/Clases/Planta";

@Injectable({
  providedIn: 'root'
})
export class InternalService {

  token:string;

  arregloAuxiliar:any[];
  // UsuarioActual:Usuario;
  idLugar: number;

  LugarEscogido: Lugar;
  HabitacionEscogida: Habitacion;
  PlantaEscogida: Planta;

  constructor() { }

  cargarAlAuxiliar(algo){
    this.arregloAuxiliar.push(algo);
    console.log('arreglo auxiliar dice: mi contenido es: ',this.arregloAuxiliar);
  }

  cargarToken(token){
    this.token = token;
  }

  retornarToken(){
    return this.token;
  }

  actualizarLugar(idPlace){
    this.idLugar = idPlace;
  }

  retornarLugar(){
    return this.idLugar;
  }





  actualizarHabitacion(room:Habitacion){
    this.HabitacionEscogida = room;
  }

  actualizarPlanta(plant:Planta){
    this.PlantaEscogida = plant;
  }



  retornarHabitacion(){
    return this.HabitacionEscogida;
  }

  retornarPlanta(){
    return this.PlantaEscogida;
  }

}
