import {Component, OnInit} from '@angular/core';
import {AlertService} from '../_services/alert.service';
import {CartService} from '../_services/cart.service';
import {AuthService} from '../_services/auth.service';
import {Router} from '@angular/router';
import {OrderService} from '../_services/order.service';
import {GuestOrder} from '../_models/GuestOrder';
import {OrderProduct} from '../_models/order-product';
import {Product} from '../_models/product';

@Component({
  selector: 'app-checkout-guest',
  templateUrl: './checkout-guest.component.html',
  styleUrls: ['./checkout-guest.component.css']
})
export class CheckoutGuestComponent implements OnInit {
  CheckBoxTerms: boolean = false;
  products: Product[];
  total: number = 0;
  order: any = {};
  firstName: string;
  lastName: string;
  company: string;

  country: string;
  city: string;
  zipcode: string;

  street: string;
  streetNumber: string;
  addressExtra: string;


  orderNotes: string;


  email: string;
  password: string;

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
    var order = new GuestOrder();
    order.firstName = this.firstName;
    order.lastName = this.lastName;
    order.company = this.company;
    order.addressExtra = this.addressExtra;
    order.city = this.city;
    order.country = this.country;
    order.email = this.email;
    order.orderNotes = this.orderNotes;
    order.password = this.password;
    order.street = this.street;
    order.streetNumber = this.streetNumber;
    order.zipcode = this.zipcode;


    order.products = this._prepareProducts(this.cartService.cart);
    this.orderService.placeorderAsGuest(order
    ).subscribe(
      response => {
        this.clearCart();
        console.log(this.auth.loggedIn);
        if (this.auth.isLoggedIn() == false) {
          this.auth.login(order.email, order.password).subscribe(
            response => {
              this.router.navigate(['checkout-complete']);
            }
          );
        } else {
          this.router.navigate(['checkout-complete']);
        }

      },
      error => {
        console.log(error);
      }
    );

  }

  CheckboxToggle() {
    this.CheckBoxTerms = !this.CheckBoxTerms;// this will change value of it true and false
    console.log(this.CheckBoxTerms);
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
