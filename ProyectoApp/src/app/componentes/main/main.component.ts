import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {UsuarioService} from "../../Servicios/usuario.service";
import {AuthenticationService} from "../../_services";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


prueba:string

  constructor(private _router: Router,
              private _authService:AuthenticationService) { }

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

  irAlLogIn(){
  this._router.navigate(['/login']);
  }

  irAlSignIn(){
  this._router.navigate(['/signin']);
  }






}
