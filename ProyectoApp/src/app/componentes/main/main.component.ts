import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  irAlHome(){
    const url=['/PaginaPrincipal'];
    this._router.navigate(url);
  }



}
