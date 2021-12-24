import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaRecetaComponent } from './pages/busqueda-receta/busqueda-receta.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { StatusComponent } from './pages/status/status.component';

const routes: Routes = [
  { path: '', component: StatusComponent },
  { path: 'status', component: StatusComponent },
  { path: 'busqueda-receta', component: BusquedaRecetaComponent },
  { path: 'not-found', component: NotfoundComponent },
  { path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
