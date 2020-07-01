//import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { ListaComponent } from './contactos/lista/lista.component';
import { NewContactoComponent } from './contactos/new-contacto/new-contacto.component';
import { EditarComponent } from './contactos/new-contacto/editar.component';


const routes: Routes = [
{ path: 'contactos', component: ListaComponent },
{ path: 'newContacto', component: NewContactoComponent },
{ path: 'editar/:id', component: EditarComponent },
{ path: '**', redirectTo: 'contactos', pathMatch: 'full' }];

//@NgModule({
  //imports: [RouterModule.forRoot(routes)],
  //exports: [RouterModule]
//})
export const app_routes = RouterModule.forRoot( routes, { useHash: true } );
