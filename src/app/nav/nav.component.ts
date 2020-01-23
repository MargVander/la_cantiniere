import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  alpha
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.alpha = this.loginService.ok()
  }

  logOut() {
    this.alpha = this.loginService.logout();
  }

}
