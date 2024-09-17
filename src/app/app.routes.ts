import { Routes } from '@angular/router';
import {CatalogComponent} from "./components/pages/catalog/catalog.component";
import {MainComponent} from "./components/pages/main/main.component";
import {ProductComponent} from "./components/pages/product/product.component";
import {OrderComponent} from "./components/pages/order/order.component";

export const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'catalog', component: CatalogComponent},
  {path: 'product/:id', component: ProductComponent},
  {path: 'order', component: OrderComponent},
  { path: '**', redirectTo: '' } // для обработки неизвестных маршрутов
];
