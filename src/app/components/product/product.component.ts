import {Component, OnInit} from '@angular/core';
import {Product} from '../../models/product';
import {ProductService} from '../../services/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public product: Product;

  public extras: any;
  public extraSelected: number;

  constructor(private _productService: ProductService,
              private router: Router) {
    this.product = null;
    this.extras = null;
    this.extraSelected = 0;
  }

  ngOnInit() {
    if (!this._productService.productSelected) {
      this.router.navigate(['/list-products']);
    } else {
      // Creamos el objeto ahora si como clase, ya que antes puede que no se envie data y de error
      this.product = new Product(this._productService.productSelected);

      // Verificando que tenga extras
      if (this.product.extras) {
        this.extras = this.product.extras[this.extraSelected];
      }
    }
  }

  hasPrevious(){
    if (!this.product.extras){
      return false;
    }
    // Realizar el cambio del extra seleccionado a modo de paginacion
    return this.product.extras[this.extraSelected - 1];
  }

  hasNext(){

    if (!this.product.extras){
      return false;
    }
    console.log("this.product.extras", this.product.extras)
    // Realizar el cambio del extra seleccionado a modo de paginacion
    return this.product.extras[this.extraSelected + 1];
  }

  previous(){
    this.extraSelected = this.extraSelected - 1;
    this.extras = this.product.extras[this.extraSelected];
  }

  next(){
    this.extraSelected = this.extraSelected + 1;
    this.extras = this.product.extras[this.extraSelected];
  }
}
