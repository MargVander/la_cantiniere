import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login/login.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data;
  @Input() user;

  constructor(private loginService: LoginService, private router: Router) { }

  // récupération de la valeur des inputs

  get email() { return this.loginForm.get('email'); }

  get password() { return this.loginForm.get('password'); }

  loginForm: FormGroup;
  loading: boolean;
  error: string;

  ngOnInit() {
    // construction du formulaire
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.required,
      ]),
    });

  }

  onSubmit() {

    this.loading = true;

    this.loginService.login(this.loginForm.value).subscribe(

      // traitement de la réponse HTTP, en cas d'erreur on affiche
      // l'erreur dans la vue
      user => {

        console.log(user)
        this.loading = false;

        // redirection
        this.router.navigate(['']);
      },
      error => {
        this.error = error;
        // console.log(error, 'ok composant');

        this.loading = false;
      }
    );
  }

}
