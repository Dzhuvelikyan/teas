import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./views/home/main/main.component";
import {CatalogComponent} from "./views/products/catalog/catalog.component";
import {ProductComponent} from "./views/products/product/product.component";
import {OrderComponent} from "./views/order/order.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  { path: '**', redirectTo: '' } // для обработки неизвестных маршрутов
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
