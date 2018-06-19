import { Component, OnInit } from '@angular/core';
import {MenuItem, Message} from 'primeng/api';

@Component({
  selector: 'app-pasos-formulario-lugar',
  templateUrl: './pasos-formulario-lugar.component.html',
  styleUrls: ['./pasos-formulario-lugar.component.css']
})
export class PasosFormularioLugarComponent implements OnInit {

  private items: MenuItem[];
  msgs: Message[] =[];
  indiceActivo: number = 1;
  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'Informacion Lugar',
        command: (event: any)=>{
          this.indiceActivo = 0;
          this.msgs.length = 0;
          this.msgs.push({
            severity:'info',
            summary: 'aqui la info del lugar',
            detail: event.item.label});
        }
      },
      {
        label: 'Informacion Habitación',
        command: (event: any)=>{
          this.indiceActivo = 1;
          this.msgs.length = 0;
          this.msgs.push({
            severity:'info',
            summary: 'aqui la info de su habitacion',
            detail: event.item.label});
        }
      },
      {
        label: 'Resumen',
        command: (event: any)=>{
          this.indiceActivo = 2;
          this.msgs.length = 0;
          this.msgs.push({
            severity:'info',
            summary: 'verifique los cambios realizados',
            detail: event.item.label});
        }
      }
    ];
  }

}
