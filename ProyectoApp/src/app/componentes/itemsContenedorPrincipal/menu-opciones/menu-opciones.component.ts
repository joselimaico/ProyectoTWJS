import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu-opciones',
  templateUrl: './menu-opciones.component.html',
  styleUrls: ['./menu-opciones.component.css']
})
export class MenuOpcionesComponent implements OnInit {


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
