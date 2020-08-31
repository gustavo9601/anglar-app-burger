import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit {

  public listCategories: any[];

  constructor(private _productService: ProductService,
              private router:Router) {
    this.listCategories = [];
  }

  ngOnInit() {
    this.listCategories = this._productService.categories;
  }

  selectCategory(categorie){
    // Le setea el valor que contiene los products de la categoria clickeada
    this._productService.productsSelected = categorie.products;
    console.log("this._productService.productsSelected", this._productService.productsSelected);
    this.router.navigate(['/list-products']);
  }
}
