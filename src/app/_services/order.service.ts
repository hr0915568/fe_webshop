import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {Order} from '../_models/order';
import {OrderProduct} from '../_models/order-product';
import {GuestOrder} from '../_models/GuestOrder';


@Injectable()
export class OrderService {

  constructor(private http: HttpClient) { }

    placeorderAsGuest(order: Order) {

      return this.http.post('http://api.hrwebshop.tk/place-order-asguest', order,
        {
          responseType: 'text',
          withCredentials: true,
          headers: new HttpHeaders()
            .set('Content-type', 'application/json')
        }
      )
    }


  placeorderAsRegisteredUser(order: Order) {

    return this.http.post('http://api.hrwebshop.tk/place-order-registered', order,
      {
        responseType: 'text',
        withCredentials: true,
        headers: new HttpHeaders()
          .set('Content-type', 'application/json')
      }
    )
  }

}
