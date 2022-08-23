import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './main-components/about-us/about-us.component';
import { CheckOutComponent } from './main-components/check-out/check-out.component';
import { ContactUsComponent } from './main-components/contact-us/contact-us.component';
import { EditCartComponent } from './main-components/edit-cart/edit-cart.component';
import { HomeComponent } from './main-components/home/home.component';
import { ProductsComponent } from './main-components/products/products.component';
import { PurcahseFailedComponent } from './main-components/purcahse-failed/purcahse-failed.component';
import { PurcahseSuccessfulComponent } from './main-components/purcahse-successful/purcahse-successful.component';
import { ViewProductComponent } from './main-components/view-product/view-product.component';
import { MainModuleComponent } from './main-module.component';

const routes: Routes = [{ 
  path: '', component: MainModuleComponent,
  children:[
    { path:'', component:HomeComponent },
    { path:'home', component:HomeComponent },
    { path:'product', component:ProductsComponent },
    { path:'about-us', component:AboutUsComponent },
    { path:'view-product', component:ViewProductComponent },
    { path:'check-out', component:CheckOutComponent },
    { path:'edit-cart', component:EditCartComponent },
    { path:'contact-us', component:ContactUsComponent },
    { path:'purchase-successful', component:PurcahseSuccessfulComponent },
    { path:'purchase-failed', component:PurcahseFailedComponent }
  ]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainModuleRoutingModule { }
