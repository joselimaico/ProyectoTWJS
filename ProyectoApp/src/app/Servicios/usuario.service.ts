import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {Usuario} from "../_models/Clases/Usuario";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  URL='http://localhost:1337/Usuario';
  url='http://192.168.43.225/water';


  constructor(private _httpClient:HttpClient) { }

  obtenerListaDeUsuariosRegistrados():Observable<any>{
    return this._httpClient.get<any>(this.URL);
  }

  obtenerUsuarioEscogido(id):Observable<any>{
    return this._httpClient.get<any>(this.URL+'/'+id);
  }

  actualizarUsuarioActual(id, body):Observable<any>{
    return this._httpClient.put<any>(this.URL+'/'+id,JSON.stringify(body));
  }

  Enviar():Observable<any>{
    return this._httpClient.get<any>(this.url);
  }

}
