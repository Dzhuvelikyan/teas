import {Component, HostListener, OnInit} from '@angular/core';
@Component({
  selector: 'accordion-component',
  standalone: true,
  imports: [],
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit{


  @HostListener('click', ["$event.target"])
  onClick(target: HTMLElement) {
    this.toggleClassButton(target);
  }

  ngOnInit() {

  }

  private toggleClassButton(btn: HTMLElement) {
    //отлавливаем клик по каждой кнопке аккордиона(делигирование событий)
    if (btn.nodeName === "H3") {
      btn.classList.toggle("active");
    }
  }

}
