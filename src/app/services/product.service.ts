import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import * as _ from 'lodash';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _data: any;
  private _dataOriginal: any;

  private _productsSelected: Product[];
  private _productSelected: Product;

  constructor(private http: HttpClient) {
  }

  public getData() {
    return new Promise((resolve, reject) => {
      this.http.get('assets/data/products.json').subscribe(data => {
        // _.cloneDeep(data);  hace una copia exacta de la variable
        this._data = _.cloneDeep(data);
        this._dataOriginal = _.cloneDeep(data);
        console.log('this._dataOriginal', this._dataOriginal);
        resolve(true);
      }, (error) => {
        console.log('Error al obtener la base de datos de productos', error);
        reject(true);
      });
    });
  }

  get categories() {
    // con lodash retorna unicamente del objeto _data, el indice categories
    return _.get(this._data, 'categories');
  }

  // Gets and Set de productsSelected
  get productsSelected(): Product[] {
    return this._productsSelected;
  }

  set productsSelected(value: Product[]) {
    this._productsSelected = value;
  }


  // Gets and Set de productSelected
  get productSelected(): Product {
    return this._productSelected;
  }

  set productSelected(value: Product) {
    this._productSelected = value;
  }


  resetProducts(){
    this._data = _.cloneDeep(this._dataOriginal);
  }
}
