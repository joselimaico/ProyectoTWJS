import { Injectable } from '@angular/core';
import {Observable} from "rxjs/index";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LugarService {

  URL='http://localhost:1337/Lugar';
  URLCrearNuevaHabitacion = 'http://localhost:1337/Lugar/createPlace';

  constructor(private _httpClient:HttpClient) { }

  crearNuevoLugar(body):Observable<any>{
    return this._httpClient.post<any>(this.URLCrearNuevaHabitacion,body);
  }







  obtenerListaDeLugaresRegistrados():Observable<any>{
    return this._httpClient.get<any>(this.URL);
  }

  obtenerLugarEscogido(id):Observable<any>{
    return this._httpClient.get<any>(this.URL+'/'+id);
  }



  actualizarLugarEscogido(id, body):Observable<any>{
    return this._httpClient.put<any>(this.URL+'/'+id,JSON.stringify(body));
  }

  eliminarLugarEscogido(id):Observable<any>{
    return this._httpClient.delete<any>(this.URL+'/'+id);
  }


}
