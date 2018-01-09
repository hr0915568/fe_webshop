import {Component, DoCheck, OnInit} from '@angular/core';
import {AuthService} from '../_services/auth.service';

@Component({
  selector: 'app-loggin-button',
  templateUrl: './loggin-button.component.html',
  styleUrls: ['./loggin-button.component.css']
})
export class LogginButtonComponent implements OnInit, DoCheck {
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

}
