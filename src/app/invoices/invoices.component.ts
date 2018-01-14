import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {Product} from '../_models/product';
import {Invoice} from '../_models/invoice';
import {Userprofile} from '../_models/userprofile';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {

  invoices: Invoice[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getInvoices().subscribe(
      data => {
        this.invoices = data;
      }
    );
  }

  getInvoices (): Observable<Invoice[]> {
   return this.http.get<Invoice[]>('http://api.hrwebshop.tk/invoices',  {
      withCredentials: true,
      headers: new HttpHeaders()
        .set('Content-type', 'text/plain')

    })
  }
}
