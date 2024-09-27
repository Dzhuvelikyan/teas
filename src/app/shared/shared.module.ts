import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from "./components/footer/footer.component";
import {HeaderComponent} from "./components/header/header.component";
import {ProductCardComponent} from "./components/product-card/product-card.component";
import {LoaderComponent} from "./components/loader/loader.component";
import {SearchComponent} from "./components/search/search.component";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ProductCardComponent,
    LoaderComponent,
    SearchComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ProductCardComponent,
    LoaderComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class SharedModule { }
