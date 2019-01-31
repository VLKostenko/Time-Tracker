import { IssuesComponent } from './issues/issues.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { TimeComponent } from './time/time.component';

const routes: Routes = [

  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },

  {
    path: 'home', component: HomeComponent
  },

  {
    path: 'issues', component: IssuesComponent
  },

  {
    path: 'project', component: ProjectComponent
  },
  {
    path: 'time', component: TimeComponent
  },

  { path: '**', redirectTo: '/home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
