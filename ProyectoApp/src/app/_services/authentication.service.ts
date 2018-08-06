import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Router} from "@angular/router";

@Injectable()
export class AuthenticationService {
  private _loginUrl="http://localhost:1337/Usuario/login";
  private _signupUrl="http://localhost:1337/Usuario/signup";
  constructor(private http: HttpClient,
              private _router:Router) { }

  login(email,password) {
    return this.http.post<any>(this._loginUrl,{email:email,password:password});
  }
  signin(username, email, password){
    return this.http.post<any>(this._signupUrl,{username:username, email:email, password:password, imagenUsuario:'https://sistemas.com/termino/wp-content/uploads/Usuario-Icono.jpg'});
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  loggedOut(){
    localStorage.removeItem('token');
    this._router.navigate(['/login']);

  }


}
