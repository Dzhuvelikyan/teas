import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class PopupService {

  isShow: boolean = true;

  observablePopup$: Observable<boolean>;

  constructor() {

    this.observablePopup$ = new Observable((observer) => {

      const timeoutForPopup = setTimeout(() => {

        observer.next(this.isShow);

      }, 2000);
      return {
        unsubscribe() {
          clearTimeout(timeoutForPopup)
        }
      }

    });

  }
}
