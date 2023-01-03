import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { FormComponent } from './form/form.component';
import { ListaComponent } from './lista/lista.component';


@NgModule({
  declarations: [
    FormComponent,
    ListaComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }
