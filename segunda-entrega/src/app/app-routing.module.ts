import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './home/pages/not-found/not-found.component';


const routes: Routes = [
  {
    path:'',
    loadChildren:()=> import('./home/home.module').then(m=>m.HomeModule)
  },
  {
    path:'alumnos',
    loadChildren:()=> import('./alumnos/alumnos.module').then(m=>m.AlumnosModule)
  },
  {
    path:'**',
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
