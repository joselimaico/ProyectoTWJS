import { BrowserModule } from '@angular/platform-browser';
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
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MenuOpcionesComponent,
    FormularioCrearPlantaComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
