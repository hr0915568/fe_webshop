import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Product} from '../_models/product';
import {OrderProduct} from '../_models/order-product';

@Injectable()
export class WishlistService {
  product: Product;
  wishlist: Product[];
  test: Product;
  TotalPrice: number = 0.0;
  products: OrderProduct[] = [];

  constructor() {
    var saved_wishlist = JSON.parse(localStorage.getItem('wishlist'));
    if (saved_wishlist == null || typeof saved_wishlist != "object") {
      this.wishlist = [];
    } else {
      this.wishlist = saved_wishlist;
    }

  }

  saveWishlist() {
    localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
  }

  _getWishlistNumber() {
    return this.wishlist.length;
  }

  _getWishlistTotPrice(): number {
    this.TotalPrice = 0;
    for (var i = 0; i < this.wishlist.length; i++) {
      this.TotalPrice += Number(this.wishlist[i].price);
    }
    return this.TotalPrice;
  }


  _addtowishlist(item: Product) {

    this.wishlist.push(item);
    this.saveWishlist();

  }

  _deletefromwishlist(item) {
    for (var i = 0; i < this.wishlist.length; i++) {
      if (this.wishlist[i].id == item.id) {
        this.wishlist.splice(i, 1);
        this.saveWishlist();
        return true;
      }
    }

    return false;
  }

  _clearWishlist() {
    this.wishlist = [];
    localStorage.removeItem('wishlist');
  }
}


