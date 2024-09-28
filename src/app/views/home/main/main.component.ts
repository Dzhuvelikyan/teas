import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from "rxjs";
import {PopupComponent} from "../../../shared/components/popup/popup.component";
import {PopupService} from "../../../shared/services/popup.service";
import {SliderComponent} from "../../../shared/components/slider/slider.component";
import {NgbCarouselConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [NgbCarouselConfig],
})
export class MainComponent implements OnDestroy, AfterViewInit, OnInit {

  @ViewChild(PopupComponent)//получаем дочерний компонент (PopupComponent)
  popupComponent!: PopupComponent;

  @ViewChild(SliderComponent)//получаем дочерний компонент (SliderComponent)
  sliderComponent!: SliderComponent;

  isShowPopup: boolean = false;

  private subscriptionPopup!: Subscription;

  //картинки для слайдера
  images: string[] = [
    "./assets/images/slider/1.png",
    "./assets/images/slider/2.png",
    "./assets/images/slider/3.png"
  ];

  constructor(
    private popupService: PopupService,
    private config: NgbCarouselConfig,//ко
  ) {

  }

  ngOnInit() {
    //настройки для слайдера
      this.setConfigSlider();
  }

  ngAfterViewInit() {

    //подписываемся на флаг для попапа
    this.subscriptionPopup = this.popupService.observablePopup$.subscribe({
      next: (isShow) => {
        this.isShowPopup = isShow;

        //показываем попап
        this.popupComponent.open(this.isShowPopup);
      }
    });

  }

  ngOnDestroy() {
    this.subscriptionPopup?.unsubscribe();
  }

  setConfigSlider(): void {
    this.config.interval = 3000;
    this.config.wrap = true;
    this.config.keyboard = false;
    this.config.pauseOnHover = true;
  }

}
