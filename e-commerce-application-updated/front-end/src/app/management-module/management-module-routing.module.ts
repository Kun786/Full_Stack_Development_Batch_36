import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './management-components/admin-management/admin-login/admin-login.component';
import { AdminRegisterComponent } from './management-components/admin-management/admin-register/admin-register.component';
import { UserLoginComponent } from './management-components/user-management/user-login/user-login.component';
import { UserRegisterComponent } from './management-components/user-management/user-register/user-register.component';
import { ManagementModuleComponent } from './management-module.component';

const routes: Routes = [
  { 
  path: '', component: ManagementModuleComponent,
  children:[
    { path:'user-login', component: UserLoginComponent },
    { path:'user-register', component: UserRegisterComponent },
    { path:'admin-login', component: AdminLoginComponent },
    { path:'admin-register', component: AdminRegisterComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementModuleRoutingModule { }
