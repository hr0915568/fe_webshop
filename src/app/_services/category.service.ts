import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Category } from '../_models/category';
import { MessageService } from '../message.service';
import {Product} from '../_models/product';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CategoryService {

  private heroesUrl = 'api/categories';  // URL to web api

  constructor(
    private http: HttpClient) { }

  /** GET heroes from the server */
  getCategories (): Observable<Category[]> {
    return this.http.get<Category[]>('http://api.hrwebshop.tk/categories')
      .pipe(
        catchError(this.handleError('getCategories', []))
      );
  }


  /** GET hero by id. Will 404 if id not found */
  getHero(id: number): Observable<Category> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Category>(url).pipe(
      catchError(this.handleError<Category>(`getHero id=${id}`))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** GET heroes from the server */
  getProductsOfCategory (categoryId: number): Observable<Product[]> {
    return this.http.get<Product[]>('http://api.hrwebshop.tk/category/' + categoryId)
      .pipe(
        catchError(this.handleError('getCategories', []))
      );
  }
}
