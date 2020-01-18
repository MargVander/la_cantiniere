import { Injectable, Injector} from '@angular/core';
import {  HttpInterceptor } from'@angular/common/http';
import{UserService}from './services/user/user.service';
import { HttpRequest, HttpHandler, HttpEvent,  } from '@angular/common/http';
import { Observable } from 'rxjs';

import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TokenInterceptorService implements HttpInterceptor {

  constructor(private authentificationService: UserService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    
      request = request.clone({
          withCredentials: true
      });

      return next.handle(request);
  }

}
