import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../_services/auth.service";

@Component({
  selector: 'app-site-layout',
  templateUrl: './myaccount-layout.component.html',
  styleUrls: ['./myaccount-layout.component.css']
})
export class MyaccountLayoutComponent implements OnInit {
  bodyClass: any = '';
  constructor(private authenticationService: AuthService,  private router: Router) { }


  ngOnInit() {
    document.body.classList.remove('cyan');
  }

  logout()
  {
    this.authenticationService.logout();
    this.router.navigate(['/']);

  }

  public get loggedIn(): boolean {
    return this.authenticationService.loggedIn;
  }

}
