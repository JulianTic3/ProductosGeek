import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarPersonaComponent } from './personas/buscar-persona/buscar-persona.component';
import { CrearPersonaComponent } from './personas/crear-persona/crear-persona.component';
import { EditarPersonaComponent } from './personas/editar-persona/editar-persona.component';
import { EliminarPersonaComponent } from './personas/eliminar-persona/eliminar-persona.component';
import { BuscarProductoComponent } from './productos/buscar-producto/buscar-producto.component';
import { CrearProductoComponent } from './productos/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './productos/editar-producto/editar-producto.component';
import { EliminarProductoComponent } from './productos/eliminar-producto/eliminar-producto.component';

const routes: Routes = [
  {
    path: "crear-persona",
    component: CrearPersonaComponent
  },
  {
    path: "buscar-persona",
    component: BuscarPersonaComponent
  },
  {
    path: "editar-persona",
    component: EditarPersonaComponent
  },
  {
    path: "eliminar-persona",
    component: EliminarPersonaComponent
  },
  {
    path: "editar-producto",
    component: EditarProductoComponent
  },
  {
    path: "crear-producto",
    component: CrearProductoComponent
  },
  {
    path: "buscar-producto",
    component: BuscarProductoComponent
  },
  {
    path: "eliminar-producto",
    component: EliminarProductoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
