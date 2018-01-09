import {Component, DoCheck, OnInit} from '@angular/core';
import {AuthService} from '../_services/auth.service';

@Component({
  selector: 'app-welcome-text',
  templateUrl: './welcome-text.component.html',
  styleUrls: ['./welcome-text.component.css']
})
export class WelcomeTextComponent implements OnInit, DoCheck {

  loggedIn: boolean = false;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  ngDoCheck()
  {
    if(this.loggedIn)
    {
      return;
    }

    if(this.auth.loggedIn) {
      this.loggedIn = true;
    }
  }

  get name()
  {
    if(typeof this.auth.profile == 'undefined') {
      return '';
    }

    return this.auth.profile.firstname;
  }
}
