import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin-components/dashboard/dashboard.component';
import { AdminModuleComponent } from './admin-module.component';

const routes: Routes = [{ 
  path: '', component: AdminModuleComponent,
  children:[
    { path:'', component:DashboardComponent }
  ]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
