import {Routes} from "@angular/router";
import {FormularioGeneralLugarComponent} from "./componentes/formularios/formulario-general-lugar/formulario-general-lugar.component";
import {MisLugaresComponent} from "./componentes/Modulos/mis-lugares/mis-lugares.component";
import {PageNotFoundComponent} from "./componentes/Modulos/page-not-found/page-not-found.component";
import {MisPlantasComponent} from "./componentes/Modulos/mis-plantas/mis-plantas.component";

export const RUTAS_APP: Routes = [
  {
    path: 'mislugares',
    component: MisLugaresComponent
  },
  {
    path: 'misplantas',
    component: MisPlantasComponent
  },
  {
    path: '',
    redirectTo: '/mislugares',
    pathMatch: 'full'
  },
  {
    path:'**',
    component: PageNotFoundComponent
  }
];
