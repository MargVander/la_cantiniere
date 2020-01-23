import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
import * as jwt_decode from 'jwt-decode';

/**
 * Ce service gère :
 * le login de l'utilisateur
 * la gestion de la variable loggedIn
 * qui représente la connexion utilisateur (pour auth guard)
 */


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private router: Router, private userService: UserService) { }

  data: any;
  user: any;

  /**
   * on crée une variable loggedIn qui va vérifier que l'utilisateur est
   * connecté
   */
  private loggedIn = new BehaviorSubject<boolean>(this.tokenAvailable());

  logedd = new BehaviorSubject("")

  ok() {
    return this.logedd
  }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  /**
 * cette fonction permet de garder loogedIn à true
 * tant que le jwt est en mémoire
 */
  private tokenAvailable(): boolean {
    return !!localStorage.getItem('Authorization');

  }

  /**
 *
 * @param user
 * méthode login utilisateur
 */
  login(user: any): Observable<HttpResponse<Object>> {


    const url = 'http://localhost:8080/lunchtime/login';
    return this.http.post<HttpResponse<Object>>(url, user, { observe: 'response' })

      .pipe(tap(res => {
        let tokenAuth = res.headers.get('Authorization');
        console.log(res.headers.get('Authorization'))
        let decode = jwt_decode(res.headers.get('Authorization'))
        console.log(decode)
        localStorage.setItem('Authorization', tokenAuth);

        console.log(res)
        if (res) {

          // this.log.next = 1;
          /**
           * si on reçoit une réponse du serveur on enregistre le jwt et
           * on passe loggedIn à true
           */
          this.logedd.next('ok');
          console.log(this.logedd);
          this.loggedIn.next(true);
        }
      }),

        catchError(this.handleLoginError),
      );
  }

  getToken() {
    return localStorage.getItem('Authorization')
  }

  /**
   * Deconnexion
   */
  logout() {
    console.log('ok');

    this.logedd.next('ok');
    console.log(this.logedd)

    this.loggedIn.next(false);
    localStorage.removeItem('Authorization');
    console.log(localStorage.removeItem('Authorization'));

    this.router.navigate(['']);

    return this.logedd
  }

  /**
  * Traitement des erreurs HTTP
  */

  /**
   *
   * @param error
   * traitement des erreurs login
   */
  handleLoginError(error) {

    let errorMessage = '';
    errorMessage = error.error.message;
    return throwError(errorMessage);

  }

}

