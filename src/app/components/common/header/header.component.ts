import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {SearchComponent} from "../search/search.component";

@Component({
  selector: 'header-component',
  standalone: true,
    imports: [
        RouterLink,
        RouterLinkActive,
        SearchComponent,
    ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

}
