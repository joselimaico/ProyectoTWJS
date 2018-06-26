import {Routes} from "@angular/router";
import {FormularioGeneralLugarComponent} from "./componentes/formularios/formulario-general-lugar/formulario-general-lugar.component";
import {MisLugaresComponent} from "./componentes/Modulos/mis-lugares/mis-lugares.component";
import {PageNotFoundComponent} from "./componentes/Modulos/page-not-found/page-not-found.component";
import {MisPlantasComponent} from "./componentes/Modulos/mis-plantas/mis-plantas.component";
import {SteperFormularioLugarComponent} from "./componentes/formularios/steper-formulario-lugar/steper-formulario-lugar.component";
import { ConfiguracionSistemaComponent } from "./componentes/Modulos/configuracion-sistema/configuracion-sistema.component";
import { ReporteRiegoComponent } from "./componentes/Modulos/reporte-riego/reporte-riego.component";
import { FichaLugarEscogidoComponent } from "./componentes/formularios/ficha-lugar-escogido/ficha-lugar-escogido.component";
import { DescripcionObjetoComponent } from "./componentes/formularios/componentes ficha/descripcion-objeto/descripcion-objeto.component";
import { HijosObjetoComponent } from "./componentes/formularios/componentes ficha/hijos-objeto/hijos-objeto.component";

export const RUTAS_APP: Routes = [
  {
    path: 'mislugares',
    component: MisLugaresComponent,
    children:[
      {
        path:'formularioLugar',
        component: FormularioGeneralLugarComponent
      },
      {
        path:'fichaDescripcionLugar',
        component: FichaLugarEscogidoComponent,
        children:[
          {
            path: 'descripcionLugar',
            component: DescripcionObjetoComponent
          },
          {
            path: 'misHabitaciones',
            component: HijosObjetoComponent
          }
        ]
      }
    ]
  },
  {
    path:'stepper',
    component:  SteperFormularioLugarComponent
  },
  {
    path: 'misplantas',
    component: MisPlantasComponent
  },
  {
    path: 'configuracionSistemaRiego',
    component: ConfiguracionSistemaComponent
  },
  {
    path: 'registroDeRiego',
    component: ReporteRiegoComponent
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
