import {Component, Input, OnInit} from '@angular/core';
import {Message} from "primeng/api";
import {Router} from "@angular/router";
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
              private _lugarService:LugarService
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
    //this.msg=[]
    // this.msg.push({severity: 'info', summary: 'Lugar Seleccionado', detail: lugar.tipoLugar});
    //const url = ['/detalle', { queryParams: { lugar: lugar.tipoLugar} }];

    //this._lugarService.enviarArreglo(this.lugar);

    this._router.navigate(['/detalle',lugar.idLugar]);
    //console.log(place)

  }

  ngOnInit() {
    this.lugares=this._lugarService.lugares;



  }

  // selectUnLugar(lugarid){
  //   console.log(places[lugarid])
  // }

}
