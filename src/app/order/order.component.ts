import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../services/order/order.service'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  id: any = localStorage.getItem('id');
  orders: any;
  private souscription: Subscription;
  price: any;
  prices = [];


  constructor(private route: ActivatedRoute, private orderService: OrderService) {

  }

  ngOnInit() {
    this.getOrders()
  }

  getOrders() {
    this.souscription = this.orderService.getOrders(this.id)
      .subscribe(
        resp => {
          this.orders = resp;
          console.log(this.orders);
          this.getAllPrices()
        }
      )
  }

  cancelOrder(orderId) {

    console.log(orderId)
    this.orderService.cancelOrder(orderId)
      .subscribe(data => {
        console.log(data);
        this.getOrders();
      })
  }

  computePrice(orderId) {
    this.souscription = this.orderService.computePrice(orderId)
      .subscribe(
        resp => {
          this.price = resp;
          this.price = this.price.priceVAT
          this.prices.push(this.price)
          console.log(this.prices);


        }
      )
  }

  getAllPrices() {
    this.orders.forEach(order => {
      this.computePrice(order.id)
    });

  }

}
