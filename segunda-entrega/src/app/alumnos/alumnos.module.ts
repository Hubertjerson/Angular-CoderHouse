import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FromAlumnosComponent } from './components/from-alumnos/from-alumnos.component';
import { ListAlumnosComponent } from './components/list-alumnos/list-alumnos.component';
import { RouterModule } from '@angular/router';
import { AlumnosRoutingModule } from './alumnos-routing.module';
import { MyMaterialModule } from '../modules/my-material.module';
import { ApiListStudentComponent } from './pages/api-list-student/api-list-student.component';
import { ApiFormStudentComponent } from './pages/api-form-student/api-form-student.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    FromAlumnosComponent,
    ListAlumnosComponent,
    ApiListStudentComponent,
    ApiFormStudentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AlumnosRoutingModule,
    MyMaterialModule,
    HttpClientModule
  ]
})
export class AlumnosModule { }
