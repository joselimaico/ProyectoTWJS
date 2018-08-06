import {Registro} from "./Registro";

export interface Planta{
  id:number;
  nombrePlanta:string;
  detallePlanta:string;
  imagenPlanta:string;

  habitacionFK:number;
  misRegistros:Registro[];

}
