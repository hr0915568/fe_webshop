import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {catchError, tap,map} from 'rxjs/operators';
import {Order} from './../_models/order';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { of } from 'rxjs/observable/of';
import { MessageService } from './../message.service';

@Injectable()
export class OrderService {

  order : Order;

  constructor(private http: HttpClient) { }
  
    placeorder(addressStreet: string, addressNumber: string, addressNumberAdd: string, postalCode: string) {
      const body = new HttpParams()
        .set('addressStreet', addressStreet)
        .set('addressNumber', addressNumber)
        .set('addressNumberAdd', addressNumberAdd)
        .set('postalCode', postalCode)
      ;
  
      return this.http.post('http://api.hrwebshop.tk/orderproduct', body.toString(),
        {
          responseType: 'text',
          withCredentials: true,
          headers: new HttpHeaders()
            .set('Content-type', 'application/x-www-form-urlencoded')
        }
      )
    }

    getOrderModel(orderid: number) {
      // const url = `${this.productsUrl}/${productid}`;
      return this.http.get<Order>('http://api.hrwebshop.tk/order/' + orderid).pipe(
        tap(_ => console.log(`fetched orders id=${orderid}`))
      )
      .subscribe(order => this.order = order);
      ;
    }

    getOrderModel1(orderid: number): Observable<Order> {
      // const url = `${this.productsUrl}/${productid}`;
      return this.http.get<Order>('http://api.hrwebshop.tk/order/' + orderid).pipe(
        tap(_ => console.log(`fetched orders id=${orderid}`)),
        catchError(this.handleError<Order>(`getOrderModel id=${orderid}`))
        
      );
    }


    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
  
        // TODO: send the error to remote logging infrastructure
        console.error(error);
        // log to console instead
  
        // TODO: better job of transforming error for user consumption
        console.log(`${operation} failed: ${error.message}`);
  
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
  

}
