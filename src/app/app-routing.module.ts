import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './registration/login/login.component';
import {RegisterComponent} from './registration/register/register.component';
import {InstructorComponent} from './instructor/instructor.component';

const routes: Routes = [
  {
    path: 'events',
    component : LoginComponent

  },
  {
  path : 'login',
  component : LoginComponent
  },
  {
    path : 'register',
    component : RegisterComponent
    },
    {
      path : 'instructor',
      component : InstructorComponent
      }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
