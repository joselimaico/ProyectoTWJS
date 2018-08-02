import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {
  private _loginUrl="http://localhost:1337/Usuario/login";
  private _signupUrl="http://localhost:1337/Usuario/signup";
  constructor(private http: HttpClient) { }

  login(email,password) {
    // return this.http.post<any>(`${config.apiUrl}/users/authenticate`, { username: username, password: password })
    //   .pipe(map(user => {
    //     // login successful if there's a jwt token in the response
    //     if (user && user.token) {
    //       // store user details and jwt token in local storage to keep user logged in between page refreshes
    //       localStorage.setItem('currentUser', JSON.stringify(user));
    //     }
    //
    //     return user;
    //   }));
    //localStorage.setItem('currentUser', JSON.stringify(username));
    //return this.http.post<any>(this._loginUrl,{username:username,password:password});
    return this.http.post<any>(this._loginUrl,{email:email,password:password});

  }
  signin(username, email, password){
    return this.http.post<any>(this._signupUrl,{username:username, email:email, password:password, imagenUsuario:'https://sistemas.com/termino/wp-content/uploads/Usuario-Icono.jpg'});
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

}
