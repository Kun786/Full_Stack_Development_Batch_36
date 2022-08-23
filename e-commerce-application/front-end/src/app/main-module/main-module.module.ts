import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModuleRoutingModule } from './main-module-routing.module';
import { MainModuleComponent } from './main-module.component';
import { HeaderComponent } from './main-components/header/header.component';
import { FooterComponent } from './main-components/footer/footer.component';
import { ContactUsComponent } from './main-components/contact-us/contact-us.component';
import { AboutUsComponent } from './main-components/about-us/about-us.component';
import { ProductsComponent } from './main-components/products/products.component';
import { ViewProductComponent } from './main-components/view-product/view-product.component';
import { CheckOutComponent } from './main-components/check-out/check-out.component';
import { EditCartComponent } from './main-components/edit-cart/edit-cart.component';
import { PurcahseSuccessfulComponent } from './main-components/purcahse-successful/purcahse-successful.component';
import { PurcahseFailedComponent } from './main-components/purcahse-failed/purcahse-failed.component';
import { HomeComponent } from './main-components/home/home.component';


@NgModule({
  declarations: [
    MainModuleComponent,
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    AboutUsComponent,
    ProductsComponent,
    ViewProductComponent,
    CheckOutComponent,
    EditCartComponent,
    PurcahseSuccessfulComponent,
    PurcahseFailedComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MainModuleRoutingModule,
  ]
})
export class MainModuleModule { }
