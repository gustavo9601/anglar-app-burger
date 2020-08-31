import {IProduct} from '../interfaces/iproduct';

import * as _ from 'lodash';

export class Product implements IProduct {
  constructor(data) {
    _.set(this, 'data', data);
  }

  get price(): number {
    return _.get(this, 'data.price');
  }

  get name(): string {
    return _.get(this, 'data.name');
  }

  get img(): string {
    return _.get(this, 'data.img');
  }

  get extras(): any[] {
    return _.get(this, 'data.extras');
  }

  get quantity(): number {
    return _.get(this, 'data.quantity');
  }

  // Usado para modificar el valor  de la cantidad, cuando se aumente o se decrementa
  set quantity(value: number) {
     _.set(this, 'data.quantity', value);
  }


}
