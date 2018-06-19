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
import { ResumenFormularioGeneralComponent } from './componentes/formularios/resumen-formulario-general/resumen-formulario-general.component';
import { FormularioGeneralLugarComponent } from './componentes/formularios/formulario-general-lugar/formulario-general-lugar.component';
import {StepsModule} from "primeng/steps";
import { MenuModule} from "primeng/menu";
import {MatChipsModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatSelectModule} from "@angular/material";
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FormularioLugarComponent,
    PasosFormularioLugarComponent,
    FormularioHabitacionComponent,
    ResumenFormularioGeneralComponent,
    FormularioGeneralLugarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    StepsModule,
    MenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    MatButtonModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
