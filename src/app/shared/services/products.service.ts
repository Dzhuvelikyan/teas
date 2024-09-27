import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductTeaType} from "../../../types/product-tea.type";
import {OrderDataType} from "../../../types/order-data.type";

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  apiUrl: string = 'https://testologia.ru';

  constructor(private http: HttpClient) { }

  //отправка запроса на получение всех товаров или получение товаров по поиску
  getProducts(searchValue: string = ''): Observable<ProductTeaType[]> {
    let queryParams = searchValue ?  `?search=${searchValue}` : ``;
    //запрос нa сервер с помощью HttpClient (observable-объект)
    return this.http.get<ProductTeaType[]>(`${this.apiUrl}/tea${queryParams}`);
  }

  //отправка запроса на получение одного товара
  getProduct(id: number): Observable<ProductTeaType> {
    //запрос нa сервер с помощью HttpClient (observable-объект)
    return this.http.get<ProductTeaType>(`${this.apiUrl}/tea?id=${id}`);
  }

  //запроса на отправку заказа
  sendOrder(body: OrderDataType): Observable<{ success: number, message?: string }> {
    return this.http.post<{ success: number, message?: string }>(`https://testologia.ru/order-tea`,body);
  }

}
