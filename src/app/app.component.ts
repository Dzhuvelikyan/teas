import {Component, DEFAULT_CURRENCY_CODE, LOCALE_ID} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./components/common/header/header.component";
import {FooterComponent} from "./components/common/footer/footer.component";



@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
