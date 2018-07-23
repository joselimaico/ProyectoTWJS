import {Routes} from "@angular/router";
import {LogInComponent} from "./componentes/log-in/log-in.component";
import {SignInComponent} from "./componentes/sign-in/sign-in.component";
import {PaginaPrincipalComponent} from "./componentes/pagina-principal/pagina-principal.component";
import {DescripcionLugarComponent} from "./componentes/descripcion-lugar/descripcion-lugar.component";
import {AuthGuard} from "./_guards";
import {DescripcionHabitacionComponent} from "./componentes/descripcion-habitacion/descripcion-habitacion.component";
import {MisLugaresComponent} from "./componentes/mis-lugares/mis-lugares.component";
import {MisPlantasComponent} from "./componentes/mis-plantas/mis-plantas.component";
import {HistorialRiegoComponent} from "./componentes/historial-riego/historial-riego.component";
import {FormularioLugarComponent} from "./componentes/CrearItems/formulario-lugar/formulario-lugar.component";
import {FormularioPlantaComponent} from "./componentes/CrearItems/formulario-planta/formulario-planta.component";



export const RUTAS_APP: Routes = [


  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path: 'signin',
    component: SignInComponent
  },
  {
    path:'PaginaPrincipal',
    component:PaginaPrincipalComponent
    // canActivate:[AuthGuard]
  },
  {
    path: 'login',
    component: LogInComponent
  },
  {
    path:'MisLugares',
    component: MisLugaresComponent
  },

  {
    path:'MisPlantas',
    component: MisPlantasComponent
  },
  {
    path: 'Historial',
    component: HistorialRiegoComponent
  },
  {
    path: 'FormularioLugar',
    component: FormularioLugarComponent
  },
  {
    path: 'FormularioPlanta',
    component: FormularioPlantaComponent
  },
  {
    path:'MisLugares/:id',
    component:DescripcionLugarComponent,
    // canActivate:[AuthGuard],
    children:[
      {path:'habitacion/:id',component:DescripcionHabitacionComponent}

    ]
  },

  {
    path: '**',
    redirectTo: 'login' ,
    pathMatch: 'full'
  },


];
