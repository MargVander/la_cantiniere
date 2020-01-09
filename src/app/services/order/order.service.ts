import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }


  //Add an order
  addOrder(data: any) {
    this.http.put('http://localhost:8080/lunchtime/order/add', data)
    .subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    })
  }

  //cancel an order
  // cancelOrder() {
  //   this.http.patch('http://localhost:8080/lunchtime/order/cancel/orderId')
  //   .subscribe(data => {
  //     console.log(data);
  //   }, error => {
  //     console.log(error);
  //   })
  // }

  //something with VAT, only LunchLady
  computePrice() {
    return this.http.get('http://localhost:8080/lunchtime/order/computeprice/orderId/constraintId');
  }

  //pay an order
  // payOrder() {
  //   this.http.patch('http://localhost:8080/lunchtime/order/deliverandpay/orderId/constraintId')
  //   .subscribe(data => {
  //     console.log(data);
  //   }, error => {
  //     console.log(error);
  //   })
  // }

  //find one order
  findOrder(id) {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjoxLCJhZGRyZXNzIjoiNDMgcnVlIGRlIGxhIFByYWlyaWUiLCJ3YWxsZXQiOjUwLjAwLCJwb3N0YWxDb2RlIjoiNzUwMDAiLCJyZWdpc3RyYXRpb25EYXRlIjoxNTUxNTM2MjQ4MDAwLCJlbWFpbCI6InRvdG9AZ21haWwuY29tIiwiaXNMdW5jaExhZHkiOnRydWUsIm5hbWUiOiJEdXJhbnQiLCJmaXJzdG5hbWUiOiJBbGJlcnQiLCJwaG9uZSI6IjAxNDg1Njc4OTciLCJ0b3duIjoiUGFyaXMiLCJzZXgiOjAsInN0YXR1cyI6MH0sInJvbGVzIjpbIlJPTEVfTFVOQ0hMQURZIiwiUk9MRV9VU0VSIl0sImlzcyI6InNlY3VyZS1hcGkiLCJhdWQiOiJzZWN1cmUtYXBwIiwic3ViIjoidG90b0BnbWFpbC5jb20iLCJleHAiOjE1Nzg2NTIyMzN9.xNpKsCaok6K6P7fC2AaCxCJwNVsQEE9Rr8-EvUFZN2wE1B8SJv_eanNjMZc5wIzUj2sM9CaiAxcuJeg9WL5UcQ'
    });
    return this.http.get(`http://localhost:8080/lunchtime/order/find/${id}`, { headers: reqHeader});
  }

  //find all orders
  findAllOrders() {


  }

  //Find all orders matching a certain date criteria
  findAllOrdersByDate() {

  }

  //
  findAllOrdersByDateAndUser() {

  }

  //
  findAllOrdersByUser() {

  }

  //update and order
  updateOrder() {

  }

  getPanier() {
    // return this.menuForm;
    // console.log(menuForm);
  }

}
