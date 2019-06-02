import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    ///      "/projects"
    path:'',
    component:ProjectComponent,
    canActivate:[AuthGuard],
    children:[
      { // "/proyects/id" or just  "/projects"
        path:'',
        canActivateChild:[AuthGuard],
        children:[
            { path:':id',component:ProjectDetailsComponent},
            { path: '', component:ProjectListComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
