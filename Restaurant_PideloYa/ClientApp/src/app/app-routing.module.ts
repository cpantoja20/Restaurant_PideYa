import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PanaderiaComponent } from '../app/panaderia/panaderia.component';
import { RestauranteComponent } from '../app/restaurante/restaurante.component';
import { DulceComponent } from '../app/dulce/dulce.component';
import { BebidasComponent } from '../app/bebidas/bebidas.component';

const routes: Routes = [
  {
    path: 'panaderia',
    component: PanaderiaComponent
  },
  {
    path: 'restaurante',
    component: RestauranteComponent
  },
  {
    path: 'dulce',
    component: DulceComponent
  },
  {
    path: 'bebidas',
    component: BebidasComponent
  },

];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
