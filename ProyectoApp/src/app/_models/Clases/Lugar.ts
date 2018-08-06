import {Habitacion} from "./Habitacion";

export interface Lugar {
  id: number;
  nombreLugar: string;
  tipoLugar: string;
  sectorLugar: string;
  descripcionLugar: string;
  imagenLugar: string;

  usuarioFK:number;
  misHabitaciones:Habitacion[];
}
