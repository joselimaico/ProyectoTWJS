export class Lugar {
  idLugar:number
  tipoLugar: string
  sectorLugar:string
  habitacion:[
    {
      tipoHabitacion:string
      luz_solar:boolean
    }

    ]
}
