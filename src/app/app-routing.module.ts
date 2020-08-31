import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListCategoriesComponent} from './components/list-categories/list-categories.component';
import {ListProductComponent} from './components/list-product/list-product.component';
import {ProductComponent} from './components/product/product.component';

const routes: Routes = [
  {path: 'list-categories', component: ListCategoriesComponent},
  {path: 'list-products', component: ListProductComponent},
  {path: 'product', component: ProductComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'list-categories'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
