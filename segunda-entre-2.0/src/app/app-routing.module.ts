import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminlayoutComponent } from './auth/shared/components/layouts/adminlayout/adminlayout.component';

import { AuthGuard } from './auth/shared/guard/auth.guard';
import { AuthlayoutComponent } from './auth/shared/components/layouts/authlayout/authlayout.component';

const routes: Routes = [
  {
    path:'',
    component:AuthlayoutComponent,
    children:[
      {
        path:'sessions',
        loadChildren:() => import('./auth/views/sessions/sessions.module').then(m => m.SessionsModule)
      }
    ]
  },
  {
    path:'',
    component:AdminlayoutComponent,
    canActivate:[AuthGuard],
    children:[
      {
        path:'dashboard',
        loadChildren:() => import('./auth/views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path:'alumnos',
        loadChildren:() => import('./auth/views/alumnos/alumnos.module').then(m => m.AlumnosModule)
      },
      {
        path:'cursos',
        loadChildren:() => import('./auth/views/cursos/cursos.module').then(m => m.CursosModule)
      }
    ]
  },
  {
    path:'**',
    redirectTo:'sessions/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
