import {DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';  // Импорт маршрутизации

//импортируем локаль для России и регистрируем:
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
registerLocaleData(localeRu);

import {ProductsService} from "./shared/services/products.service";
import {SearchService} from "./shared/services/search.service";
import {OrderModule} from "./views/order/order.module";
import {ProductsModule} from "./views/products/products.module";
import {HomeModule} from "./views/home/home.module";
import {SharedModule} from "./shared/shared.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


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
    NgbModule,
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
