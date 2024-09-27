import {DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';  // Импорт маршрутизации

//импортируем локаль для России и регистрируем:
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import {ProductsService} from "./services/products.service";
import {SearchService} from "./services/search.service";
import {CatalogComponent} from "./components/pages/catalog/catalog.component";
import {MainComponent} from "./components/pages/main/main.component";
import {OrderComponent} from "./components/pages/order/order.component";
import {ProductComponent} from "./components/pages/product/product.component";
import {FooterComponent} from "./components/common/footer/footer.component";
import {HeaderComponent} from "./components/common/header/header.component";
import {ProductCardComponent} from "./components/common/product-card/product-card.component";
import {LoaderComponent} from "./components/common/loader/loader.component";
import {ReactiveFormsModule} from "@angular/forms";
import {SearchComponent} from "./components/common/search/search.component";
import {HttpClientModule} from "@angular/common/http";
registerLocaleData(localeRu);

@NgModule({
  declarations: [// Здесь регистрируем компоненты
    AppComponent,
    CatalogComponent,
    MainComponent,
    OrderComponent,
    ProductComponent,
    FooterComponent,
    HeaderComponent,
    ProductCardComponent,
    LoaderComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,// Подключаем модуль маршрутизации
    HttpClientModule,
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
