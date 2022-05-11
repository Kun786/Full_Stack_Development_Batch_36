import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LinkComponent } from './link/link.component';

const routes: Routes = [
  { path:'', component:HomeComponent }, 
  { path:'home', component:HomeComponent },
  { path:'link' ,component:LinkComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
