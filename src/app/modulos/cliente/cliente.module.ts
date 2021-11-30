import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { CrearFinanciacionComponent } from './crear-financiacion/crear-financiacion.component';


@NgModule({
  declarations: [
    CrearFinanciacionComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule
  ]
})
export class ClienteModule { }
