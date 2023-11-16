import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { TareasComponent } from './components/tareas/tareas.component';
import { MenuComponent } from './components/menu/menu.component';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    TareasComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-bi4egrb5e4ay8rvj.us.auth0.com',
      clientId: 'SBWeJ0myCXyFmX1v9wNWpbFOsYzHZaEB',
      
    }),
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
