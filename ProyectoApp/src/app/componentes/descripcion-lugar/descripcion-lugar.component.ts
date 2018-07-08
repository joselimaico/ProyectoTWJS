import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Message} from "primeng/api";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {LugarService} from "../../_services/lugar.service";
import {Lugar} from "../../_models";
import {DescripcionHabitacionComponent} from "../descripcion-habitacion/descripcion-habitacion.component";



@Component({
  selector: 'app-descripcion-lugar',
  templateUrl: './descripcion-lugar.component.html',
  styleUrls: ['./descripcion-lugar.component.css']
})


export class DescripcionLugarComponent implements OnInit {

  Idlugar:number
  lugares:Lugar[]
  lugarSeleccionado=[]
  ;
  constructor(private route: ActivatedRoute,private _lugarService:LugarService,private _router:Router) {


  }


  ngOnInit() {


     this.route.paramMap.subscribe(
      (params:ParamMap)=>{
        let id = parseInt(params.get('id'));
        this.Idlugar =id;
        console.log(this.Idlugar);

      }

    )
    this.lugares=this._lugarService.lugares
    this.selectLugar(this.Idlugar)


  }

  selectLugar(id:number){
     let place= [this.lugares.find(
      (place:Lugar) => {
        return place.idLugar===id
      })]
    this.lugarSeleccionado=place
    console.log("lugar encontrado: ",this.lugarSeleccionado)



  }

  gotoMain(){
    //let selectedId=this.Idlugar ?this.Idlugar:null
    this._router.navigate(['../'],{relativeTo:this.route})
  }

  selectHabitacion(room){
    this._router.navigate(['habitacion',room.idHabitacion],{relativeTo:this.route})

    this._lugarService.enviarArreglo(room)


  }


}
