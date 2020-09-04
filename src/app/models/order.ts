import {IOrder} from '../interfaces/iorder';

import * as _ from 'lodash';
import {Product} from './product';

export class Order implements IOrder {

  constructor(data) {
    _.set(this, 'data', data);
    // Inicializa en vacio
    this.productsOrder = [];
  }

  get productsOrder(): Product[] {
    return _.get(this, 'data.productsOrder');
  }

  set productsOrder(value) {
    _.set(this, 'data.productsOrder', value);
  }

  addProduct(product: Product) {

    const productFound = _.find(this.productsOrder, p => {
      let copy = _.cloneDeep(p);
      _.unset(copy, 'data.quantity');

      return _.isEqual(p, product);
    });

    if (productFound) {
      product.quantity++;
    } else {
      product.quantity = 1;
      this.productsOrder.push(product);
    }

  }

  oneMoreProduct(product: Product) {
    product.quantity++;
  }

  oneLessProduct(product: Product) {
    product.quantity--;
    if (product.quantity === 0) {
      // Elimina el elemento de quedar 0 unidades agregadas a la orden
      _.remove(this.productsOrder, p => {
        return _.isEqual(p, product);
      });
    }
  }

  numProducts() {
    return this.productsOrder.length;
  }

  totalOrder() {
    let total = 0;
    _.forEach(this.productsOrder, p => {
      total += p.totalPrice() * p.quantity;
    });
    return total;
  }

}
