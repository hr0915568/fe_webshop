import { Component, OnInit } from '@angular/core';
import {CartService} from './../_services/cart.service';
import {Product} from '../_models/product';
import {OrderService} from '../_services/order.service';
import {Router} from '@angular/router';
import {GuestOrder} from '../_models/GuestOrder';
import {OrderProduct} from '../_models/order-product';
import {AlertService} from '../_services/alert.service';
import {AuthService} from '../_services/auth.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {



  constructor(private cartService: CartService,private orderService: OrderService,
    private router: Router, private alertService: AlertService, private auth: AuthService) { }

  ngOnInit() {
    if(this.auth.isLoggedIn()) {
      this.router.navigate(['checkout-registered'])
      return;
    }
    this.router.navigate(['checkout-guest'])
  }


}
