import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnDestroy, Output, TemplateRef, AfterViewInit } from '@angular/core';
import { BehaviorSubject, Subscription, fromEvent } from 'rxjs';
import { distinctUntilChanged, map, share, throttleTime } from 'rxjs/operators';

enum ShowStatus {
  show = 'show',
  hide = 'hide'
}
@Component({
  selector: 'uxg-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({ opacity: 1, transform: 'scale(1)' })),
      state('hide', style({ opacity: 0, transform: 'scale(0)' })),
      transition('show => hide', animate('350ms ease-out')),
      transition('hide => show', animate('350ms ease-in'))
    ])
  ]
})
export class ScrollToTopComponent implements AfterViewInit, OnDestroy {
  @Input() customTemplate: TemplateRef<any>;
  @Input() showAfter = 100;

  @Output() buttonPressed = new EventEmitter<Event>();

  showButton = false;
  scroll$: Subscription;
  state$ = new BehaviorSubject<string>(ShowStatus.hide);
  constructor() {}

  ngAfterViewInit() {
    this.scroll$ = fromEvent(window, 'scroll')
      .pipe(
        throttleTime(10),
        map(() => window.pageYOffset),
        map(y => {
          if (y > this.showAfter) {
            return ShowStatus.show;
          } else {
            return ShowStatus.hide;
          }
        }),
        distinctUntilChanged(),
        share()
      )
      .subscribe(s => this.state$.next(s));
  }

  ngOnDestroy() {
    this.scroll$.unsubscribe();
  }

  handleClick(event) {
    this.scrollToTop();
    this.buttonPressed.emit(event);
  }

  scrollToTop() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }
}
