import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {PlaceService} from "../../_services/place.service";
import {Lugar} from "../../_models";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";



@Component({
  selector: 'app-descripcion-lugar',
  templateUrl: './descripcion-lugar.component.html',
  styleUrls: ['./descripcion-lugar.component.css']
})


export class DescripcionLugarComponent implements OnInit {

  quiereActualizar:boolean;
  closeResult: string;
  Idlugar:number
  lugares:Lugar[]
  lugarSeleccionado=[];
  habitacionSeleccionada=[];
  constructor(private route: ActivatedRoute,
              private _lugarService:PlaceService,
              private _router:Router,
              private modalService: NgbModal) {


  }

  ngOnInit() {
    this.recibirLugar();
  }


  recibirLugar(){
    this.route.paramMap.subscribe(
      (params:ParamMap)=>{
        let id = parseInt(params.get('id'));
        this.Idlugar =id;
        console.log(this.Idlugar);
      }
    )
    this.lugares=this._lugarService.lugares;
    this.selectLugar(this.Idlugar);
  }

  selectLugar(id:number){
    let place= [this.lugares.find(
      (place:Lugar) => {
        return place.idLugar===id
      })]
    this.lugarSeleccionado=place
    console.log("lugar encontrado: ",this.lugarSeleccionado)
  }

  selectHabitacion(room){
    this._router.navigate(['habitacion',room.idHabitacion],{relativeTo:this.route})

    this._lugarService.enviarArreglo(room)


  }


  open(content){
    this.modalService.open(content)
      .result.then((result)=>{
      this.closeResult = `Closed with: ${result}`;
    }, (reason)=>{
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  gotoMain(){
    //let selectedId=this.Idlugar ?this.Idlugar:null
    this._router.navigate(['../'],{relativeTo:this.route})
  }


}
