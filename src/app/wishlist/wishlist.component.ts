import { Component, OnInit } from '@angular/core';
import {WishlistService} from './../_services/wishlist.service';
import {Product} from '../_models/product';
import {ChangeDetectorRef} from '@angular/core';
import {AlertService} from '../_services/alert.service';
import {CartService} from '../_services/cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  products: Product[];
  total : number = 0;

  constructor(private wishlistService: WishlistService,
              private cd : ChangeDetectorRef, 
              private alertService: AlertService,
              private cart: CartService) { }

  ngOnInit() {
    this.getproductsforWishlist()
  }

  getproductsforWishlist() {
    this.products = this.wishlistService.wishlist;
    return this.products;
    
   }

  deleteFromWishlist(product) {
    if (this.wishlistService._deletefromwishlist(product)){
      this.alertService.success("Deleted product from Wishlist");
      this.total  = this.wishlistService._getWishlistTotPrice();
    }
    //window.location.reload();
  }

  addToWishlist(product) {
    this.wishlistService._addtowishlist(product);
  }

  addToCart(product) {
    this.cart._addtocart(product);
    this.deleteFromWishlist(product);
  }

}
