import {Component, OnDestroy, OnInit} from '@angular/core';
import {AccordionComponent} from "../../common/accordion/accordion.component";
import {ShowTeaPopupComponent} from "../../common/show-tea-popap/show-tea-popap.component";
import {NgIf} from "@angular/common";
import {Subscription} from "rxjs";
import {ShowPopupService} from "../../../services/show-popup.service";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    AccordionComponent,
    ShowTeaPopupComponent,
    NgIf
  ],
  providers: [ShowPopupService],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy{
  isShowPopup: boolean = false;
  private subscriptionPopup!: Subscription;
  constructor(private showPopupService: ShowPopupService) {
  }

  ngOnInit() {

    this.subscriptionPopup = this.showPopupService.observableForPopup$.subscribe(
      {
        next: (isShow) => {
          this.isShowPopup = isShow;
        }
      }
    );

  }

  ngOnDestroy() {
    if (this.subscriptionPopup) {
      this.subscriptionPopup.unsubscribe();
    }
  }

}
