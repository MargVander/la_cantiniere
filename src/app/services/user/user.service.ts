import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
//import { HeaderService } from '../header/header.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // reqHeader = new HttpHeaders({
  //   'Content-Type': 'application/json',
  //   'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjoxLCJhZGRyZXNzIjoiNDMgcnVlIGRlIGxhIFByYWlyaWUiLCJ3YWxsZXQiOjUwLjAwLCJwb3N0YWxDb2RlIjoiNzUwMDAiLCJyZWdpc3RyYXRpb25EYXRlIjoxNTUxNTM2MjQ4MDAwLCJlbWFpbCI6InRvdG9AZ21haWwuY29tIiwiaXNMdW5jaExhZHkiOnRydWUsIm5hbWUiOiJEdXJhbnQiLCJmaXJzdG5hbWUiOiJBbGJlcnQiLCJwaG9uZSI6IjAxNDg1Njc4OTciLCJ0b3duIjoiUGFyaXMiLCJzZXgiOjAsInN0YXR1cyI6MH0sInJvbGVzIjpbIlJPTEVfTFVOQ0hMQURZIiwiUk9MRV9VU0VSIl0sImlzcyI6InNlY3VyZS1hcGkiLCJhdWQiOiJzZWN1cmUtYXBwIiwic3ViIjoidG90b0BnbWFpbC5jb20iLCJleHAiOjE1Nzk2ODUzOTV9.YHmv5eQe2qJD02dMKnn69MaO3tP0gSa5OaP88n2d5ru8HkqHrU1mX9sun8yXv9ezTItBWTRPjJECr4on50fNew'
  // });

  constructor(private http: HttpClient) { }

  setInscription(data: any) {

    console.log(data)
    let result = this.http.put('http://localhost:8080/lunchtime/user/register/', data)
    return result;
  }

  getUsers(): Observable<any> {

    return this.http.get('http://localhost:8080/lunchtime/user/findall');

  }

  getUser(id: number): Observable<any> {

    return this.http.get('http://localhost:8080/lunchtime/user/find/' + id);


  }

  setActivation(id: number) {

    let obs: Observable<any>

    obs = this.http.patch('http://localhost:8080/lunchtime/user/activate/' + id, null)
    console.log(obs)
    return obs;
  }

  setDesactivation(id: number) {

    let obs: Observable<any>

    obs = this.http.patch('http://localhost:8080/lunchtime/user/deactivate/' + id, null)
    console.log(obs)
    return obs;

  }

  setDroit(id: number) {

    this.http.patch('http://localhost:8080/lunchtime/user/update/' + id, null)

  }

  adminUpdate(id: number, content: any) {

    let obs: Observable<any>
    console.log(content)


    console.log(id);
    obs = this.http.patch('http://localhost:8080/lunchtime/user/update/' + id, content)
    console.log(obs);
    return obs;
  }

  walletUpdate(id: number, content: number) {

    let obs: Observable<any>
    console.log(content)

    obs = this.http.post('http://localhost:8080/lunchtime/user/credit/' + id + '?amount=' + content, null)
    console.log(obs)
    return obs;
  }

}
