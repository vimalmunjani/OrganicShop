import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  { path : '', component: ProductsComponent},
  { path : 'products', component: ProductsComponent},
  { path : 'login', component: LoginComponent},
  { path : 'admin/products', component: AdminProductsComponent},
  { path : 'admin/orders', component: AdminOrdersComponent},

  { path : 'shopping-cart', component: ShoppingCartComponent, canActivate: [AuthGuardService]},
  { path : 'check-out', component: CheckOutComponent, canActivate: [AuthGuardService]},
  { path : 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuardService]},
  { path : 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
