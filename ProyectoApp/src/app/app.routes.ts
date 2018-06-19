import {Routes} from "@angular/router";
import {LogInComponent} from "./componentes/log-in/log-in.component";
import {SignInComponent} from "./componentes/sign-in/sign-in.component";


export const RUTAS_APP: Routes = [

  {
    path: 'login',
    component: LogInComponent
  },
  {
    path: 'signin',
    component: SignInComponent
  },
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },

  {
    path: '**',
    redirectTo: 'login' ,
    pathMatch: 'full'
  },


];
