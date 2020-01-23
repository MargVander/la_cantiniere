import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjoxLCJhZGRyZXNzIjoiNDMgcnVlIGRlIGxhIFByYWlyaWUiLCJ3YWxsZXQiOjUuOTIsInBvc3RhbENvZGUiOiI3NTAwMCIsInJlZ2lzdHJhdGlvbkRhdGUiOjE1NTE1MzYyNDgwMDAsImVtYWlsIjoidG90b0BnbWFpbC5jb20iLCJpc0x1bmNoTGFkeSI6dHJ1ZSwibmFtZSI6IkR1cmFudCIsImZpcnN0bmFtZSI6Ik1pY2hlbGluZSIsInBob25lIjoiMDE0ODU2Nzg5NyIsInRvd24iOiJEdW5rZXJxdWUiLCJzZXgiOjAsInN0YXR1cyI6MH0sInJvbGVzIjpbIlJPTEVfTFVOQ0hMQURZIiwiUk9MRV9VU0VSIl0sImlzcyI6InNlY3VyZS1hcGkiLCJhdWQiOiJzZWN1cmUtYXBwIiwic3ViIjoidG90b0BnbWFpbC5jb20iLCJleHAiOjE1Nzk2Mjg1Mzh9.Bi1zoi1mgx9d3K5_leqYb6Sme2M62D58HAbRjOqf8hHGqxiLqVQc1y5NExCmIDXMLT6f0_i3aJYBtxfuX6uTJQ'
  });

  constructor(private http: HttpClient) { }

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

  editUser(id, data: any) {
    this.http.patch(`http://localhost:8080/lunchtime/user/update/${id}`, data, { headers: this.reqHeader })
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      })
  }

  deleteUser(id) {
    this.http.delete(`http://localhost:8080/lunchtime/user/delete/${id}`, { headers: this.reqHeader })
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      })
  }
}
