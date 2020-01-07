import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private souscription: Subscription
  public users: any
  constructor(private UserService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.souscription = this.UserService.getUsers()
      .subscribe(
        resp => {
          this.users = resp;
          console.log(this.users);

        }
      )
  }
}
