import { Injectable } from '@angular/core';
import {Observable} from "rxjs/index";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PlantaService {

  URL='http://localhost:1337/Planta';

  constructor(private _httpClient:HttpClient) { }

  obtenerListaDePlantasRegistradas():Observable<any>{
    return this._httpClient.get<any>(this.URL);
  }

  obtenerPlantaEscogida(id):Observable<any>{
    return this._httpClient.get<any>(this.URL+'/'+id);
  }

  crearNuevaPlanta(body):Observable<any>{
    return this._httpClient.post<any>(this.URL,JSON.stringify(body));
  }

  actualizarPlantaEscogida(id, body):Observable<any>{
    return this._httpClient.put<any>(this.URL+'/'+id,JSON.stringify(body));
  }

  eliminarPlantaEscogida(id):Observable<any>{
    return this._httpClient.delete<any>(this.URL+'/'+id);
  }
}
