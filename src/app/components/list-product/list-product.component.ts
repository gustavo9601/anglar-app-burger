import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../models/product';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  public listProducts: Product[];

  constructor(private _productService: ProductService,
              private router: Router) {
    this.listProducts = [];
  }

  ngOnInit() {
    this.listProducts = this._productService.productsSelected;

    // Controlando si ingresan por el path directamente, no habria productos que cargar
    if (!this.listProducts) {
      this.router.navigate(['/list-categories']);
    }
  }

  selectProduct(product: Product) {
    this._productService.productSelected = product;
    console.log("this._productService.productSelected", this._productService.productSelected)
    this.router.navigate(['/product']);
  }

}
