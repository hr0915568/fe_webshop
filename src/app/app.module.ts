import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { CategoryComponent }      from './category/category.component';
import { HeroSearchComponent }  from './hero-search/hero-search.component';
import { CategoryService }          from './_services/category.service';
import { MessageService }       from './message.service';
import { MessagesComponent }    from './messages/messages.component';
import { HomeComponent } from './home/home.component';


import { ProductsComponent } from './products/products.component';
import { ProductService }          from './_services/product.service';
import { CategoryProductsListComponent } from './category-products-list/category-products-list.component';
import { AuthGuard} from "./_services/auth-guard.service";
import { AuthService} from "./_services/auth.service";
import { SiteLayoutComponent} from "./_layouts/site-layout/site-layout.component";
import { LoginComponent } from './login/login.component';
import { MyaccountLayoutComponent} from "./_layouts/myaccount-layout/myaccount-layout.component";
import { LogginButtonComponent } from './loggin-button/loggin-button.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { WelcomeTextComponent } from './welcome-text/welcome-text.component';
import { SearchComponent } from './search/search.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartService } from './_services/cart.service';
import { CartButtonComponent } from './cart-button/cart-button.component';
import { RegisterComponent } from './register/register.component';
import { RegisterationService} from './_services/registeration.service';
import { ProfileComponent } from './profile/profile.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { CheckoutCompleteComponent } from './checkout-complete/checkout-complete.component';
import { ForgottenPasswordComponent } from './forgotten-password/forgotten-password.component';
import {AlertService} from './_services/alert.service';
import {AlertComponent} from './_directives';
import {OrderService} from "./_services/order.service";
import { CheckoutGuestComponent } from './checkout-guest/checkout-guest.component';
import { CheckoutRegisteredComponent } from './checkout-registered/checkout-registered.component';
import { AboutComponent } from './about/about.component';
import { TermsComponent } from './terms/terms.component';
import { DataprotectionComponent } from './dataprotection/dataprotection.component';
import { ContactComponent } from './contact/contact.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { WishlistService } from './_services/wishlist.service';
import { SearchButtonComponent } from './search-button/search-button.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.

  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    CategoryComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    HomeComponent,
    ProductsComponent,
    CategoryProductsListComponent,
    SiteLayoutComponent,
    LoginComponent,
    MyaccountLayoutComponent,
    LogginButtonComponent,
    MyAccountComponent,
    WelcomeTextComponent,
    SearchComponent,
    CartComponent,
    CheckoutComponent,
    CartButtonComponent,
    RegisterComponent,
    ProfileComponent,
    InvoicesComponent,
    CartButtonComponent,
    CheckoutCompleteComponent,
    ForgottenPasswordComponent,
    AlertComponent,
    CheckoutGuestComponent,
    CheckoutRegisteredComponent,
    AboutComponent,
    TermsComponent,
    DataprotectionComponent,
    ContactComponent,
    WishlistComponent,
    SearchButtonComponent
  ],
  providers: [ CategoryService, MessageService, ProductService, AuthGuard, AuthService, CartService, RegisterationService, AlertService,OrderService,WishlistService ],
  bootstrap: [ AppComponent, LogginButtonComponent, WelcomeTextComponent,CartButtonComponent, SearchButtonComponent ]
})
export class AppModule { }
