import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  private souscription: Subscription
  private user: any
  id: number

  constructor(private userService: UserService, private location: Location, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getUser()
  }

  getUser() {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.souscription = this.userService.getUser(this.id)
      .subscribe(
        resp => {
          this.user = resp;
          console.log(this.user);

        }
      )
  }

}
