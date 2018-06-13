import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-formulario-crear-planta',
  templateUrl: './formulario-crear-planta.component.html',
  styleUrls: ['./formulario-crear-planta.component.css']
})
export class FormularioCrearPlantaComponent implements OnInit {

  @Input() nombrePlanta: 'nombre de Planta';
  especiePlanta: 'especie Planta';
  detalleSuelo: 'detalle Suelo';
  edadPlanta: 'edad Planta';
  fechaPlantada: 'fecha Plantacion';
  idDueño: 'mi Dueño';
  constructor() { }

  ngOnInit() {
  }

}
