import {Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'show-tea-popup',
  standalone: true,
    imports: [
        RouterLink
    ],
  template: `
      <article [class.active]="isShow" class="bg-info-subtle py-3 px-5 rounded-2 position-fixed d-flex flex-column align-items-center justify-content-center">
          <p class="text-center font-monospace fs-4 mb-3">
              Посмотрите наши чайные коллекции!
          </p>
          <a class="rounded-2 text-black px-4 py-2 bg-primary d-block" routerLink="/catalog">Смотреть</a>
      </article>`,
  styleUrls: ['show-tea-popup.component.scss']
})
export class ShowTeaPopupComponent {
  //принимаем флаг isShow из компонента в котором используем попап
  @Input() isShow: boolean = false;
}
