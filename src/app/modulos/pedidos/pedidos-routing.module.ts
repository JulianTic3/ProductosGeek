import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPedidoComponent } from './crear-pedido/crear-pedido.component';

const routes: Routes = [
  {
    path: "crear-pedido",
    component: CrearPedidoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidosRoutingModule { }
