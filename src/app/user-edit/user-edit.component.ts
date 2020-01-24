import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user/user.service'
import { Subscription } from 'rxjs'
=======
import { UserService } from '../services/user/user.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
>>>>>>> f9bee196d4ac7ee262599bcbc13f623407a32c34
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms"
import {Router} from "@angular/router"


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  id:number;
  public user: any;
  private souscription: Subscription;
  userForm: FormGroup

  constructor(private route: ActivatedRoute, private userService: UserService, private formBuilder: FormBuilder, private router: Router) { 
    this.route.params.subscribe(param=> this.id = param.id)

  }

  ngOnInit() {
    this.getUser(this.id)
    
  }

  getUser(id){
    this.souscription = this.userService.getUser(id)
    .subscribe(
      resp => {
        this.user = resp;
        console.log(this.user);
        this.userForm = this.formBuilder.group({
          firstname: [this.user.firstname, Validators.required],
          name: [this.user.name], 
          image: [this.user.image], 
          email: [this.user.email, Validators.required], 
          password: ['', Validators.required],
          sex: [this.user.sex, Validators.required],
          phone: [this.user.phone, Validators.required],
          address: [this.user.address, Validators.required],
          postalCode: [this.user.postalCode, Validators.required],
          town: [this.user.town, Validators.required],
        });
      }
    )    
  }

  onSubmit() {
    this.userForm.value["isLunchLady"] = this.user.isLunchLady;
    this.userForm.value["sex"] = this.user.sex;
    this.userService.editUser(this.id, this.userForm.value)
    this.router.navigate([`/profil/${this.user.id}`])


<<<<<<< HEAD
=======
  }

  deleteAccount(id){
    this.user.firstname = "xxxxxx"
    this.user.name = "xxxxxx"
    this.user.phone = 1234567890
    this.user.address = "xxxxxxxxxx"
    this.user.town = "xxxxxxxxxx"
    this.user.password = "xxxxxx"
    this.userService.editUser(id, this.user)
    this.userService.deleteUser(id)
    
>>>>>>> f9bee196d4ac7ee262599bcbc13f623407a32c34
  }

}
