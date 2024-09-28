import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductsService} from "../../shared/services/products.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'order-component',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {

  isSuccess: boolean | number = false; //флаг для success, от запроса на отправку заказа(нужен ддля блока спасибо или наоборот)
  time: number = 0;// время для таймера блока спасибо(выводится в шаблон) используется в методе timer()
  orderForm!: FormGroup; // Объявляем тип для формы

  subscriptionSendOrder: Subscription = new Subscription();

  subscriptionQueryParams: Subscription = new Subscription();

  constructor(private fb: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private productService: ProductsService,
              private router: Router
  ) {}

  get firstName() {
    return this.orderForm.get("name")
  };

  get lastName() {
    return this.orderForm.get("last_name")
  };

  get phone() {
    return this.orderForm.get("phone")
  };

  get zip() {
    return this.orderForm.get("zip")
  };

  get address() {
    return this.orderForm.get("address")
  };

  ngOnInit() {

    this.orderForm = this.fb.group({
      product: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Zа-яА-ЯёЁ]+$')]],//разрешены только буквы латиницы и кириллицы
      last_name: ['', [Validators.required, Validators.pattern('^[a-zA-Zа-яА-ЯёЁ]+$')]],//разрешены только буквы латиницы и кириллицы
      phone: ['', [Validators.required, Validators.pattern('^\\+?\\d{11}$')]],//Допустимы только цифры, символ + может быть, а может и не быть и только в начале строки.
      country: ["Россия", [Validators.required]],
      zip: ['', [Validators.required, Validators.pattern('^\\d{3}-?\\d{3}$')]],
      address: ['', [Validators.required, Validators.minLength(10)]],//Разрешены только буквы (латиница и кириллица), цифры, пробелы, дефисы и слеши.
      comment: ['']
    });

    this.subscriptionQueryParams = this.activatedRoute.queryParams.subscribe(params => {
      if (params['product']) {
        this.orderForm.patchValue({
          product: params['product'] // Используем patchValue для записи полученного продукта в поле "product"
        });
      }
    });
  };

  ngOnDestroy() {
    this.subscriptionSendOrder.unsubscribe();
    this.subscriptionQueryParams.unsubscribe();
  }

  sendOrder() {

    //отправляем запрос с помощью сервиса productService
    this.subscriptionSendOrder = this.productService.sendOrder(this.orderForm.value)
      .subscribe({

        next: (response) => {
          if (response.success) {

            this.orderForm.reset();//очищаем форму
            this.timer(6, true, "/catalog");//показываем блок спасибо и переходим в каталог

          } else {
            console.log(response.message);
          }
          this.isSuccess = response.success;//для блока спасибо
        },

        error: (error) => {
          this.isSuccess = 0;//присваиваем 0 что-бы вывести блок с ошибкой
          const timeout = setTimeout(()=> {
            this.isSuccess = false;//присваиваем false что-бы скрыть блок с ошибкой
            clearTimeout(timeout);
          }, 3000)
          console.log(error.message);
        }

      });
  }

  timer(seconds: number = 3, redirect: boolean = false, routeStr: string = '/'): void {
    //по истечении этого таймера скроется блок спасибо и пользователь попадет на нужную страницу
    const interval = setInterval(() => {//инициализируем таймер
      this.time = seconds--;
      if (seconds <= 0) {
        clearInterval(interval);
        if (redirect) {
          this.router.navigate([routeStr]);
        }
      }
    }, 1000);
  }

}
