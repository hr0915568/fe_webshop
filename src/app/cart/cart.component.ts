import { Component, OnInit } from '@angular/core';
import {CartService} from './../_services/cart.service';
import {Product} from '../_models/product';
import {ChangeDetectorRef} from '@angular/core';
import {AlertService} from '../_services/alert.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Product[];
  total : number = 0;

  constructor(private cartService: CartService,private cd : ChangeDetectorRef, private alertService: AlertService) { }

  ngOnInit() {
    this.getproductsforCart();
    this.getTotalPrice();
  }

  getproductsforCart() {
   this.products = this.cartService.cart;
   return this.products;
  }

  getTotalPrice():number {
    this.total  = this.cartService._getCartTotPrice();
    return this.total;
  }

  deleteFromCart(product) {
    if (this.cartService._deletefromcart(product)){
      this.alertService.success("Deleted.");
      this.total  = this.cartService._getCartTotPrice();
    }
    //window.location.reload();
  }



}
