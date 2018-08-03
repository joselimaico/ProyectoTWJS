import { Injectable, Injector } from '@angular/core';
import {HttpInterceptor} from "@angular/common/http";
import {AuthenticationService} from "./_services";
import {InternalService} from "./Servicios/internal.service";

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector: Injector,
              private internalService: InternalService) { }

  intercept(req, next){
    let token = localStorage.getItem('token');
    // console.log('tiene algo?, ',localStorage.hasOwnProperty('token'));
    // console.log('token del localStorage: ',token);

    console.log('token del internal: ',this.internalService.retornarToken())

    let tokenizedReq = req.clone({
        setHeaders:
          {
            Authorization: `Bearer ${token}`
          // Authorization: `Bearer ${authService.getToken()}`
          }
      })
    return next.handle(tokenizedReq)
  }
}
