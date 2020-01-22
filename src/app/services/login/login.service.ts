import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
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

  decode: any
  data: any;
  user: any;

  /**
   * on crée une variable loggedIn qui va vérifier que l'utilisateur est
   * connecté
   */
  // private loggedIn = new BehaviorSubject<boolean>(this.tokenAvailable());


  // get isLoggedIn() {
  //   return this.loggedIn.asObservable();
  // }

  /**
 * cette fonction permet de garder loogedIn à true
 * tant que le jwt est en mémoire
 */
  // private tokenAvailable(): boolean {
  //   return !!localStorage.getItem('jwt');

  // }

  /**
 *
 * @param user
 * méthode login utilisateur
 */
  login(user: any): Observable<HttpResponse<Object>> {


    const url = 'http://localhost:8080/lunchtime/login';
    return this.http.post<HttpResponse<Object>>(url, user, { observe: 'response' })

      .pipe(tap(res => {
        console.log(res.headers.get('Authorization'))
        let decode = jwt_decode(res.headers.get('Authorization'))
        console.log(decode)

        //     // if (data) {
        //     //   /**
        //     //    * si on reçoit une réponse du serveur on enregistre le jwt et
        //     //    * on passe loggedIn à true
        //     //    */
        //     //   console.log(data);
        //     //   localStorage.setItem('jwt', data.token);
        //     //   this.loggedIn.next(true);

        //     // }
      }),

        // catchError(this.handleLoginError),
        // );
      )
  }

  loggedIn() {
    return !!localStorage.getItem('jwt')
  }

  getToken() {
    return localStorage.getItem('jwt')
  }



  /**
   * Deconnexion
   */
  logout() {
    //this.loggedIn.next(false);
    localStorage.removeItem('jwt');
    this.router.navigate(['/home']);
  }

  /**
 * Traitement des erreurs HTTP
 */

  /**
   *
   * @param error
   * traitement des erreurs login
   */
  // handleLoginError(error) {

  //   let errorMessage = '';
  //   errorMessage = error.error.message;
  //   return throwError(errorMessage);

  // }

}

