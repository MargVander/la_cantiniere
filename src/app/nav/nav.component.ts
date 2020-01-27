import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  logged: boolean = false;
  AdminLogged: Boolean = false

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.isLoggedIn.subscribe(logged => { this.logged = logged })
    this.loginService.isLoggedAdmin.subscribe(AdminLogged => { this.AdminLogged = AdminLogged })

    console.log(this.AdminLogged)
  }

  logOut() {
    this.loginService.logout();
    console.log(this.AdminLogged)
  }

}
