import {DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';  // Импорт маршрутизации

//импортируем локаль для России и регистрируем:
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import {ProductsService} from "./shared/services/products.service";
import {SearchService} from "./shared/services/search.service";
import {CatalogComponent} from "./views/products/catalog/catalog.component";
import {MainComponent} from "./views/home/main/main.component";
import {OrderComponent} from "./views/order/order.component";
import {ProductComponent} from "./views/products/product/product.component";
import {FooterComponent} from "./shared/components/footer/footer.component";
import {HeaderComponent} from "./shared/components/header/header.component";
import {ProductCardComponent} from "./shared/components/product-card/product-card.component";
import {LoaderComponent} from "./shared/components/loader/loader.component";
import {SearchComponent} from "./shared/components/search/search.component";
import {OrderModule} from "./views/order/order.module";
import {ProductsModule} from "./views/products/products.module";
import {HomeModule} from "./views/home/home.module";
import {SharedModule} from "./shared/shared.module";
registerLocaleData(localeRu);

@NgModule({
  declarations: [// Здесь регистрируем компоненты
    AppComponent,
  ],
  imports: [
    HomeModule,
    ProductsModule,
    OrderModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
  ],
    providers: [// Здесь можно указать глобальные сервисы
      { provide: LOCALE_ID, useValue: 'ru-RU' }, // Устанавливаем локаль на российскую
      { provide: DEFAULT_CURRENCY_CODE, useValue: ' руб.' },//Устанавливаем валюту на российскую
      {provide: ProductsService},
      {provide: SearchService}
    ],
  bootstrap: [AppComponent]  // Главный компонент, который загружается первым
})
export class AppModule { }
