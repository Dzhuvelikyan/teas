import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import {Router} from "@angular/router";
import { SearchService } from "../../../services/search.service";

@Component({
  selector: 'search-component',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ],
  template: `
    <form [formGroup]="searchForm" class="d-flex" role="search">
      <input formControlName="search" class="form-control me-2" type="search" placeholder="Поиск чая" aria-label="Search">
      <button (click)="onSearch()" class="btn btn-outline-primary hvr-buzz">Найти</button>
    </form>`,
})
export class SearchComponent {
  searchForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private searchService: SearchService
  ) {

    //инициализация формы
    this.searchForm = this.fb.group({
      search: ['']
    });

  }

  onSearch(): void {
    const query = this.searchForm.get('search')?.value;

    // Лог для проверки корректности значения
    console.log('Отправлен из SearchComponent:', query);

    // Эмитим значение в SearchService (получилось бесполезное действие, как и весь сервис SearchService)
    this.searchService.searchValue(query);
    //this.router.navigate(['/catalog']);


    // Переходим на страницу каталога
    this.router.navigate(['/catalog'], {queryParams: {search: query}});

  }
}
