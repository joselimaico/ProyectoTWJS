import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-lugar',
  templateUrl: './formulario-lugar.component.html',
  styleUrls: ['./formulario-lugar.component.css']
})
export class FormularioLugarComponent implements OnInit {

  idFormulario = 1;
  nombreLugar = 'Nombre del Lugar';
  tipoLugar = 'Tipo del Lugar';
  sectorLugar = 'Sector del Lugar';
  constructor() { }

  ngOnInit() {
  }

}
