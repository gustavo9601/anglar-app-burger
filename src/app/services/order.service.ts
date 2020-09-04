import {Injectable} from '@angular/core';
import {Order} from '../models/order';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private _order: Order;
  private _numOrder: number;

  constructor() {
    this._order = new Order([]);
    this._numOrder = 1;
  }

  get order(): Order {
    return this._order;
  }

  set order(value: Order) {
    this._order = value;
  }

  convertOrder() {
    const finalOrder = {
      'products': [],
      'date': new Date(),
      'numOrder': this._numOrder,
      'priceOrder': this.order.totalOrder()
    };

    _.forEach(this.order.productsOrder, product => {
      const finalProduct = {
        'name': product.name,
        'priceFinal': product.totalPrice() * product.quantity,
        'extras': product.getExtras(),
        'quantity': product.quantity
      };

      finalOrder.products.push(finalProduct);

    });

    this._numOrder++;
    return finalOrder;
  }
}
