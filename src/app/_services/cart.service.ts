import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Product} from '../_models/product';

@Injectable()
export class CartService {
  product : Product;
  AllProducts : Product[];
  test : Product;
  TotalPrice: number = 0.0;

  constructor() { }

     _getCartNumber() {
      var products =  this._getcart();
      if (products === null) {
      return 0;}
      else {
      return products.length;
      }
    }

    _getCartTotPrice():number {
      this.AllProducts = this._getcart()
      for (var i = 0; i < this.AllProducts.length; i++) {
          this.TotalPrice += Number(this.AllProducts[i].price);
      }
      return this.TotalPrice;
     }

    _getcart() {
      return JSON.parse(localStorage.getItem('cart'));
    }

    _addtocart_good(item) {
      let productAdd = new Array(item);
      var products =  this._getcart();
      if (products !== null) {
      for (var i = 0; i < products.length; i++) {
        var temp2 = productAdd.push(products[i]); 
      }
      localStorage.setItem('cart',JSON.stringify(productAdd));
      }
      else 
      {
        localStorage.setItem('cart',JSON.stringify(productAdd));
      }
      this._getCartNumber();
    }


    _addtocart(item) {
      let productAdd = new Array(item);
      var products =  this._getcart();
      if (products !== null) {
        this.AllProducts = products;
        this.product = item;
        for (var i = 0; i < this.AllProducts.length; i++) {
          if (this.AllProducts[i].id == this.product.id) {
            continue;
          }
          else {
            var temp2 = productAdd.push(this.AllProducts[i]);
          }
        }
      localStorage.setItem('cart',JSON.stringify(productAdd));
      }
      else 
      {
        localStorage.setItem('cart',JSON.stringify(productAdd));
      }
    }

    _deletefromcart(item) {
      let productAdd = new Array(item);
      var products =  this._getcart();
      let newArray = new Array();
      if (products !== null) {
        this.AllProducts = products;
        this.product = item;
        for (var i = 0; i < this.AllProducts.length; i++) {
          console.log("click:" + this.product.id);
          if (this.AllProducts[i].id !== this.product.id) {
            console.log("product" + this.AllProducts[i].id);
            // console.log(this.product.id);
            console.log("test");
            var temp2 = newArray.push(this.AllProducts[i]);
          }
          else {
            continue;
          }
        }
      localStorage.setItem('cart',JSON.stringify(newArray));
      }
      else 
      {
        localStorage.setItem('cart',JSON.stringify(productAdd));
      }
    }

    _clearCart() {
      localStorage.removeItem('cart');
    }
  }
  

