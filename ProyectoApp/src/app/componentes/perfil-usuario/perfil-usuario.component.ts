import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UsuarioService} from "../../Servicios/usuario.service";
import {InternalService} from "../../Servicios/internal.service";
import {Usuario} from "../../_models/Clases/Usuario";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AuthenticationService} from "../../_services";

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {

  resultadoConsulta : any;
  closeResult: string;
  inputNombre: string;
  inputApellido: string;
  inputFechaNacimiento: string;


  constructor(private _usuarioService:UsuarioService,
              private _authService:AuthenticationService,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.cargarDatosDelUsuario();
  }

  cargarDatosDelUsuario(){
    this._usuarioService.obtenerUsuarioEscogido()
      .subscribe(
        res =>{
          console.log('resultado de consulta. ',res);
          this.resultadoConsulta = res.usuarioEncontrado;
        }
      )
  }


  actualizarInformacionDelUsuario(){
    let bodyDelUpdate ={
      nombreUsuario: this.inputNombre,
      apellidoUsuario: this.inputApellido,
      fechaNacimientoUsuario: this.inputFechaNacimiento
    }

    console.log('el body es este: ',bodyDelUpdate);

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
