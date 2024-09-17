import {Component, DEFAULT_CURRENCY_CODE, LOCALE_ID} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./components/common/header/header.component";
import {FooterComponent} from "./components/common/footer/footer.component";

//импортируем локаль для России и регистрируем:
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
registerLocaleData(localeRu);

@Component({
  selector: 'app-component',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  providers: [
    { provide: LOCALE_ID, useValue: 'ru-RU' }, // Устанавливаем локаль на российскую
    { provide: DEFAULT_CURRENCY_CODE, useValue: ' руб.' }//Устанавливаем валюту на российскую
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
