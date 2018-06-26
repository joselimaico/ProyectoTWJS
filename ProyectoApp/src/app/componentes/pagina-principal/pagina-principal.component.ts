import { Component, OnInit } from '@angular/core';
import {Message} from "primeng/api";
import {Router} from "@angular/router";

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
    {
      tipoHabitacion:string
      luz_solar:boolean
    }

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

  constructor(private _router:Router) {
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

      },
      {
       tipoLugar:'Departamento',sectorLugar:'La gasca',
       habitacion:[
         {tipoHabitacion:'Sala',
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
    const url = ['/detalle/'+lugar.tipoLugar];
    this._router.navigate(url);

  }

  ngOnInit() {
  }

}
