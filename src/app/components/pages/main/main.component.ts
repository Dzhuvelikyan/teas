import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy{
  isShowPopup: boolean = false;
  private subscriptionPopup!: Subscription;
  constructor() {
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    if (this.subscriptionPopup) {
      this.subscriptionPopup.unsubscribe();
    }
  }

}
