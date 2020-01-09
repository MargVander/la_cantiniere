import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { UserService } from '../services/user/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  jl: string;
  jl2: string;
  constructor(fb: FormBuilder, private service:UserService ) {
    this.registerForm = fb.group({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required])
    })
  }
  ngOnInit() {
  }
  valider() {
this.jl2=''
 this.jl= ''

   if (this.registerForm.controls.email.invalid){
     this.jl= 'veuillez renseigner une adresse mail'
   }
   if (this.registerForm.controls.password.invalid){

     this.jl2="veuillez renseigner un mot de passe "
   }if (this.registerForm.valid){
     this.service.login(this.registerForm.value)
     console.log('ok')

    }
    console.log(this.registerForm);
  }}


