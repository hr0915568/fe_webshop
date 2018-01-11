import { Component, OnInit } from '@angular/core';
import {CartService} from './../_services/cart.service';
import {Product} from '../_models/product';

import {OrderService} from './../_services/order.service';
import {Order} from '../_models/order';

import {tap} from 'rxjs/operators';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {AuthService} from '../_services/auth.service';

@Component({
  selector: 'app-checkout-complete',
  templateUrl: './checkout-complete.component.html',
  styleUrls: ['./checkout-complete.component.css']
})
export class CheckoutCompleteComponent implements OnInit {
  products: Product[];
  total : number = 0;
  order : Order = new Order;
  
  constructor(private cart: CartService,private ordermodel: OrderService,private http: HttpClient) { }

  ngOnInit() {
    this.getproductsforCart();
    this.getOrderModel(1);
  }

  getproductsforCart() {
    this.products = this.cart._getcart()
   return this.products;
   }


   getTotalPrice():number {
    this.total  = this.cart._getCartTotPrice();
    return this.total;
  }

  addToCart() {
    this.ordermodel.getOrderModel(1)
  }

  getOrderModel(orderid: number) {
    // const url = `${this.productsUrl}/${productid}`;
    return this.http.get<Order>('http://api.hrwebshop.tk/order/' + orderid).pipe(
      tap(_ => console.log(`fetched orders id=${orderid}`))
    )
    .subscribe(order => this.order = order);
    ;
  }
}
