import { Component, ElementRef, inject, TemplateRef, ViewChild, ViewEncapsulation} from '@angular/core';
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'popup',

  template: `
    <ng-template #popup let-modal>
      <div class="modal-header">
        <button type="button" class="btn-close bg-danger" aria-label="Close" (click)="modal.dismiss('Cross click')"></button>
      </div>
      <div class="modal-body fs-2 text-center">
        <p>Хотите посмотреть товары?</p>
      </div>
      <div class="modal-footer">
        <a routerLink="/catalog" class="btn mx-auto btn-primary px-5" (click)="modal.close('Close click')">ДА</a>
      </div>
    </ng-template>`,

  encapsulation: ViewEncapsulation.None,
  providers: [NgbModalConfig, NgbModal],

})


export class PopupComponent {

  @ViewChild("popup")
  popup!: TemplateRef<ElementRef>;

  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(isShow: boolean) {
    if (isShow) {
      this.modalService.open(this.popup, { size: 'sm' });
    }
  }
}
