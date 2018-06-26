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
import {
  MatChipsModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatSelectModule,
} from "@angular/material";
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { MisLugaresComponent } from './componentes/Modulos/mis-lugares/mis-lugares.component';
import { PageNotFoundComponent } from './componentes/Modulos/page-not-found/page-not-found.component';
import {RouterModule} from "@angular/router";
import {RUTAS_APP} from "./app.routes";
import { MisPlantasComponent } from './componentes/Modulos/mis-plantas/mis-plantas.component';
import { SteperFormularioLugarComponent } from './componentes/formularios/steper-formulario-lugar/steper-formulario-lugar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ConfiguracionSistemaComponent } from './componentes/Modulos/configuracion-sistema/configuracion-sistema.component';
import { ReporteRiegoComponent } from './componentes/Modulos/reporte-riego/reporte-riego.component';
import { FichaLugarEscogidoComponent } from './componentes/formularios/ficha-lugar-escogido/ficha-lugar-escogido.component';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import { DescripcionObjetoComponent } from './componentes/formularios/componentes ficha/descripcion-objeto/descripcion-objeto.component';
import { HijosObjetoComponent } from './componentes/formularios/componentes ficha/hijos-objeto/hijos-objeto.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FormularioLugarComponent,
    PasosFormularioLugarComponent,
    FormularioHabitacionComponent,
    ResumenFormularioGeneralComponent,
    FormularioGeneralLugarComponent,
    MisLugaresComponent,
    PageNotFoundComponent,
    MisPlantasComponent,
    SteperFormularioLugarComponent,
    ConfiguracionSistemaComponent,
    ReporteRiegoComponent,
    FichaLugarEscogidoComponent,
    DescripcionObjetoComponent,
    HijosObjetoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      RUTAS_APP,
      {
        useHash: true
      }
    ),
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    StepsModule,
    MenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    MatButtonModule,
    MatRadioModule,
    MatStepperModule,
    ReactiveFormsModule,
    FormsModule,
    CardModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
