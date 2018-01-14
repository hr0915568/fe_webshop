import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {RequestOptions} from "@angular/http";
import {Userprofile} from '../_models/userprofile';
import {catchError, tap} from 'rxjs/operators';

@Injectable()
export class AuthService {

  // Create a stream of logged in status to communicate throughout app
  loggedIn: boolean = false;
  loggedIn$ = new BehaviorSubject<boolean>(this.loggedIn);
  profile: Userprofile;

  constructor(private router: Router, private http: HttpClient) {
    // If authenticated, set local profile property and update login status subject
    if (this.authenticated || localStorage.getItem('loggedIn')) {
      this.setLoggedIn(true);
    }
  }

  setLoggedIn(value: boolean) {
    // Update login status subject
    this.loggedIn$.next(value);
    this.loggedIn = value;
    this.getProfile();
  }

  login(username: string, password: string) {

    const body = new HttpParams()
      .set('email', username)
      .set('password', password);

    return this.http.post('http://api.hrwebshop.tk/login', body.toString(),
      {
        responseType: 'text',
        withCredentials: true,
        headers: new HttpHeaders()
          .set('Content-type', 'application/x-www-form-urlencoded')
      }
      )
      .map((response) => {
        localStorage.setItem('loggedIn', '1');
        this.loggedIn = true;
        this.getProfile();
      });

  }

  handleAuth() {
  }

  updateProfile() {
    this.getProfile();
  }

  private getProfile()
  {
    this.http.get<Userprofile>('http://api.hrwebshop.tk/profile',  {
      withCredentials: true,
      headers: new HttpHeaders()
        .set('Content-type', 'text/plain')

    }).pipe(
      tap(customers => console.log(`succes`)),
    ).subscribe(profile => this.profile = profile);
  }

  private _setSession(authResult, profile) {
    // Save session data and update login status subject
    localStorage.setItem('token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('profile', JSON.stringify(profile));
    this.setLoggedIn(true);
  }

  relogin() {
    if (localStorage.getItem('loggedIn')) {
      this.loggedIn = true;
    }

    return this.loggedIn;
  }

  logout() {
    // localStorage.clear();
    localStorage.removeItem('loggedIn');
    console.log('cleared');
    this.setLoggedIn(false);
  }

  get authenticated() {

    return this.loggedIn;
  }

  isLoggedIn()
  {
    return this.loggedIn == true;
  }

  forgottenPassword(username)
  {
    const body = new HttpParams()
      .set('email', username);

    return this.http.post('http://api.hrwebshop.tk/forgotten-password', body.toString(),
      {
        responseType: 'text',
        withCredentials: true,
        headers: new HttpHeaders()
          .set('Content-type', 'application/x-www-form-urlencoded')
      }
    );

  }



}
