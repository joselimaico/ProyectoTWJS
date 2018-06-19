import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-habitacion',
  templateUrl: './formulario-habitacion.component.html',
  styleUrls: ['./formulario-habitacion.component.css']
})
export class FormularioHabitacionComponent implements OnInit {

  idFormulario = 2;
  nombreHabitacion = 'Nombre de la habitacion';
  tamanioHabitacion = 'Tamaño de la habitacion';
  ambienteHabitacion = 'Tipo de ambiente de la habitacion';
  esIluminado = false;
  constructor() { }

  ngOnInit() {
  }

}
