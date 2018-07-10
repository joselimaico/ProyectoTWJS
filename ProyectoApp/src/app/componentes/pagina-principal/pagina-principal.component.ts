import {Component, Input, OnInit} from '@angular/core';
import {Message} from "primeng/api";
import {ActivatedRoute, Router} from "@angular/router";
import {Lugar} from "../../_models";
import {LugarService} from "../../_services/lugar.service";

class Planta {
  nombre:string
  anios:number
  especie:string
  color: string
}

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {
  plantas: Planta[];
  lugares:Lugar[];
  msgs: Message[];
  msg:Message[];
  lugar=[]

  constructor(private _router:Router,
              private _lugarService:LugarService,
              private _route:ActivatedRoute
              ) {
    this.msgs = [];
    this.plantas = [
      {nombre: 'Helen', anios: 2, especie: 'Helecho', color: 'Verde'},
      {nombre: 'Mongi', anios: 1, especie: 'Magnolia', color: 'Blanco'},
      {nombre: 'Piny', anios: 1, especie: 'Pino', color: 'Verde'},
      {nombre: 'Luz', anios: 2, especie: 'Amapola', color: 'Morado'},

    ];




  }

  selectPlanta(planta: Planta) {
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'Planta Seleccionada', detail: 'Nombre:' + planta.nombre});
    console.log('lugares',this.lugares)
    //this.selectUnLugar(0)
  }
  selectLugar(lugar:Lugar){


    this._router.navigate([lugar.idLugar],{relativeTo: this._route});
    //console.log(place)

  }

  ngOnInit() {
    this.lugares=this._lugarService.lugares;



  }



}