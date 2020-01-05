import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { first } from 'rxjs/operators';
import {AlertService, AuthenticationService} from '../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Component({templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit {
loginForm: FormGroup;
loading = false;
submitted = false;
returnUrl: string;
  constructor(
  private  formBuilder: FormBuilder,
  private route: ActivatedRoute,
  private router: Router,
  private  authenticationService: AuthenticationService,
  private alertService: AlertService
  ) {
      if (this.authenticationService . currentUserValue ) {this.router.navigate(['/']);
      }
  }
  ngOnInit() {
  this.loginForm = this.formBuilder.group({username:['',Validators.required],
  password: ['', Validators.required]});
  this.returnUrl =
  this.route.snapshot.queryParams ['returnUrl'] || '/';
  }
  get f() { return this.loginForm.controls; }
  onSubmit() {
    this.submitted = true;
  }
}
