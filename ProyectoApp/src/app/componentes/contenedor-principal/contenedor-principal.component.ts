import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-contenedor-principal',
  templateUrl: './contenedor-principal.component.html',
  styleUrls: ['./contenedor-principal.component.css']
})
export class ContenedorPrincipalComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }

  irAMisLugares(){
    const url = ['/MisLugares'];
    this._router.navigate(url);
  }

  irAMisPlantas(){
    const url = ['/MisPlantas'];
    this._router.navigate(url);
  }
  irAHistorial(){
    const url = ['/Historial'];
    this._router.navigate(url);
  }
}
