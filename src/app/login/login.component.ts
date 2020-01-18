import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HTTP_INTERCEPTORS, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http'
import { Observable, observable } from 'rxjs'
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
  userConnected: UserService;

  constructor(fb: FormBuilder, 
    private service:UserService ){

    this.registerForm = fb.group({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }
  ngOnInit() {
  }
  valider() {
this.jl2=''
 this.jl= ''
 const formValue = this.registerForm.value
 const email: string= formValue.value
 const password: string= formValue.value 

   if (this.registerForm.controls.email.invalid){
     this.jl= 'veuillez renseigner une adresse mail'
   }
   if (this.registerForm.controls.password.invalid){

     this.jl2="veuillez renseigner un mot de passe "
   }if (this.registerForm.valid){
     this.service.login(this.registerForm.value)
    } 
  }}