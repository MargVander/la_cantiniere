// import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
// import { Injectable, Injector } from '@angular/core';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';
// import { LoginService } from './login/login.service';

// /**
//  * Cette classe va intercepter les requêtes Http
//  * et inclure le jwt dans le header, si il existe
//  */
// @Injectable()

// export class TokenInterceptor implements HttpInterceptor {
//   authService: any;


//   constructor(private injector: Injector) { }

//   intercept(request: HttpRequest<any>, next: HttpHandler) {
//     console.log('gris');

//     if (localStorage.getItem('jwt')) {
//       if (!request.url.includes("localhost")) {
//         let authService = this.injector.get(LoginService);
//         let tokenizedReq = request.clone({
//           setHeaders: {
//             Authorization: `Bearer ${authService.getToken()}`
//           }
//         });
//         return next.handle(tokenizedReq);
//       }
//     }
//     return next.handle(request);
//   }

//   //     if (localStorage.getItem('jwt')) {
//   //         console.log('noir');
//   //         if (request.url.includes("localhost") || request.url.includes("4200")) {
//   //             console.log('rouge');
//   //             request = this.addToken(request, localStorage.getItem('jwt'));
//   //             console.log('orange');
//   //         }
//   //     }

//   //     return next.handle(request);
//   //     /* .pipe(catchError(error => {
//   //      if (error instanceof HttpErrorResponse && error.status === 401) {
//   //        return this.handle401Error(request, next);
//   //      } else {
//   //          console.log('error interceptor')
//   //        return throwError(error);
//   //      }
//   //    }));*/
//   // }

//   // private addToken(request: HttpRequest<any>, token: string) {
//   //     return request.clone({
//   //         setHeaders: {
//   //             Authorization: `Bearer ${token}`,
//   //         }
//   //     });
//   // }
// }