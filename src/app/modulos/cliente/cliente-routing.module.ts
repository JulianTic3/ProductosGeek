import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearFinanciacionComponent } from './crear-financiacion/crear-financiacion.component';

const routes: Routes = [
  {
    path: "crear-financiacion",
    component: CrearFinanciacionComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
