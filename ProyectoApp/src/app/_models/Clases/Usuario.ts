import {Lugar} from "./Lugar";

export interface Usuario{
  id: number;
  email: string;
  username:string;
  password: string;
  nombreUsuario: string;
  apellidoUsuario: string;
  fechaNacimientoUsuario: string;
  imagenUsuario: string;

  misLugares: Lugar[];

}
