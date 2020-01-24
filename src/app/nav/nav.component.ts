import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  logged: boolean = false;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.isLoggedIn.subscribe(logged => { console.log(logged); this.logged = logged })
  }

  logOut() {
    this.loginService.logout();
  }

}
