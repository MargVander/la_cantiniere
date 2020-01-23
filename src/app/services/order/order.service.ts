import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HeaderService } from '../header/header.service';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  httpOptions = this.headerService.headerBuilder();


  constructor(private http: HttpClient, private headerService: HeaderService) { }

  getConstraint() {
    return this.http.get(`http://localhost:8080/lunchtime/constraint/find/1`)
  }

  editConstraint(data) {

    this.http.patch(`http://localhost:8080/lunchtime/constraint/update/1`, data, this.httpOptions)
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      })
  }

  getOrdersByDay(day, dayAfter, status) {

    return this.http.get(`http://localhost:8080/lunchtime/order/findallbetweendateinstatus?beginDate=${day}&endDate=${dayAfter}&status=${status}`, this.httpOptions)
  }

  getOrders(id) {

    return this.http.get(`http://localhost:8080/lunchtime/order/findallforusertoday/${id}`, this.httpOptions)
  }

  payOrder(id) {

    this.http.patch(`http://localhost:8080/lunchtime/order/deliverandpay/${id}/1`, {}, this.httpOptions)
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
        if (error.status === 412) {
          alert("L'utilisateur n'a pas assez d'argent")
        }
      })
  }

  cancelOrder(id) {

    this.http.patch(`http://localhost:8080/lunchtime/order/cancel/${id}`, {}, this.httpOptions)
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      })
  }

  computePrice(orderId) {

    return this.http.get(`http://localhost:8080/lunchtime/order/computeprice/${orderId}/1`, this.httpOptions)
  }
}

