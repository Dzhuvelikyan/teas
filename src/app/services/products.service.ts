import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {ProductTeaType} from "../types/product-tea.type";
import {OrderDataType} from "../types/order-data.type";

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  apiUrl: string = 'https://testologia.ru';
  constructor(private http: HttpClient) { }

  // getProducts(): Observable<ProductTeaType[]> {//отправка запроса на получение всех товаров
  //   //запрос нa сервер с помощью HttpClient (observable-объект)
  //   return this.http.get<ProductTeaType[]>(this.apiUrl);
  // }

  searchProducts(searchValue: string): Observable<ProductTeaType[]> {//отправка запроса на получение товаров по поиску
    return this.http.get<ProductTeaType[]>(`${this.apiUrl}/tea?search=${searchValue}`);
  }

  getProducts(search: string = ''): Observable<ProductTeaType[]> {//отправка запроса на получение всех товаров или получение товаров по поиску
    const queryParams = search ?  `?search=${search}` : '';
    //запрос нa сервер с помощью HttpClient (observable-объект)
    return this.http.get<ProductTeaType[]>(`${this.apiUrl}/tea${queryParams}`);
  }

  getProduct(id: number): Observable<ProductTeaType> {//отправка запроса на получение одного товара
    //запрос нa сервер с помощью HttpClient (observable-объект)
    return this.http.get<ProductTeaType>(`${this.apiUrl}/tea?id=${id}`);
  }

  sendOrder(body: OrderDataType): Observable<{ success: number, message?: string }> {//запроса на отправку заказа
    return this.http.post<{ success: number, message?: string }>(`https://testologia.ru/order-tea`,body);
  }

}
