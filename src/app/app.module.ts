import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { app_routes } from './app-routes.module';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { NewContactoComponent } from './contactos/new-contacto/new-contacto.component';
import { ListaComponent } from './contactos/lista/lista.component';
import { EditarComponent } from './contactos/new-contacto/editar.component';
import { UsersService } from './services/users.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    NewContactoComponent,
    ListaComponent,
    EditarComponent,
    HeaderComponent
   
  ],
  imports: [
    BrowserModule,
    app_routes,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
