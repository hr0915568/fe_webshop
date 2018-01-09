import {Component, DoCheck, OnInit} from '@angular/core';
import {AuthService} from '../_services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, DoCheck {
  credential: any = {};

  constructor(private auth: AuthService,
              private router: Router,) { }

  ngOnInit() {
  }

  ngDoCheck()
  {

  }

  login()
  {
    this.auth.login(this.credential.username, this.credential.password)
      .subscribe(
        data => {
          localStorage.setItem('loggedIn', '1');
          this.router.navigate(['myaccount']);
        },
        error => {
          this.router.navigate(['login']);
        });
  }

}
