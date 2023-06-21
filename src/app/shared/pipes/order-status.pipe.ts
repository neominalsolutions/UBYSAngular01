import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderStatus',
})
export class OrderStatusPipe implements PipeTransform {
  transform(value: number): string {
    switch (value) {
      case 100:
        return 'Submitted';
      case 200:
        return 'Invoiced';
      case 300:
        return 'Shipped';
      default:
        return '';
    }
  }
}
