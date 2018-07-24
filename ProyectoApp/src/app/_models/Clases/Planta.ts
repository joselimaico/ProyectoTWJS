import {Registro} from "./Registro";

export interface Planta{
  idPlanta:number;
  nombrePlanta:string;
  detalleSueloPlanta:string;
  imagenPlanta:string;

  habitacionFK:number;
  misRegistros:Registro[];

}
