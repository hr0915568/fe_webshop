import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';

@Injectable()
export class RegisterationService {

  constructor(private http: HttpClient) { }

  register(email: string, firstname: string, lastname: string, password: string) {
    const body = new HttpParams()
      .set('email', email)
      .set('password', password)
      .set('firstname', firstname)
      .set('lastname', lastname)
    ;

    return this.http.post('http://api.hrwebshop.tk/register', body.toString(),
      {
        responseType: 'text',
        withCredentials: true,
        headers: new HttpHeaders()
          .set('Content-type', 'application/x-www-form-urlencoded')
      }
    )
  }

}
