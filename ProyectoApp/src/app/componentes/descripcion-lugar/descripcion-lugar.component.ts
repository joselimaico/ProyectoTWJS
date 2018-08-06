import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {InternalService} from "../../Servicios/internal.service";
import {LugarService} from "../../Servicios/lugar.service";
import {HabitacionService} from "../../Servicios/habitacion.service";
import {Habitacion} from "../../_models/Clases/Habitacion";



@Component({
  selector: 'app-descripcion-lugar',
  templateUrl: './descripcion-lugar.component.html',
  styleUrls: ['./descripcion-lugar.component.css']
})


export class DescripcionLugarComponent implements OnInit {

  closeResult: string;
  listaHabitaciones: Habitacion[];
  lugarSeleccionado:any;

  constructor(private route: ActivatedRoute,
              private _router:Router,
              private _lugarService:LugarService,
              private _internalService: InternalService,
              private _habitacionService: HabitacionService,
              private modalService: NgbModal) {


  }
  ngOnInit() {
    this.recibirLugar();
  }

  recibirLugar(){
    // let idDelLugar = this._internalService.retornarIdLugar();

    let idDelLugar = this._internalService.retornarLugar().id;

    this._lugarService.obtenerMiLugar(idDelLugar)
      .subscribe((resultado) => {
        this.lugarSeleccionado = resultado.lugarEncontrado;
        this._habitacionService.obtenerListaDeHabitacionesRegistradas(idDelLugar)
          .subscribe((respuesta) => {
            this.listaHabitaciones = <Habitacion[]>respuesta.listaHabitaciones;
          })
      });
  }

  seleccionarHabitacion(room:Habitacion){
    this._internalService.actualizarHabitacion(room);
    this._router.navigate([`/Lugar/${this._internalService.retornarLugar().id}/Habitacion/${this._internalService.retornarHabitacion().id}`]);
  }



  //---------------------------------------------------------------------

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
    this._router.navigate(['/PaginaPrincipal'],{relativeTo:this.route})
  }

  irAlFormularioHabitacion(){
    this._router.navigate(['/crearNuevaHabitacion']);
  }

}
