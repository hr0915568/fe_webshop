import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';


@Injectable()
export class OrderService {

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

}
