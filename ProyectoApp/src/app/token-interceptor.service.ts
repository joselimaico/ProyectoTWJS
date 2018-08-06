import { Injectable, Injector } from '@angular/core';
import {HttpInterceptor} from "@angular/common/http";
import {AuthenticationService} from "./_services";
import {InternalService} from "./Servicios/internal.service";

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req, next){
    let token = localStorage.getItem('token');
    let tokenizedReq = req.clone({
        setHeaders:
          {
            Authorization: `Bearer ${token}`
          }
      })
    return next.handle(tokenizedReq)
  }
}
