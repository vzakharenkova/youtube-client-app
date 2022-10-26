import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { SearchItem } from 'src/app/shared/models/search-item.model';

const startDate = Date.parse('01.01.1997');
const dateMap = {
  halfYear: Math.abs(startDate - Date.parse('06.01.1997')),
  month: Math.abs(startDate - Date.parse('01.31.1997')),
  week: Math.abs(startDate - Date.parse('01.08.1997')),
};

enum StatusClass {
  MoreThanSixMonths = 'group-4',
  MoreThanMonth = 'group-3',
  MoreThanWeek = 'group-2',
  LessThanWeek = 'group-1',
}
@Directive({
  selector: '[appDateStatus]',
})
export class DateStatusDirective implements OnInit {
  @Input()
  video!: SearchItem;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngOnInit(): void {
    if (Boolean(Date.parse(this.video.snippet.publishedAt))) {
      this.renderer.addClass(this.elementRef.nativeElement, this.getClass());
    }
  }

  private getClass() {
    const currentDate = Date.now();
    const videoDate = new Date(this.video.snippet.publishedAt);
    const gap = Math.abs(currentDate - videoDate.getTime());

    if (gap > dateMap.halfYear) {
      return StatusClass.MoreThanSixMonths;
    } else if (gap > dateMap.month) {
      return StatusClass.MoreThanMonth;
    } else if (gap > dateMap.week) {
      return StatusClass.MoreThanWeek;
    } else {
      return StatusClass.LessThanWeek;
    }
  }
}
