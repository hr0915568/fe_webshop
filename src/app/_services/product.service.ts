import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './../message.service';
import { Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Product} from './../_models/product';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProductService {

 // URL to web api
  private productsUrl = 'api/products';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }




  /** GET hero by id. Will 404 if id not found */
  getProduct(productid: number): Observable<Product> {
    // const url = `${this.productsUrl}/${productid}`;
    return this.http.get<Product>('http://api.hrwebshop.tk/product/' + productid).pipe(
      tap(_ => this.log(`fetched products id=${productid}`)),
      catchError(this.handleError<Product>(`getProduct id=${productid}`))
    );
  }

  getHeroNo404<Data>(categoryid: number): Observable<Product> {
    const url = `${this.productsUrl}/?categoryid=${categoryid}`;
    return this.http.get<Product[]>(url)
      .pipe(
        map(products => products[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} hero id=${categoryid}`);
        }),
        catchError(this.handleError<Product>(`getHero id=${categoryid}`))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error);
      // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }
}
