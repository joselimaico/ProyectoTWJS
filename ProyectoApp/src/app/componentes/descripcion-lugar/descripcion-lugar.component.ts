import {Component, Input, OnInit} from '@angular/core';
import {Message} from "primeng/api";
import {ActivatedRoute, ParamMap} from "@angular/router";



@Component({
  selector: 'app-descripcion-lugar',
  templateUrl: './descripcion-lugar.component.html',
  styleUrls: ['./descripcion-lugar.component.css']
})


export class DescripcionLugarComponent implements OnInit {
//lugares: Lugar[]
msg:Message[]
  Idlugar:number
//lugares:Lugar[];
  constructor(private route: ActivatedRoute) {


  }


  ngOnInit() {
     this.route.paramMap.subscribe(
      (params:ParamMap)=>{
        let id = parseInt(params.get('id'));
        this.Idlugar =id;
        console.log(this.Idlugar);

      }
    )




  }

  // selectLugar(lugar:Lugar){
  //   this.msg=[]
  //   this.msg.push({severity: 'info', summary: 'Lugar Seleccionado', detail: lugar.tipoLugar});
  //
  // }

}
