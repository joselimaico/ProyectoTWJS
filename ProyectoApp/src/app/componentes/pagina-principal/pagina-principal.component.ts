import { Component, OnInit } from '@angular/core';
import {Message} from "primeng/api";

class Planta {
  nombre:string
  anios:number
  especie:string
  color: string
}
class Lugar {
  tipoLugar: string
  sectorLugar:string
  habitacion:[
    any
    ]
}
@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {
  plantas: Planta[];
  lugares: Lugar[];
  msgs: Message[];
  msg:Message[];

  constructor() {
    this.msgs = [];
    this.plantas = [
      {nombre: 'Helen', anios: 2, especie: 'Helecho', color: 'Verde'},
      {nombre: 'Mongi', anios: 1, especie: 'Magnolia', color: 'Blanco'},
      {nombre: 'Piny', anios: 1, especie: 'Pino', color: 'Verde'},
      {nombre: 'Luz', anios: 2, especie: 'Amapola', color: 'Morado'},

    ];
    this.lugares = [
      {tipoLugar:'Casa',sectorLugar:'Miraflores',
        habitacion:[
          {
            tipoHabitacion:'baño',
            luz_solar:true

          }
        ]

      }
    ]

  }

  selectPlanta(planta: Planta) {
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'Planta Seleccionada', detail: 'Nombre:' + planta.nombre});
  }
  selectLugar(lugar:Lugar){
    this.msg=[]
    this.msg.push({severity: 'info', summary: 'Lugar Seleccionado', detail: lugar.tipoLugar});
  }

  ngOnInit() {
  }

}
