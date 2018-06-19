import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './componentes/main/main.component';
import { LogInComponent } from './componentes/log-in/log-in.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
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
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LogInComponent,
    SignInComponent,
    PaginaPrincipalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatListModule,
    RouterModule.forRoot(
      RUTAS_APP,
      {
        useHash: true
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
