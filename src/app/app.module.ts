// Modules
import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatCheckboxModule} from '@angular/material';
import {MatRadioModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

// Components
import {AppComponent} from './app.component';

// Pipes
import {TranslatePipe} from './pipes/translate.pipe';

// Services
import {TranslateService} from './services/translate.service';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {ProductService} from './services/product.service';
import { ListCategoriesComponent } from './components/list-categories/list-categories.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { ProductComponent } from './components/product/product.component';


export function translateFactory(provider: TranslateService) {
  return () => provider.getData();
}

export function productFactory(provider: ProductService) {
  return () => provider.getData();
}

@NgModule({
  declarations: [
    AppComponent,
    TranslatePipe,
    HeaderComponent,
    FooterComponent,
    ListCategoriesComponent,
    ListProductComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    MatCheckboxModule,
    MatRadioModule,
    FormsModule
  ],
  providers: [
    /* Inicializando la carga, primero que otros servicios*/
    TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: translateFactory,
      deps: [TranslateService],
      multi: true
    },
    ProductService,
    {
      provide: APP_INITIALIZER,
      useFactory: productFactory,
      deps: [ProductService],
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
