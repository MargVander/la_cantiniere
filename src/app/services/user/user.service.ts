import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  setInscription(data: any) {

    // var reqHeader = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjoxLCJhZGRyZXNzIjoiNDMgcnVlIGRlIGxhIFByYWlyaWUiLCJ3YWxsZXQiOjUwLjAwLCJwb3N0YWxDb2RlIjoiNzUwMDAiLCJyZWdpc3RyYXRpb25EYXRlIjoxNTUxNTM2MjQ4MDAwLCJlbWFpbCI6InRvdG9AZ21haWwuY29tIiwiaXNMdW5jaExhZHkiOnRydWUsIm5hbWUiOiJEdXJhbnQiLCJmaXJzdG5hbWUiOiJBbGJlcnQiLCJwaG9uZSI6IjAxNDg1Njc4OTciLCJ0b3duIjoiUGFyaXMiLCJzZXgiOjAsInN0YXR1cyI6MH0sInJvbGVzIjpbIlJPTEVfTFVOQ0hMQURZIiwiUk9MRV9VU0VSIl0sImlzcyI6InNlY3VyZS1hcGkiLCJhdWQiOiJzZWN1cmUtYXBwIiwic3ViIjoidG90b0BnbWFpbC5jb20iLCJleHAiOjE1NzU0OTY4OTd9.qniK5uyzGvrAYkp1ODqQATTpjAc5KElsXefHT0TYD0j7Uk0UQz1XDN40mfzkT1M18bhxrqWE5iXJD8jbl3YQgg'
    // });

    console.log(data)
    this.http.put('http://localhost:8080/lunchtime/user/register/', data)
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      })
  }

  getUser(id) {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjoxLCJhZGRyZXNzIjoiNDMgcnVlIGRlIGxhIFByYWlyaWUiLCJ3YWxsZXQiOjUuOTIsInBvc3RhbENvZGUiOiI3NTAwMCIsInJlZ2lzdHJhdGlvbkRhdGUiOjE1NTE1MzYyNDgwMDAsImVtYWlsIjoidG90b0BnbWFpbC5jb20iLCJpc0x1bmNoTGFkeSI6dHJ1ZSwibmFtZSI6IkR1cmFudCIsImZpcnN0bmFtZSI6Ik1pY2hlbGluZSIsInBob25lIjoiMDE0ODU2Nzg5NyIsInRvd24iOiJEdW5rZXJxdWUiLCJzZXgiOjAsInN0YXR1cyI6MH0sInJvbGVzIjpbIlJPTEVfTFVOQ0hMQURZIiwiUk9MRV9VU0VSIl0sImlzcyI6InNlY3VyZS1hcGkiLCJhdWQiOiJzZWN1cmUtYXBwIiwic3ViIjoidG90b0BnbWFpbC5jb20iLCJleHAiOjE1Nzk1MzIxNDd9.lQZFOSwmxeKUWDK5mS7xXIH1HVrx9XFbfijA-DnJIcPoNM2wyw0IAd8__1Tu_oqxs6YZA9Rif7g1tLPc3ZCnsg'
    });
    return this.http.get(`http://localhost:8080/lunchtime/user/find/${id}`, { headers: reqHeader })
  }

  editUser(id, data: any) {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjoxLCJhZGRyZXNzIjoiNDMgcnVlIGRlIGxhIFByYWlyaWUiLCJ3YWxsZXQiOjUuOTIsInBvc3RhbENvZGUiOiI3NTAwMCIsInJlZ2lzdHJhdGlvbkRhdGUiOjE1NTE1MzYyNDgwMDAsImVtYWlsIjoidG90b0BnbWFpbC5jb20iLCJpc0x1bmNoTGFkeSI6dHJ1ZSwibmFtZSI6IkR1cmFudCIsImZpcnN0bmFtZSI6Ik1pY2hlbGluZSIsInBob25lIjoiMDE0ODU2Nzg5NyIsInRvd24iOiJEdW5rZXJxdWUiLCJzZXgiOjAsInN0YXR1cyI6MH0sInJvbGVzIjpbIlJPTEVfTFVOQ0hMQURZIiwiUk9MRV9VU0VSIl0sImlzcyI6InNlY3VyZS1hcGkiLCJhdWQiOiJzZWN1cmUtYXBwIiwic3ViIjoidG90b0BnbWFpbC5jb20iLCJleHAiOjE1Nzk1MzIxNDd9.lQZFOSwmxeKUWDK5mS7xXIH1HVrx9XFbfijA-DnJIcPoNM2wyw0IAd8__1Tu_oqxs6YZA9Rif7g1tLPc3ZCnsg'
    });
    this.http.patch(`http://localhost:8080/lunchtime/user/update/${id}`, data, { headers: reqHeader })
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      })
  }

  deleteUser(id) {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjoxLCJhZGRyZXNzIjoiNDMgcnVlIGRlIGxhIFByYWlyaWUiLCJ3YWxsZXQiOjUuOTIsInBvc3RhbENvZGUiOiI3NTAwMCIsInJlZ2lzdHJhdGlvbkRhdGUiOjE1NTE1MzYyNDgwMDAsImVtYWlsIjoidG90b0BnbWFpbC5jb20iLCJpc0x1bmNoTGFkeSI6dHJ1ZSwibmFtZSI6IkR1cmFudCIsImZpcnN0bmFtZSI6Ik1pY2hlbGluZSIsInBob25lIjoiMDE0ODU2Nzg5NyIsInRvd24iOiJEdW5rZXJxdWUiLCJzZXgiOjAsInN0YXR1cyI6MH0sInJvbGVzIjpbIlJPTEVfTFVOQ0hMQURZIiwiUk9MRV9VU0VSIl0sImlzcyI6InNlY3VyZS1hcGkiLCJhdWQiOiJzZWN1cmUtYXBwIiwic3ViIjoidG90b0BnbWFpbC5jb20iLCJleHAiOjE1Nzk1MzIxNDd9.lQZFOSwmxeKUWDK5mS7xXIH1HVrx9XFbfijA-DnJIcPoNM2wyw0IAd8__1Tu_oqxs6YZA9Rif7g1tLPc3ZCnsg'
    });
    this.http.delete(`http://localhost:8080/lunchtime/user/delete/${id}`, { headers: reqHeader })
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      })
  }
}
