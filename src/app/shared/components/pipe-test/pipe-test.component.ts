import { Component } from '@angular/core';
import { OrderStatusPipe } from '../../pipes/order-status.pipe';

export interface Order {
  orderStatus: number; // Submitted 100, 200: Invoide, 300:Shipped
  orderDate: Date;
  customerFirstName: string;
  customerLastName: string;
  orderTotal: number;
  currency: string;
}

@Component({
  selector: 'app-pipe-test',
  templateUrl: './pipe-test.component.html',
  styleUrls: ['./pipe-test.component.scss'],
})
export class PipeTestComponent {
  // veri transform işlemlerini pipelar ile yapıyoruz.

  order: Order = {
    orderDate: new Date(), // 11.10.2023, JS 11 10 2023 Cumartesi GMT + 3.0
    customerFirstName: 'ali', // Ali ali can
    customerLastName: 'can', // CAN
    orderTotal: 1260, // 1,260 $ // 1260$
    currency: 'TRY',
    orderStatus: 100,
  };

  statusText: string = '';

  /**
   *
   */
  constructor(private orderStatusPipe: OrderStatusPipe) {
    this.statusText = this.orderStatusPipe.transform(this.order.orderStatus);
  }
}
