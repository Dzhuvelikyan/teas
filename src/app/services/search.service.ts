import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchSubject = new Subject<string>();

  searchValue(query: string) {
    console.log('Отправка значения из SearchService:', query);
    this.searchSubject.next(query);  // Эмитим новое значение
  }
}
