import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Product} from '../_models/product';
import {OrderProduct} from '../_models/order-product';

@Injectable()
export class CartService {
  product: Product;
  cart: Product[];
  test: Product;
  TotalPrice: number = 0.0;
  products: OrderProduct[] = [];

  constructor() {
    var saved_cart = JSON.parse(localStorage.getItem('cart'));
    if (saved_cart == null || typeof saved_cart != "object") {
      this.cart = [];
    } else {
      this.cart = saved_cart;
    }

  }

  saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  _getCartNumber() {
    return this.cart.length;
  }

  _getCartTotPrice(): number {
    this.TotalPrice = 0;
    for (var i = 0; i < this.cart.length; i++) {
      this.TotalPrice += Number(this.cart[i].price);
    }
    return this.TotalPrice;
  }


  _addtocart(item: Product) {

    this.cart.push(item);
    this.saveCart();

  }

  _deletefromcart(item) {
    for (var i = 0; i < this.cart.length; i++) {
      if (this.cart[i].id == item.id) {
        this.cart.splice(i, 1);
        this.saveCart();
        return true;
      }
    }

    return false;
    // let productAdd = new Array(item);
    // var products = this._getcart();
    // let newArray = new Array();
    // if (products !== null) {
    //   this.AllProducts = products;
    //   this.product = item;
    //   for (var i = 0; i < this.AllProducts.length; i++) {
    //     console.log('click:' + this.product.id);
    //     if (this.AllProducts[i].id !== this.product.id) {
    //       console.log('product' + this.AllProducts[i].id);
    //       // console.log(this.product.id);
    //       console.log('test');
    //       var temp2 = newArray.push(this.AllProducts[i]);
    //     }
    //     else {
    //       continue;
    //     }
    //   }
    //   localStorage.setItem('cart', JSON.stringify(newArray));
    // }
    // else {
    //   localStorage.setItem('cart', JSON.stringify(productAdd));
    // }
  }

  _clearCart() {
    this.cart = [];
    localStorage.removeItem('cart');
  }
}


