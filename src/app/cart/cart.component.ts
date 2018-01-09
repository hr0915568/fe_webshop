import { Component, OnInit } from '@angular/core';
import {CartService} from './../_services/cart.service';
import {Product} from '../_models/product';
import {ChangeDetectorRef} from '@angular/core';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Product[];
  total : number = 0;

  constructor(private cart: CartService,private cd : ChangeDetectorRef) { }

  ngOnInit() {
    this.getproductsforCart();
    this.getTotalPrice();
  }

  getproductsforCart() {
   this.products = this.cart._getcart()
  // console.log(this.products);
  return this.products;
  }

  getTotalPrice():number {
    this.total  = this.cart._getCartTotPrice();
    return this.total;
  }

  deleteFromCart(product) {
    // this.cart._deletefromcart(product);
    this.cd.detectChanges();
    this.cart._deletefromcart(product);
    window.location.reload();
  }

}
