import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UsuarioService} from "../../Servicios/usuario.service";
import {InternalService} from "../../Servicios/internal.service";
import {Usuario} from "../../_models/Clases/Usuario";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {

  resultadoConsulta;
  closeResult: string;
  inputNombre: string;
  inputApellido: string;
  inputFechaNacimiento: string;


  constructor(private _usuarioService:UsuarioService,
              private _internalService:InternalService,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.cargarDatosDelUsuario();
  }

  cargarDatosDelUsuario(){
    this._usuarioService.obtenerUsuarioEscogido
    (this._internalService.retornarUsuario().id)
      .subscribe(
        res => {
          console.log('los resultados del servidor son :',res);
          this.resultadoConsulta = res;
          console.log('ahora tengo lo siguiente (resultados de la consulta): ',this.resultadoConsulta);
        }
      )
  }


  actualizarInformacionDelUsuario(){
    let bodyDelUpdate ={
      _id: this._internalService.retornarUsuario().id,

      nombreUsuario: this.inputNombre,
      apellidoUsuario: this.inputApellido,
      fechaNacimientoUsuario: this.inputFechaNacimiento
    }

    this._usuarioService.actualizarUsuarioActual(bodyDelUpdate)
      .subscribe(
        res =>{
          console.log('hell yeah se actualizo!! ahora tengo esto: ',res);
        }
      )

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



}
