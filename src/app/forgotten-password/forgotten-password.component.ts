import { Component, OnInit } from '@angular/core';
import {AuthService} from '../_services/auth.service';
import {Router} from '@angular/router';
import {AlertService} from '../_services/alert.service';

@Component({
  selector: 'app-forgotten-password',
  templateUrl: './forgotten-password.component.html',
  styleUrls: ['./forgotten-password.component.css']
})
export class ForgottenPasswordComponent implements OnInit {

  username: string;

  constructor(private auth: AuthService,
              private router: Router, private alertService: AlertService) { }

  ngOnInit() {
  }

  submit() {
    this.auth.forgottenPassword(this.username)
      .subscribe(
        data => {
          this.alertService.success("Your login credentials is sent to your mail box", true);
          this.router.navigate(['login']);
        },
        error => {
          this.router.navigate(['login']);
        });
  }

}
