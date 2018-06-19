import {Routes} from "@angular/router";
import {LogInComponent} from "./componentes/log-in/log-in.component";
import {SignInComponent} from "./componentes/sign-in/sign-in.component";
import {PaginaPrincipalComponent} from "./componentes/pagina-principal/pagina-principal.component";


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
    path: '**',
    redirectTo: 'login' ,
    pathMatch: 'full'
  },


];
