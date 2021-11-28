import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './plantilla/error/error.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';

const routes: Routes = [
  {
    path: "inicio",
    component: InicioComponent
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/inicio"
  },
  {
    path: "*",
    component: ErrorComponent
  },
  {
    path: "seguridad",
    loadChildren: () => import("./modulos/seguridad/seguridad.module").then(x => x.SeguridadModule)
  },
  {
    path: "administracion",
    loadChildren: () => import("./modulos/administracion/administracion.module").then(x => x.AdministracionModule)
  },
  {
    path: "asesor",
    loadChildren: () => import("./modulos/asesor/asesor.module").then(x => x.AsesorModule)
  },
  {
    path: "pedidos",
    loadChildren: () => import("./modulos/pedidos/pedidos.module").then(x => x.PedidosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
