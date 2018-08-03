import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {Usuario} from "../_models/Clases/Usuario";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  URL='http://localhost:1337/Usuario';
  URLObtenerUsuario='http://localhost:1337/Usuario/getUsuario';
  URLActualizarUsuario = 'http://localhost:1337/Usuario/updateUsuario';

  constructor(private _httpClient:HttpClient) { }

  obtenerListaDeUsuariosRegistrados():Observable<any>{
    return this._httpClient.get<any>(this.URL);
  }

  obtenerUsuarioEscogido():Observable<any>{
    return this._httpClient.get<any>(this.URLObtenerUsuario);
  }

  actualizarUsuarioActual(body):Observable<any>{
    return this._httpClient.put<any>(this.URLActualizarUsuario,body);
  }

}
