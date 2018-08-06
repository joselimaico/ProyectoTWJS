import { Injectable } from '@angular/core';
import {Observable} from "rxjs/index";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HabitacionService {

  URL='http://localhost:1337/Habitacion';
  URLCrearNuevaHabitacion = 'http://localhost:1337/Habitacion/createRoom';
  URLObtenerTodasHabitaciones = 'http://localhost:1337/Habitacion/getAllRooms';

  constructor(private _httpClient:HttpClient) { }

  obtenerListaDeHabitacionesRegistradas(idLugar):Observable<any>{
    let params = new HttpParams().set("idLugar",idLugar);
    return this._httpClient.get<any>(this.URLObtenerTodasHabitaciones,{params});
  }

  obtenerHabitacionEscogida(id):Observable<any>{
    return this._httpClient.get<any>(this.URL+'/'+id);
  }

  crearNuevaHabitacion(body):Observable<any>{
    return this._httpClient.post<any>(this.URL,body);
  }

  actualizarHabitacionEscogida(id, body):Observable<any>{
    return this._httpClient.put<any>(this.URL+'/'+id,JSON.stringify(body));
  }

  eliminarHabitacionEscogida(id):Observable<any>{
    return this._httpClient.delete<any>(this.URL+'/'+id);
  }
}
