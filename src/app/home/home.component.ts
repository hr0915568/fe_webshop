import { Component, OnInit } from '@angular/core';
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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  product: Product = new Product();
  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private http: HttpClient) { }

  ngOnInit() {
      this.productService.getProduct(11)
      .subscribe((product) => this.product = product);
  }

}
