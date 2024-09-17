import {Observable} from "rxjs";

export class ShowPopupService {

  isShow: boolean = true;
  observableForPopup$: Observable<boolean>;
  constructor() {

    this.observableForPopup$ = new Observable((observer) => {

      const timeoutForPopup = setTimeout(() => {

        observer.next(this.isShow);

      }, 5000);
      return {
        unsubscribe() {
          clearTimeout(timeoutForPopup)
        }
      }

    });

  }
}
