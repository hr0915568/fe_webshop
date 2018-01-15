import { Component, OnInit } from '@angular/core';
import {Product} from '../_models/product';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CartService} from '../_services/cart.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  results: Product[] = [];
  keyword: string;
  constructor(private http: HttpClient, private cart: CartService) {

  }

  ngOnInit() {
  }

  search()
  {
    if(this.keyword == null){
      this.results = [];
      return;
    }

    var url = 'http://api.hrwebshop.tk/search/' +encodeURI(this.keyword);
    this.http.get<Product[]>(url,  {
      withCredentials: true,
      headers: new HttpHeaders()
        .set('Content-type', 'text/plain')

    }).subscribe(products => this.results = products);

  }

  clear()
  {
    this.results = [];
    this.keyword = null;
  }


  addToCart(product) {
    this.cart._addtocart(product)
  }
}
