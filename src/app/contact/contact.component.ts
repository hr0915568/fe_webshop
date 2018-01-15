import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {AlertService} from '../_services/alert.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name: string;
  email: string;
  message: string;
  phone: string;

  constructor(private http: HttpClient, private alertService: AlertService) { }

  ngOnInit() {
  }

  sendMessage()
  {
    const body = new HttpParams()
      .set('email', this.email)
      .set('message', this.message)
      .set('phone', this.phone)
      .set('name', this.name);

    return this.http.post('http://api.hrwebshop.tk/contact', body.toString(),
      {
        responseType: 'text',
        withCredentials: true,
        headers: new HttpHeaders()
          .set('Content-type', 'application/x-www-form-urlencoded')
      }
    ).subscribe(
      response => {
        //clear object
        this.alertService.success("Your message is sent.");
        this.email = null;
        this.name = null;
        this.message = null;
      }
    );
  }
}
