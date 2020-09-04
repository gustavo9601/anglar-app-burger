import {Component, OnInit, ViewChild} from '@angular/core';
import {Product} from '../../models/product';
import {ProductService} from '../../services/product.service';
import {Router} from '@angular/router';
import {OrderService} from '../../services/order.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public product: Product;

  public extras: any;
  public extraSelected: number; // Indice del exra seleccionado

  public loadProduct: boolean;

  @ViewChild('modal_add_product') modal_add_product;

  constructor(private _productService: ProductService,
              private router: Router,
              private _orderService: OrderService,
              private modalService:NgbModal) {
    this.product = null;
    this.extras = null;
    this.extraSelected = 0;
    this.loadProduct = false;
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
      this.loadProduct = true;
    }


  }

  hasPrevious() {
    if (!this.product.extras) {
      return false;
    }
    // Realizar el cambio del extra seleccionado a modo de paginacion
    return this.product.extras[this.extraSelected - 1];
  }

  hasNext() {

    if (!this.product.extras) {
      return false;
    }
    console.log('this.product.extras', this.product.extras);
    // Realizar el cambio del extra seleccionado a modo de paginacion
    return this.product.extras[this.extraSelected + 1];
  }

  previous() {
    this.extraSelected = this.extraSelected - 1;
    this.extras = this.product.extras[this.extraSelected];
  }

  next() {
    this.extraSelected = this.extraSelected + 1;
    this.extras = this.product.extras[this.extraSelected];
  }

  addProductOrder() {
    // Usando programacion orientada a objetos, le pasamos el objeto ya armado
    // addProduct es la funcion del modelo de order
    console.log("this.product", this.product)
    this._orderService.order.addProduct(this.product);
    this._productService.resetProducts();
    this.modalService.open(this.modal_add_product)
    console.log('this._orderService.order', this._orderService.order);

    this.router.navigate(['/list-categories']);
  }
}
