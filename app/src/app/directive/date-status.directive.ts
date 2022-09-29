import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { SearchItem } from '../models/search-item.model';

const startDate = Date.parse('01.01.1997');
const dateMap = {
  halfYear: Math.abs(startDate - Date.parse('06.01.1997')),
  month: Math.abs(startDate - Date.parse('01.31.1997')),
  week: Math.abs(startDate - Date.parse('01.08.1997')),
};

@Directive({
  selector: '[appDateStatus]',
})
export class DateStatusDirective implements OnInit {
  @Input()
  video!: SearchItem;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngOnInit(): void {
    if (!Boolean(Date.parse(this.video.snippet.publishedAt))) {
      return;
    }
    this.renderer.addClass(this.elementRef.nativeElement, this.getClass());
  }

  getClass() {
    const currentDate = Date.now();
    const videoDate = new Date(this.video.snippet.publishedAt);
    const gap = Math.abs(currentDate - videoDate.getTime());
    console.log(gap, dateMap.halfYear);
    const statusClasses = ['group-1', 'group-2', 'group-3', 'group-4'];
    if (gap > dateMap.halfYear) {
      return statusClasses[3];
    } else if (gap > dateMap.month) {
      return statusClasses[2];
    } else if (gap > dateMap.week) {
      return statusClasses[1];
    } else {
      return statusClasses[0];
    }
  }
}
