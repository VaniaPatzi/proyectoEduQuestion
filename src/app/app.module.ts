import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { HttpClientModule } from '@angular/common/http';
import { TareasComponent } from './components/tareas/tareas.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    TareasComponent,
    EncabezadoComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OAuthModule.forRoot(),
    HttpClientModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
