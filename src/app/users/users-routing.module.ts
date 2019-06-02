import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
    {
      path: '',
      component:UserComponent,
      canActivate:[AuthGuard]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
