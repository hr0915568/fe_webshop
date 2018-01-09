import { Component, OnInit } from '@angular/core';
import {CartService} from './../_services/cart.service';
import {Product} from '../_models/product';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  products : Product[];
  total : number = 0;

  constructor(private cart: CartService) { }

  ngOnInit() {
    this.getproductsforCart();
    this.getTotalPrice();
  }

  getproductsforCart() {
    this.products = this.cart._getcart()
   // console.log(this.products);
   return this.products;
   }


   getTotalPrice() {
    this.products = this.cart._getcart()
    for (let product of this.products) {
        this.total = this.total + product.price;
    }
   return this.total;
   }

}
