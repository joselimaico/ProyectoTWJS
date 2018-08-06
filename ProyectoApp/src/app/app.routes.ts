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
import {PerfilUsuarioComponent} from "./componentes/perfil-usuario/perfil-usuario.component";
import {FormularioHabitacionComponent} from "./componentes/CrearItems/formulario-habitacion/formulario-habitacion.component";



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
    component:PaginaPrincipalComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'login',
    component: LogInComponent
  },
  {
    path:'MisLugares',
    component: MisLugaresComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'MisPlantas',
    component: MisPlantasComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'Historial',
    component: HistorialRiegoComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'FormularioLugar',
    component: FormularioLugarComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'CrearPlanta',
    component: FormularioPlantaComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'PerfilUsuario',
    component: PerfilUsuarioComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'Lugar/:id',
    component:DescripcionLugarComponent,
    canActivate:[AuthGuard],
    children:[
      {
        path:'Habitacion/:id',
        component:DescripcionHabitacionComponent,
        canActivate: [AuthGuard]
      }

    ]
  },
  {
    path:'crearNuevaHabitacion',
    component:FormularioHabitacionComponent
  },

  {
    path: '**',
    redirectTo: 'login' ,
    pathMatch: 'full'
  },


];
