import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {UsuarioService} from "../../Servicios/usuario.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {



  constructor(private _router: Router,
              private _http: HttpClient,
              private _usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  irAlHome(){
    const url=['/PaginaPrincipal'];
    this._router.navigate(url);
  }

  irAlPerfilUsuario(){
    const url=['/PerfilUsuario'];
    this._router.navigate(url);
  }



  regar(){
    this._usuarioService.Enviar()
      .subscribe(
        res => {
          console.log(res);
        }
      )
  }






}
