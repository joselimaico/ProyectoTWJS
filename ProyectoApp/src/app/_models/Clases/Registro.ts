export interface Registro{
  idRegistro:number;
  fechaRegistro:string;
  horaRegistro:string;
  estadoSueloRegistro:string;
  sueloRegadoRegistro:boolean;
  observacionRegistro: string;

  plantaFK:number;
}
