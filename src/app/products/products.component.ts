import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import {HttpClient} from '@angular/common/http'
import { ProductService }  from '../_services/product.service';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/switchMap';

import { Jsonp,RequestOptions } from '@angular/http';
import {ActivatedRoute, ParamMap, Params, Router} from "@angular/router";
import {Product} from '../_models/product';
import {CartService} from '../_services/cart.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
 product: Product;


  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private http: HttpClient,
    private cart: CartService) { }



  ngOnInit() {
    this.route.paramMap
    // (+) converts string 'id' to a number
      .switchMap((params: ParamMap) => this.productService.getProduct(+params.get('id')))
      .subscribe((product) => this.product = product);
  }

  addToCart(product) {
    this.cart._addtocart(product)
  }

}
