import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ProductsService} from "../../../services/products.service";
import {ProductTeaType} from "../../../types/product-tea.type";
import {Observable, Subscription, tap} from "rxjs";

@Component({
  selector: 'product-component',
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit, OnDestroy {

  isLoader: boolean = false;
  urlParams$: Observable<Params>;

  subscriptionUrlParams!: Subscription;
  subscriptionProductsService!: Subscription;
  product: ProductTeaType;

  constructor(private productsService: ProductsService, private activatedRoute: ActivatedRoute, private router: Router) {

    this.urlParams$ = this.activatedRoute.params;

    this.product = {
      id: null,
      image: '',
      title: '',
      price: null,
      description: ''
    }

  }

  ngOnInit() {
    this.isLoader = true;//включаем лоадер
    this.subscriptionUrlParams = this.urlParams$.subscribe({
      next: (params)=> {

        if (params["id"]) {
          this.subscriptionProductsService = this.productsService.getProduct(Number(params["id"])).pipe(
            tap(()=> {
              this.isLoader = false;//выключаем лоадер
            })
          ).subscribe({
            next: (product)=> {
              this.product = product;
            },
            error: (error)=> {
              console.log(error.message);
              this.router.navigate(['/']);
            }
          });
        }

      },
    });
  }

  ngOnDestroy() {
    if(this.subscriptionProductsService) {
      this.subscriptionProductsService.unsubscribe();
    }
    if(this.subscriptionUrlParams) {
      this.subscriptionUrlParams.unsubscribe();
    }
  }

}
