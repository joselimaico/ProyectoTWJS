import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './componentes/main/main.component';
import { MenuOpcionesComponent } from './componentes/menu-opciones/menu-opciones.component';
import { FormularioCrearPlantaComponent } from './componentes/formulario-crear-planta/formulario-crear-planta.component';
import {
  MatButtonModule,
  MatCardModule,
  MatChipsModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule,
  MatSelectModule
} from "@angular/material";

import {MatGridListModule} from '@angular/material/grid-list';
import { FormularioCrearLugarComponent } from './componentes/formulario-crear-lugar/formulario-crear-lugar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {InputTextModule} from "primeng/primeng";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MenuOpcionesComponent,
    FormularioCrearPlantaComponent,
    FormularioCrearLugarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    NgbModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
