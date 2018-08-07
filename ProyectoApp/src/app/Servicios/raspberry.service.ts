import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class RaspberryService {

  URLwater='http://192.168.43.225/water';
  URLlastWatered='http://192.168.43.225/last_watered';
  URLsensor='http://192.168.43.225/sensor';
  URLautoWater='http://192.168.43.225/auto/water/';

  toogle: string;

  URLGuardarRegistro = 'http://localhost:1337/Registro/saveRegister';
  URlObtenerTodosLosRegistros = 'http://localhost:1337/Registro/getAllRecords';

  constructor(private _httpClient:HttpClient) { }


  guardarRegistro(body):Observable<any>{
    return this._httpClient.post<any>(this.URLGuardarRegistro,body);
  }

  obtenerTodosLosRegistros(idPlanta):Observable<any>{
    let params = new HttpParams().set('idPlanta',idPlanta);
    return this._httpClient.get<any>(this.URlObtenerTodosLosRegistros,{params});
  }


  water():Observable<any>{
    return this._httpClient.get<any>(this.URLwater);
  }

  lastWatered():Observable<any>{
    return this._httpClient.get<any>(this.URLlastWatered);
  }

  soilStatus():Observable<any>{
    return this._httpClient.get<any>(this.URLsensor);
  }

  turnOnAutoWatered():Observable<any>{
    this.toogle= 'ON';
    return this._httpClient.get<any>(this.URLautoWater+this.toogle);
  }

  turnOffAutoWatered():Observable<any>{
    this.toogle = 'OFF';
    return this._httpClient.get<any>(this.URLautoWater+this.toogle);
  }

}
