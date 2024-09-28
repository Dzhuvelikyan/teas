import {Component, Input} from '@angular/core';
import {ProductTeaType} from "../../../../types/product-tea.type";

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product: ProductTeaType;

  constructor() {
    this.product = {
      id: null,
      image: '',
      title: '',
      price: null,
      description: ''
    }
  }
}
