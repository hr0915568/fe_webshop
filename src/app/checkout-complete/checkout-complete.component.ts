import { Component, OnInit } from '@angular/core';
import {CartService} from './../_services/cart.service';
import {Product} from '../_models/product';

@Component({
  selector: 'app-checkout-complete',
  templateUrl: './checkout-complete.component.html',
  styleUrls: ['./checkout-complete.component.css']
})
export class CheckoutCompleteComponent implements OnInit {
  products: Product[];
  
  constructor(private cart: CartService) { }

  ngOnInit() {
    this.getproductsforCart();
  }

  getproductsforCart() {
    this.products = this.cart._getcart()
   return this.products;
   }
}
