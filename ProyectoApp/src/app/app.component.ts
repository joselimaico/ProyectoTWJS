import { Component } from '@angular/core';
import {Lugar} from "./_models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  lugares:Lugar[]
  constructor(){

  }
}
