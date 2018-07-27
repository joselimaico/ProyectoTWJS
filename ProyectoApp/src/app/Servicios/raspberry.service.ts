import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
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

  constructor(private _httpClient:HttpClient) { }

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
