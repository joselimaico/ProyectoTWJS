import {Planta} from "./Planta";

export interface Habitacion{
 id:number;
 nombreHabitacion:string;
 tamanioHabitacion:string;
 luzSolarHabitacion:boolean;
 descripcionHabitacion:string;
 imagenHabitación: string;

 lugarFK:number;
 misPlantas:Planta[];
}
