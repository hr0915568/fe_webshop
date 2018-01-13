import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { CategoryComponent }      from './category/category.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HomeComponent }  from './home/home.component';
import { ProductsComponent } from './products/products.component';
import {CategoryProductsListComponent} from './category-products-list/category-products-list.component';
import {SiteLayoutComponent} from "./_layouts/site-layout/site-layout.component";
import {MyaccountLayoutComponent} from "./_layouts/myaccount-layout/myaccount-layout.component";
import {LoginComponent} from "./login/login.component";
import {MyAccountComponent} from './my-account/my-account.component';
import {AuthGuard} from './_services/auth-guard.service';
import {SearchComponent} from './search/search.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import {RegisterComponent} from './register/register.component';
import {InvoicesComponent} from './invoices/invoices.component';
import {ProfileComponent} from './profile/profile.component';
import { CheckoutCompleteComponent } from './checkout-complete/checkout-complete.component';
import {ForgottenPasswordComponent} from './forgotten-password/forgotten-password.component';
import {CheckoutGuestComponent} from './checkout-guest/checkout-guest.component';
import {CheckoutRegisteredComponent} from './checkout-registered/checkout-registered.component';
import {AboutComponent} from './about/about.component';
import {TermsComponent} from './terms/terms.component';
import {DataprotectionComponent} from './dataprotection/dataprotection.component';
import {ContactComponent} from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'details/:id', component: HeroDetailComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'category/:id', component: CategoryProductsListComponent },
      { path: 'search/:keywords', component: SearchComponent},
      { path: 'search', component: SearchComponent},
      { path: 'cart', component :CartComponent},
      { path: 'checkout', component: CheckoutComponent},
      { path: 'checkout-guest', component: CheckoutGuestComponent},
      { path: 'checkout-registered', component: CheckoutRegisteredComponent},
      { path: 'product/:id', component: ProductsComponent},
      { path: 'checkout-complete', component: CheckoutCompleteComponent},
      { path: 'about', component:AboutComponent},
      { path: 'terms', component:TermsComponent},
      { path: 'data_protection', component:DataprotectionComponent},
      { path: 'contact', component: ContactComponent}
    ]
  },
  {
    path: '',
    component: MyaccountLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent},
      { path: 'myaccount', component: MyAccountComponent, canActivate: [AuthGuard] },
      { path: 'register', component: RegisterComponent},
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
      { path: 'invoices', component: InvoicesComponent, canActivate: [AuthGuard]},
      { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
      { path: 'forgotten-password', component: ForgottenPasswordComponent},
    ]
  }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
