import { Injectable } from '@angular/core';
import {Observable} from "rxjs/index";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LugarService {

  URL='http://localhost:1337/Lugar';
  URLCrearNuevoLugar = 'http://localhost:1337/Lugar/createPlace';
  URLObtenerMiLugar = 'http://localhost:1337/Lugar/getMyPlace';

  constructor(private _httpClient:HttpClient) { }

  crearNuevoLugar(body):Observable<any>{
    return this._httpClient.post<any>(this.URLCrearNuevoLugar,body);
  }

  obtenerMiLugar(idLugar):Observable<any>{
    let params = new HttpParams().set("idLugar",idLugar);
    return this._httpClient.get<any>(this.URLObtenerMiLugar,{params});
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
