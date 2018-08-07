export interface Registro{
  id:number;
  fechaRegistro:string;
  horaRegistro:string;
  estadoSueloRegistro:string;
  sueloRegadoRegistro:boolean;
  observacionRegistro: string;

  plantaFK:number;
}
