import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Message} from "primeng/api";
import {ActivatedRoute, Router} from "@angular/router";
import {PlaceService} from "../../_services/place.service";
import {InternalService} from "../../Servicios/internal.service";
import {LugarService} from "../../Servicios/lugar.service";
import {Lugar} from "../../_models/Clases/Lugar";

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
export class PaginaPrincipalComponent implements OnInit, OnChanges {
  plantas: Planta[];
  lugares: Lugar[];
  msgs: Message[];
  msg:Message[];
  lugar=[];

  constructor(private _router:Router,
              private _lugarService:LugarService,
              private _route:ActivatedRoute,
              private _internalService:InternalService
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
    // this._internalService.actualizarIdLugar(lugar.id);
    // const url = ['/Lugar/'+this._internalService.retornarIdLugar()];

    this._internalService.actualizarLugar(lugar);
    const url = ['/Lugar/'+this._internalService.retornarLugar().id];

    this._router.navigate(url);
  }

  ngOnChanges(){
    this.cargarDatosDelSitio();
  }

  ngOnInit() {
    this.cargarDatosDelSitio();
  }


  cargarDatosDelSitio(){
    this._lugarService.obtenerListaDeLugaresRegistrados()
      .subscribe(
        (resultado) => {
          this.lugares = <Lugar[]>resultado.listaLugares;
          console.log('los lugares que tengo con este usuario son: ',this.lugares);
        }
      )
  }

  crearNuevoLugar(){
    const url = ['/FormularioLugar'];
    this._router.navigate(url);
  }

}
