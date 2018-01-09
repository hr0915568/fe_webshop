import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {CategoryService} from '../_services/category.service';
import {Product} from '../_models/product';
import 'rxjs/add/operator/switchMap';
import {forEach} from '@angular/router/src/utils/collection';
import {AuthService} from '../_services/auth.service';
import {CartService} from '../_services/cart.service';

@Component({
  selector: 'app-category-products-list',
  templateUrl: './category-products-list.component.html',
  styleUrls: ['./category-products-list.component.css']
})
export class CategoryProductsListComponent implements OnInit {

  products: Product[];

  constructor(private route: ActivatedRoute,
              private categoryService: CategoryService,
              private auth: AuthService,
              private cart: CartService
              ) { }

  ngOnInit() {
    this.route.paramMap
    // (+) converts string 'id' to a number
      .switchMap((params: ParamMap) => this.categoryService.getProductsOfCategory(+params.get('id')))
      .subscribe((products) => this.products = products);
      
  }

  /**
   * prepare the products to display 3 items per row
   * @returns {any[]}
   */
  get productsGrid()
  {
    if(typeof this.products == 'undefined') {
      return [];
    }

    let products = [];
    let row: Product[] = [];

    for(let product of this.products) {
      row.push(product);
      if(row.length == 4) {
        products.push(row);
        row = [];
      }
    }

    if(row.length > 0) {
      products.push(row);
    }
    // console.log(this.products);
    return products;
  }

  addToCart(product) {
    this.cart._addtocart(product);
  }

}
