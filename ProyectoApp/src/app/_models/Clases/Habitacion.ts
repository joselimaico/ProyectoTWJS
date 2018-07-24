import {Planta} from "./Planta";

export interface Habitacion{
 idHabitacion:number;
 nombreHabitacion:string;
 tamanioHabitacion:string;
 luzSolarHabitacion:boolean;
 descripcionHabitacion:string;
 imagenHabitación: string;

 lugarFK:number;
 misPlantas:Planta[];
}
