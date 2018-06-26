import {Component, Input, OnInit} from '@angular/core';
import {Message} from "primeng/api";

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
  selector: 'app-descripcion-lugar',
  templateUrl: './descripcion-lugar.component.html',
  styleUrls: ['./descripcion-lugar.component.css']
})


export class DescripcionLugarComponent implements OnInit {
lugares: Lugar[]
msg:Message[]
  @Input() sitio;
  constructor() {

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


  ngOnInit() {
  }

  selectLugar(lugar:Lugar){
    this.msg=[]
    this.msg.push({severity: 'info', summary: 'Lugar Seleccionado', detail: lugar.tipoLugar});

  }

}
