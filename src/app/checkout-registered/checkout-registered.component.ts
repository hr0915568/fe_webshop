import { Component, OnInit } from '@angular/core';
import {AlertService} from '../_services/alert.service';
import {CartService} from '../_services/cart.service';
import {GuestOrder} from '../_models/GuestOrder';
import {OrderProduct} from '../_models/order-product';
import {AuthService} from '../_services/auth.service';
import {Router} from '@angular/router';
import {Product} from '../_models/product';
import {OrderService} from '../_services/order.service';
import {RegisteredOrder} from '../_models/RegisteredOrder';

@Component({
  selector: 'app-checkout-registered',
  templateUrl: './checkout-registered.component.html',
  styleUrls: ['./checkout-registered.component.css']
})
export class CheckoutRegisteredComponent implements OnInit {

  CheckBoxTerms: boolean = false;
  products: Product[];
  total: number = 0;
  order: any = {};

  company: string;

  country: string;
  city: string;
  zipcode: string;

  street: string;
  streetNumber: string;
  addressExtra: string;


  orderNotes: string;


  constructor(private cartService: CartService, private orderService: OrderService,
              private router: Router, private alertService: AlertService, private auth: AuthService) {
  }

  ngOnInit() {
    this.getproductsforCart();
    this.getTotalPrice();
    this.CheckBoxTerms;
  }


  getproductsforCart() {
    this.products = this.cartService.cart;
    // console.log(this.products);
    return this.products;
  }


  getTotalPrice() {
    this.total = this.cartService._getCartTotPrice();
    return this.total;
  }


  placeorder() {
    var order = new RegisteredOrder();
    order.company = this.company;
    order.addressExtra = this.addressExtra;
    order.city = this.city;
    order.country = this.country;
    order.orderNotes = this.orderNotes;
    order.street = this.street;
    order.streetNumber = this.streetNumber;
    order.zipcode = this.zipcode;

    order.products = this._prepareProducts(this.cartService.cart);
    this.orderService.placeorderAsRegisteredUser(order
    ).subscribe(
      response => {
        this.clearCart();
        this.router.navigate(['checkout-complete']);
      },
      error => {
        console.log(error);
        console.log('test');
      }
    );

  }

  CheckboxToggle() {
    this.CheckBoxTerms = !this.CheckBoxTerms;// this will change value of it true and false
  }

  clearCart() {
    this.cartService._clearCart();
  }

  private _prepareProducts(products: Product[]): OrderProduct[] {
    var orderProducts: OrderProduct[] = [];
    for (var i = 0; i < products.length; i++) {
      var added = false;
      for (var j = 0; i < orderProducts.length; j++) {
        if(orderProducts[j].productId == products[i].id) {
          orderProducts[j].quantity++;
          added = true;
        }
      }

      if(added == false) {
        var p = new OrderProduct();
        p.productId = products[i].id;
        p.quantity = 1;
        orderProducts.push(p);
      }
    }

    return orderProducts;
  }

}
