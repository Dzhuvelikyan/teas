import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchValue: string = '';

  search$ = new Subject<string>();

  searchQuery(value: string): void {
    this.searchValue = value;
    this.search$.next(this.searchValue);
  }

}
