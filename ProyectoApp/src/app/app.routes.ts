import {Routes} from "@angular/router";
import {LogInComponent} from "./componentes/log-in/log-in.component";
import {SignInComponent} from "./componentes/sign-in/sign-in.component";
import {PaginaPrincipalComponent} from "./componentes/pagina-principal/pagina-principal.component";
import {DescripcionLugarComponent} from "./componentes/descripcion-lugar/descripcion-lugar.component";


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
    path:'main',
    component:PaginaPrincipalComponent
  },
  {
    path: 'login',
    component: LogInComponent
  },
  {
    path:'detalle/:lugar',
    component:DescripcionLugarComponent
  },


  {
    path: '**',
    redirectTo: 'login' ,
    pathMatch: 'full'
  },


];
