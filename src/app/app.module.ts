// ANGULAR
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// BOOTSTRAP
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// FIREBASE
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

// COMPONENTS
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

// ENVIRONMENT
import { environment } from '../environments/environment';

// SERVICES
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { UserService } from './user.service';
// ROUTING
// import { AppRoutingModule } from './app-routing.module';

// ROUTES
const routes: Routes = [
  { path : '', component: HomeComponent},
  { path : 'products', component: ProductsComponent},
  { path : 'login', component: LoginComponent},
  { path : 'shopping-cart', component: ShoppingCartComponent},

  { path : 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuardService]},
  { path : 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuardService]},

  { path : 'check-out', component: CheckOutComponent, canActivate: [AuthGuardService]},
  { path : 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuardService]},
  { path : 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    NgbModule.forRoot()
  ],
  providers: [
    AuthService,
    AuthGuardService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
