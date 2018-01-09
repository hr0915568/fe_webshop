import { Component, OnInit, Input } from '@angular/core';
import {CartService} from './../_services/cart.service';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.css']
})
export class CartButtonComponent implements OnInit {
  cnt:number;
  constructor(private cart: CartService) { }

  ngOnInit() {
    this.getCartCount();
  }


  @Input() getCartCount() {
    return this.cart._getCartNumber();
  }
}
