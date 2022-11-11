import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { AdminModuleComponent } from './admin-module.component';
import { DashboardComponent } from './admin-components/dashboard/dashboard.component';
import { ProductsComponent } from './admin-components/products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductAnalyticsComponent } from './admin-components/product-analytics/product-analytics.component';


@NgModule({
  declarations: [
    AdminModuleComponent,
    DashboardComponent,
    ProductsComponent,
    ProductAnalyticsComponent
  ],
  imports: [
    CommonModule,
    AdminModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModuleModule { }
