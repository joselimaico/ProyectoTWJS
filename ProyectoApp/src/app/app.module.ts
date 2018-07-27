import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './componentes/main/main.component';
import { LogInComponent } from './componentes/log-in/log-in.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatChipsModule, MatInputModule, MatSelectModule} from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import { SignInComponent } from './componentes/sign-in/sign-in.component';
import {RouterModule} from "@angular/router";
import {RUTAS_APP} from "./app.routes";
import { PaginaPrincipalComponent } from './componentes/pagina-principal/pagina-principal.component';
import { HistorialRiegoComponent } from './componentes/historial-riego/historial-riego.component';
import {TableModule} from 'primeng/table';
import {CarouselModule} from 'primeng/carousel';
import {GrowlModule} from 'primeng/growl';
import {ButtonModule} from 'primeng/button';
import {ChartModule} from 'primeng/chart';
import { DescripcionLugarComponent } from './componentes/descripcion-lugar/descripcion-lugar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AlertComponent } from './_directives';
import { AuthGuard } from './_guards';
import {AlertService, AuthenticationService, UserService} from "./_services";
import {ErrorInterceptor, fakeBackendProvider, JwtInterceptor} from "./_helpers";
import {HttpClientModule,HTTP_INTERCEPTORS} from "@angular/common/http";
import {LugarService} from "./_services/lugar.service";
import { DescripcionHabitacionComponent } from './componentes/descripcion-habitacion/descripcion-habitacion.component';
import { ContenedorPrincipalComponent } from './componentes/contenedor-principal/contenedor-principal.component';
import { MisLugaresComponent } from './componentes/mis-lugares/mis-lugares.component';
import { MisPlantasComponent } from './componentes/mis-plantas/mis-plantas.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {OrderListModule} from 'primeng/orderlist';
import {DataScrollerModule} from "primeng/primeng";
import { FormularioLugarComponent } from './componentes/CrearItems/formulario-lugar/formulario-lugar.component';
import { FormularioPlantaComponent } from './componentes/CrearItems/formulario-planta/formulario-planta.component';
import {MatStepperModule} from '@angular/material/stepper';
import { PerfilUsuarioComponent } from './componentes/perfil-usuario/perfil-usuario.component';
import { MenuOpcionesComponent } from './componentes/itemsContenedorPrincipal/menu-opciones/menu-opciones.component';
import { BarraSuperiorComponent } from './componentes/itemsContenedorPrincipal/barra-superior/barra-superior.component';
import { DescripcionPlantaComponent } from './componentes/MisPlantasComponents/descripcion-planta/descripcion-planta.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AlertComponent,
    LogInComponent,
    SignInComponent,
    PaginaPrincipalComponent,
    HistorialRiegoComponent,
    DescripcionLugarComponent,
    DescripcionHabitacionComponent,
    ContenedorPrincipalComponent,
    MisLugaresComponent,
    MisPlantasComponent,
    FormularioLugarComponent,
    FormularioPlantaComponent,
    PerfilUsuarioComponent,
    MenuOpcionesComponent,
    BarraSuperiorComponent,
    DescripcionPlantaComponent
  ],
  imports: [

    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    MatCardModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatListModule,
    TableModule,
    CarouselModule,
    GrowlModule,
    ButtonModule,
    ChartModule,
    MatExpansionModule,
    DataScrollerModule,
    MatStepperModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      RUTAS_APP,
      {
        //useHash: true
      }
    )
  ],
  providers: [
    AuthGuard,
    LugarService,
    AlertService,
    AuthenticationService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
