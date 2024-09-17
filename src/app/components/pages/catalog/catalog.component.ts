import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {ProductTeaType} from "../../../types/product-tea.type";
import {ProductsService} from "../../../services/products.service";
import {Subscription, switchMap, tap} from "rxjs";
import {Router} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {ProductCardComponent} from "../../common/product-card/product-card.component";
import {LoaderComponent} from "../../common/loader/loader.component";
import {SearchService} from "../../../services/search.service";

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [
    NgForOf,
    HttpClientModule,
    ProductCardComponent,
    LoaderComponent,
    NgIf
  ],
  providers: [ProductsService],
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnDestroy, OnInit{
  title: string = 'Наши чайные коллекции';
  isLoader: boolean = true;
  products: ProductTeaType[] = [];
  subscriptionForProductsTea!: Subscription;
  subscriptionSearch!: Subscription;
  constructor(private productsService: ProductsService, private router: Router, private searchService: SearchService) {}

  ngOnInit() {

    // Подписываемся на изменения поискового запроса и далаем запрос на товары
    // this.isLoader = true;//включаем лоадер
    // this.subscriptionSearch = this.searchService.search$.subscribe({
    //   next: (query: string) => {
    //     this.title = query ? `Результаты поиска по запросу "${query}"` : 'Наши чайные коллекции';
    //     this.productsService.getProducts().pipe(
    //       tap(()=> {
    //         this.isLoader = false;//выключаем лоадер
    //       })
    //     ).subscribe({
    //       next: (teaProducts)=> {
    //         this.products = teaProducts;
    //       },
    //       error: (error)=> {
    //         alert("Возникла ошибка при получении продуктов c сервера вы будете направлены на главную страницу");
    //         console.log(error.message);
    //         this.router.navigate(['/']);
    //       }
    //     });
    //   }
    // });

    this.subscriptionForProductsTea = this.productsService.getProducts().pipe(
      tap(()=> {
        this.isLoader = false;//выключаем лоадер
      })
    ).subscribe({
      next: (teaProducts)=> {
        this.products = teaProducts;
      },
      error: (error)=> {
        alert("Возникла ошибка при получении продуктов c сервера вы будете направлены на главную страницу");
        console.log(error.message);
        this.router.navigate(['/']);
      }
    });

  }

  ngOnDestroy() {
    if(this.subscriptionForProductsTea) {this.subscriptionForProductsTea.unsubscribe()}
  }

}
