import { Component, OnInit } from '@angular/core';
import {Userprofile} from '../_models/userprofile';
import {tap} from 'rxjs/operators';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {AuthService} from '../_services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: Userprofile = new Userprofile;

  constructor(private http: HttpClient, private auth: AuthService) { }

  ngOnInit() {
    this.getProfile();
  }

  private getProfile()
  {
    this.http.get<Userprofile>('http://api.hrwebshop.tk/profile',  {
      withCredentials: true,
      headers: new HttpHeaders()
        .set('Content-type', 'text/plain')

    }).pipe(
      tap(customers => console.log(`fetched heroes`)),
    ).subscribe(profile => this.profile = profile);
  }

  saveProfile(){
    const body = new HttpParams()
      .set('email', this.profile.email )
      .set('password', this.profile.password )
      .set('firstname', this.profile.firstname )
      .set('lastname', this.profile.lastname )
    ;

    this.http.post('http://api.hrwebshop.tk/profile', body.toString(),
      {
        responseType: 'text',
        withCredentials: true,
        headers: new HttpHeaders()
          .set('Content-type', 'application/x-www-form-urlencoded')
      }
    ).subscribe(
      response => {
        this.auth.updateProfile();
      },
      error => {

      }
    );
  }

}
