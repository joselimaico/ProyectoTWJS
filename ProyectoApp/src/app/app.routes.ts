import {Routes} from "@angular/router";
import {LogInComponent} from "./componentes/log-in/log-in.component";
import {SignInComponent} from "./componentes/sign-in/sign-in.component";
import {PaginaPrincipalComponent} from "./componentes/pagina-principal/pagina-principal.component";
import {DescripcionLugarComponent} from "./componentes/descripcion-lugar/descripcion-lugar.component";
import {AuthGuard} from "./_guards";



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
    component:PaginaPrincipalComponent,
    // canActivate:[AuthGuard]
  },
  {
    path: 'login',
    component: LogInComponent
  },
  {
    path:'detalle/:id',
    component:DescripcionLugarComponent,
    // canActivate:[AuthGuard]
    // children:[
    //
    // ]
  },


  {
    path: '**',
    redirectTo: 'login' ,
    pathMatch: 'full'
  },


];
