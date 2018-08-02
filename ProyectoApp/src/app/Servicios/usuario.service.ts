import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {Usuario} from "../_models/Clases/Usuario";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  URL='http://localhost:1337/Usuario';
  URLActualizarUsuario = 'http://localhost:1337/Usuario/updateUsuario';

  constructor(private _httpClient:HttpClient) { }

  obtenerListaDeUsuariosRegistrados():Observable<any>{
    return this._httpClient.get<any>(this.URL);
  }

  obtenerUsuarioEscogido(id):Observable<any>{
    return this._httpClient.get<any>(this.URL+'/'+id);
  }

  actualizarUsuarioActual(body):Observable<any>{
    return this._httpClient.put<any>(this.URLActualizarUsuario,body);
  }

}
