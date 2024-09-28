import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from "./components/footer/footer.component";
import {HeaderComponent} from "./components/header/header.component";
import {ProductCardComponent} from "./components/product-card/product-card.component";
import {LoaderComponent} from "./components/loader/loader.component";
import {SearchComponent} from "./components/search/search.component";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {AccordionComponent} from "./components/accordion/accordion.component";
import {NgbAccordionModule, NgbCarouselModule, NgbModalModule} from "@ng-bootstrap/ng-bootstrap";
import {PopupComponent} from "./components/popup/popup.component";
import {SliderComponent} from "./components/slider/slider.component";



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ProductCardComponent,
    LoaderComponent,
    SearchComponent,
    AccordionComponent,
    PopupComponent,
    SliderComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ProductCardComponent,
    LoaderComponent,
    SearchComponent,
    AccordionComponent,
    PopupComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    NgbAccordionModule,
    NgbModalModule,
    NgbCarouselModule
  ],
})
export class SharedModule { }
