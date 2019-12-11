import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  addIngredient(data: any) {
    console.log(data);
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjoxLCJhZGRyZXNzIjoiNDMgcnVlIGRlIGxhIFByYWlyaWUiLCJ3YWxsZXQiOjUwLjAwLCJwb3N0YWxDb2RlIjoiNzUwMDAiLCJyZWdpc3RyYXRpb25EYXRlIjoxNTUxNTM2MjQ4MDAwLCJlbWFpbCI6InRvdG9AZ21haWwuY29tIiwiaXNMdW5jaExhZHkiOnRydWUsIm5hbWUiOiJEdXJhbnQiLCJmaXJzdG5hbWUiOiJBbGJlcnQiLCJwaG9uZSI6IjAxNDg1Njc4OTciLCJ0b3duIjoiUGFyaXMiLCJzZXgiOjAsInN0YXR1cyI6MH0sInJvbGVzIjpbIlJPTEVfTFVOQ0hMQURZIiwiUk9MRV9VU0VSIl0sImlzcyI6InNlY3VyZS1hcGkiLCJhdWQiOiJzZWN1cmUtYXBwIiwic3ViIjoidG90b0BnbWFpbC5jb20iLCJleHAiOjE1NzU0OTY4OTd9.qniK5uyzGvrAYkp1ODqQATTpjAc5KElsXefHT0TYD0j7Uk0UQz1XDN40mfzkT1M18bhxrqWE5iXJD8jbl3YQgg'
   });
    this.http.put('http://localhost:8080/lunchtime/ingredient/add', data, { headers: reqHeader })
    .subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
      
    })
    
  }

  getIngredients() {
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjoxLCJhZGRyZXNzIjoiNDMgcnVlIGRlIGxhIFByYWlyaWUiLCJ3YWxsZXQiOjUwLjAwLCJwb3N0YWxDb2RlIjoiNzUwMDAiLCJyZWdpc3RyYXRpb25EYXRlIjoxNTUxNTM2MjQ4MDAwLCJlbWFpbCI6InRvdG9AZ21haWwuY29tIiwiaXNMdW5jaExhZHkiOnRydWUsIm5hbWUiOiJEdXJhbnQiLCJmaXJzdG5hbWUiOiJBbGJlcnQiLCJwaG9uZSI6IjAxNDg1Njc4OTciLCJ0b3duIjoiUGFyaXMiLCJzZXgiOjAsInN0YXR1cyI6MH0sInJvbGVzIjpbIlJPTEVfTFVOQ0hMQURZIiwiUk9MRV9VU0VSIl0sImlzcyI6InNlY3VyZS1hcGkiLCJhdWQiOiJzZWN1cmUtYXBwIiwic3ViIjoidG90b0BnbWFpbC5jb20iLCJleHAiOjE1NzYxNzM4MjB9.Y6r49hzcHSkOZeXvHpki-U8YJ7XQLI-WMZNu3Xq2M76grl4CM-Uj6MJTe5HPSijyj6hbw-joOldEQTKU0t2Bww'
   });
   return this.http.get('http://localhost:8080/lunchtime/ingredient/findall', { headers: reqHeader })
  }

  addMeal(data: any) {
    console.log(data);
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjoxLCJhZGRyZXNzIjoiNDMgcnVlIGRlIGxhIFByYWlyaWUiLCJ3YWxsZXQiOjUwLjAwLCJwb3N0YWxDb2RlIjoiNzUwMDAiLCJyZWdpc3RyYXRpb25EYXRlIjoxNTUxNTM2MjQ4MDAwLCJlbWFpbCI6InRvdG9AZ21haWwuY29tIiwiaXNMdW5jaExhZHkiOnRydWUsIm5hbWUiOiJEdXJhbnQiLCJmaXJzdG5hbWUiOiJBbGJlcnQiLCJwaG9uZSI6IjAxNDg1Njc4OTciLCJ0b3duIjoiUGFyaXMiLCJzZXgiOjAsInN0YXR1cyI6MH0sInJvbGVzIjpbIlJPTEVfTFVOQ0hMQURZIiwiUk9MRV9VU0VSIl0sImlzcyI6InNlY3VyZS1hcGkiLCJhdWQiOiJzZWN1cmUtYXBwIiwic3ViIjoidG90b0BnbWFpbC5jb20iLCJleHAiOjE1NzYxNzM4MjB9.Y6r49hzcHSkOZeXvHpki-U8YJ7XQLI-WMZNu3Xq2M76grl4CM-Uj6MJTe5HPSijyj6hbw-joOldEQTKU0t2Bww'
   });
    this.http.put('http://localhost:8080/lunchtime/meal/add', data, { headers: reqHeader })
    .subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
      
    })
    
  }

}

// addTask(data: any){
//   this.http.post(environment.url, data)
//       .subscribe(data => {
//         console.log(data);
//         this.router.navigate(['show']);
//       }, error => {
//         console.log(error);
//       });
// }