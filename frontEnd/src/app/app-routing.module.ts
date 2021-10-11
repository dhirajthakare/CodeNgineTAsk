import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentDetailComponent } from './departments/department-detail/department-detail.component';
import { DepartmentsComponent } from './departments/departments.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'' , component:RegistrationComponent},
  {path : 'project' , children:[
   {path:'login' , component:LoginComponent},
    {path:'department' , children:[
      {path:'' , component:DepartmentsComponent},
      {path:':id' , component:DepartmentDetailComponent},
    ]},
    {path:'users' , children:[
      {path:'' , component:UsersComponent},
      {path:':id' , component:UserDetailsComponent},
    ]},
  
  ]},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
