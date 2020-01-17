import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { UserService } from '../services/user/user.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
=======
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user/user.service'
import { Subscription } from 'rxjs'
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms"
import {Router} from "@angular/router"

>>>>>>> dev

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
<<<<<<< HEAD

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
=======
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


>>>>>>> dev
  }

}
