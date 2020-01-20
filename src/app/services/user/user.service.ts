import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { HeaderService } from '../header/header.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjoxLCJhZGRyZXNzIjoiNDMgcnVlIGRlIGxhIFByYWlyaWUiLCJ3YWxsZXQiOjEwMC4wMCwicG9zdGFsQ29kZSI6Ijc1MDAwIiwicmVnaXN0cmF0aW9uRGF0ZSI6MTU1MTUzNjI0ODAwMCwiZW1haWwiOiJ0b3RvQGdtYWlsLmNvbSIsImlzTHVuY2hMYWR5Ijp0cnVlLCJuYW1lIjoiRHVyYW50IiwiZmlyc3RuYW1lIjoiQWxiZXJ0IiwicGhvbmUiOiIwMTQ4NTY3ODk3IiwidG93biI6IlBhcmlzIiwic2V4IjowLCJzdGF0dXMiOjB9LCJyb2xlcyI6WyJST0xFX0xVTkNITEFEWSIsIlJPTEVfVVNFUiJdLCJpc3MiOiJzZWN1cmUtYXBpIiwiYXVkIjoic2VjdXJlLWFwcCIsInN1YiI6InRvdG9AZ21haWwuY29tIiwiZXhwIjoxNTc5MjYyNTk3fQ.gCCzty1hlkORf_KudKjpHpg83LKlrQQWsPlpjAWhTY6G6Q1Kq--4bStK9Mz5KPqCj7AU33vtEUxS-oq9LEj_vw'
  });

  constructor(private http: HttpClient, private headerService: HeaderService) { }

  setInscription(data: any) {

    console.log(data)
    let result = this.http.put('http://localhost:8080/lunchtime/user/register/', data)
    return result;
  }

  getUsers(): Observable<any> {

    return this.http.get('http://localhost:8080/lunchtime/user/findall', { headers: this.reqHeader });

  }

  getUser(id: number): Observable<any> {

    return this.http.get('http://localhost:8080/lunchtime/user/find/' + id, { headers: this.reqHeader });


  }

  setActivation(id: number) {

    let obs: Observable<any>

    obs = this.http.patch('http://localhost:8080/lunchtime/user/activate/' + id, null, { headers: this.reqHeader })
    console.log(obs)
    return obs;
  }

  setDesactivation(id: number) {

    let obs: Observable<any>

    obs = this.http.patch('http://localhost:8080/lunchtime/user/deactivate/' + id, null, { headers: this.reqHeader })
    console.log(obs)
    return obs;

  }

  setDroit(id: number) {

    this.http.patch('http://localhost:8080/lunchtime/user/update/' + id, null, { headers: this.reqHeader })

  }

  adminUpdate(id: number, content: any) {

    let obs: Observable<any>
    console.log(content)


    console.log(id);
    obs = this.http.patch('http://localhost:8080/lunchtime/user/update/' + id, content, { headers: this.reqHeader })
    console.log(obs);
    return obs;
  }

  walletUpdate(id: number, content: number) {

    let obs: Observable<any>
    console.log(content)

    obs = this.http.post('http://localhost:8080/lunchtime/user/credit/' + id + '?amount=' + content, null, { headers: this.reqHeader })
    console.log(obs)
    return obs;
  }

}
