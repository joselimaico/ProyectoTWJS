import { Injectable } from '@angular/core';
import {Observable} from "rxjs/index";
import {HttpClient, HttpParams} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class PlantaService {

  URLCrearNuevaPlanta = 'http://localhost:1337/Planta/createNewPlant';
  URLCargarRegistro = 'http://localhost:1337/Registro/saveRegister';
  URLObtenerTodasLasPlantasDeMiHabitacion = 'http://localhost:1337/Planta/getAllPlants';
  URLObtenerTodasLasPlantasCreadas = 'http://localhost:1337/Planta';
  URLObtenerMiPlanta = 'http://localhost:1337/Planta/getMyPlant';

  constructor(private _httpClient: HttpClient) {
  }

  crearNuevaPlanta(body): Observable<any> {
    return this._httpClient.post<any>(this.URLCrearNuevaPlanta, body);
  }

  obtenerTodasLasPlantasDeMiHabitacion(idHabitacion) {
    let params = new HttpParams().set('idHabitacion', idHabitacion);
    return this._httpClient.get<any>(this.URLObtenerTodasLasPlantasDeMiHabitacion, {params});
  }

  obtenerTodasLasPlantasCreadas(){
    return this._httpClient.get<any>(this.URLObtenerTodasLasPlantasCreadas);
  }

  obtenerMiPlanta(idPlanta){
    let params = new HttpParams().set('idPlanta',idPlanta);
    return this._httpClient.get<any>(this.URLObtenerMiPlanta, {params})
  }







  guardarRegistro(body): Observable<any> {
    return this._httpClient.post<any>(this.URLCargarRegistro, body);
  }

}
