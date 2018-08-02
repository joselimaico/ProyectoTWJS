import { Component, OnInit } from '@angular/core';
import {RaspberryService} from "../../../Servicios/raspberry.service";
import {PlantaService} from "../../../Servicios/planta.service";

@Component({
  selector: 'app-descripcion-planta',
  templateUrl: './descripcion-planta.component.html',
  styleUrls: ['./descripcion-planta.component.css']
})
export class DescripcionPlantaComponent implements OnInit {

  ultimoRegistroRiego: string;
  estadoSuelo: string;


  constructor(private _raspberryService: RaspberryService,
              private _plantaService: PlantaService) { }

  ngOnInit() {
  }

  regarPlanta(){
    this._raspberryService.water()
      .subscribe(
        res => {
          let date = new Date();
          let fecha = date.getDate();
          let hora  = date.getHours();

          let bodyRegistro = {
            fechaRegistro: fecha,
            horaRegistro: hora
          };

          this._plantaService
            .guardarRegistro(bodyRegistro).subscribe(
              resultado => {
                console.log('YA PUEDO GUARDAR EN BD!!');
                console.log('esto retorna el sails, ',resultado);

              }
          );
          console.log('genial.  Se ha regado la planta!!!! El servidor envia ==> ',res);

        }
      )
  }

  verUltimoRiego(){
    this._raspberryService.lastWatered()
      .subscribe(
        res => {
          this.ultimoRegistroRiego = res;
          console.log('el servidor responde con: ',this.ultimoRegistroRiego);
        }
      )
  }


  verEstadoDelSuelo(){
    this._raspberryService.soilStatus()
      .subscribe(
        res => {
          this.estadoSuelo = res;
          console.log('el estado del suelo es: ',this.estadoSuelo);
        }
      )
  }


  encenderAutoRiego(){
    this._raspberryService.turnOnAutoWatered()
      .subscribe(
        res => {
          console.log('se ha encendido el auto watered de la planta');
          console.log('recibo del servidor: ',res);
        }
      )
  }


  apagarAutoRiego(){
    this._raspberryService.turnOffAutoWatered()
      .subscribe(
        res => {
          console.log('se ha apagado el auto watered de la planta');
          console.log('recibo del servidor: ',res);
        }
      )
  }


}
