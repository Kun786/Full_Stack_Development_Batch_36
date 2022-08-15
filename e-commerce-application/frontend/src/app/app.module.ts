import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './MainPortal/Header/header/header.component';
import { FooterComponent } from './MainPortal/Footer/footer/footer.component';
import { MainComponent } from './MainPortal/Main/main/main.component';
import { ContactUsComponent } from './MainPortal/ContactUs/contact-us/contact-us.component';
import { ProductsComponent } from './MainPortal/Products/products/products.component';
import { CartComponent } from './MainPortal/Products/cart/cart.component';
import { CheckOutComponent } from './MainPortal/Products/check-out/check-out.component';
import { EditCartComponent } from './MainPortal/Products/edit-cart/edit-cart.component';
import { AdminLoginComponent } from './ManagementPortal/AdminManagement/AdminLogin/admin-login/admin-login.component';
import { AdminRegisterComponent } from './ManagementPortal/AdminManagement/AdminRegister/admin-register/admin-register.component';
import { UserRegisterComponent } from './ManagementPortal/UserManagement/UserRegister/user-register/user-register.component';
import { UserLoginComponent } from './ManagementPortal/UserManagement/UserLogin/user-login/user-login.component';
import { OrderSuccessComponent } from './ManagementPortal/PaymentPortal/order-success/order-success.component';
import { CancelOrderComponent } from './ManagementPortal/PaymentPortal/cancel-order/cancel-order.component';
import { WildCardComponent } from './MainPortal/wild-card/wild-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ContactUsComponent,
    ProductsComponent,
    CartComponent,
    CheckOutComponent,
    EditCartComponent,
    AdminLoginComponent,
    AdminRegisterComponent,
    UserRegisterComponent,
    UserLoginComponent,
    OrderSuccessComponent,
    CancelOrderComponent,
    WildCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
