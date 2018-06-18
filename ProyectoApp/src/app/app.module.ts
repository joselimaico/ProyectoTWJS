import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './componentes/main/main.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import 'hammerjs';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormularioLugarComponent } from './componentes/formularios/formulario-lugar/formulario-lugar.component';
import { PasosFormularioLugarComponent } from './componentes/formularios/pasos-formulario-lugar/pasos-formulario-lugar.component';
import { FormularioHabitacionComponent } from './componentes/formularios/formulario-habitacion/formulario-habitacion.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FormularioLugarComponent,
    PasosFormularioLugarComponent,
    FormularioHabitacionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
