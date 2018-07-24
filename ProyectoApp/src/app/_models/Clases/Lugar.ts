import {Habitacion} from "./Habitacion";

export interface Lugar {
  idLugar: number;
  nombreLugar: string;
  tipoLugar: string;
  sectorLugar: string;
  descripcionLugar: string;
  imagenLugar: string;

  usuarioFK:number;
  misHabitaciones:Habitacion[];
}
