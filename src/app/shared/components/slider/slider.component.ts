import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'slider',
  template: `
    <ngb-carousel>
      <ng-template ngbSlide *ngFor="let image of images">
        <div class="picsum-img-wrapper">
          <img [src]="image" alt="first slide"/>
        </div>
      </ng-template>
    </ngb-carousel>`,
  encapsulation: ViewEncapsulation.None,

  styleUrl: 'slider.component.scss',
})
export class SliderComponent {

  @Input() images: string[] = [];

  constructor() {
  }

}


