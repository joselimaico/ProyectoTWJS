import {Lugar} from "./Lugar";

export interface Usuario{
  idUsuario: number;
  correoUsuario: string;
  usernameUsuario:string;
  passwordUsuario: string;
  nombreUsuario: string;
  apellidoUsuario: string;
  fechaNacimientoUsuario: string;
  imagenUsuario: string;

  misLugares: Lugar[];

}
