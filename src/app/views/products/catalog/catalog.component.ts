import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductTeaType} from "../../../../types/product-tea.type";
import {ProductsService} from "../../../shared/services/products.service";
import {Subscription, tap} from "rxjs";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {SearchService} from "../../../shared/services/search.service";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnDestroy, OnInit {
  title: string = 'Наши чайные коллекции';
  isLoader: boolean = true;
  products: ProductTeaType[] = [];
  subscriptionSearchSubject!: Subscription;
  subscriptionForProductsTea!: Subscription;
  subscriptionQueryParams!: Subscription;

  constructor(private productsService: ProductsService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private searchService: SearchService) {
  }

  ngOnInit() {

    //Подписываемся на изменения поискового запроса
    this.isLoader = true;//включаем лоадер

        //ПОДПИСКА ПОЧЕМУ ТО НЕ СРАБАТЫВАЕТ НЕМОГУ РАЗОБРАТЬСЯ
    // this.searchService.searchSubject.subscribe({
    //   next: (searchValue: string) => {
    //
    //     console.log('Подписались на searchService.searchSubject:', searchValue);
    //
    //     //Подписываемся на запрос за продуктами
    //     this.subscriptionForProductsTea = this.productsService.getProducts(searchValue).pipe(
    //       tap(() => {
    //
    //         this.title = searchValue ? `Результаты поиска по запросу "${searchValue}"` : `Наши чайные коллекции`;
    //         this.isLoader = false;//выключаем лоадер
    //
    //       })
    //     ).subscribe({
    //       next: (products) => {
    //         //присваиваем полученные продукты
    //         this.products = products;
    //       },
    //       error: (error) => {
    //         alert("Возникла ошибка при получении продуктов c сервера вы будете направлены на главную страницу");
    //         console.log(error.message);
    //         this.router.navigate(['/']);
    //       }
    //     });
    //
    //
    //   }
    // })

    // подписываемся на query-параметры
    this.subscriptionQueryParams = this.activatedRoute.queryParams.subscribe({
      next: (queryParams: Params) => {
        console.log(queryParams)
        let searchValue: string = '';
        if (queryParams['search']) {
          //находим и присваиваем переданое значение searchValue через query-параметры
          searchValue = queryParams['search'];
        }

        //работаем с полученным значением searchValue
        this.title = searchValue ? `Результаты поиска по запросу "${searchValue}"` : `Наши чайные коллекции`;
        this.productsService.getProducts(searchValue).pipe(
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
    });
  }

  ngOnDestroy() {
    if (this.subscriptionSearchSubject) {
      this.subscriptionSearchSubject.unsubscribe();
    }
    if (this.subscriptionForProductsTea) {
      this.subscriptionForProductsTea.unsubscribe();
    }
    if (this.subscriptionQueryParams) {
      this.subscriptionQueryParams.unsubscribe()
    }
  }

}
