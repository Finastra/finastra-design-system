import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, EventEmitter, Inject, Input, OnDestroy, Output, TemplateRef } from '@angular/core';
import { BehaviorSubject, Subscription, fromEvent } from 'rxjs';
import { distinctUntilChanged, map, share, throttleTime } from 'rxjs/operators';
import smoothscroll from 'smoothscroll-polyfill';
import { WINDOW } from './window.token';

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
  @Input() showAfter: number = 500;

  @Input() parentElementSelector: string;

  @Output() onClick = new EventEmitter<Event>();

  showButton: boolean = false;
  scroll$: Subscription;
  state$ = new BehaviorSubject<string>(ShowStatus.hide);
  parent: any;

  constructor(@Inject(WINDOW) private window: Window) {}

  ngAfterViewInit() {
    smoothscroll.polyfill();

    if (this.parentElementSelector) {
      this.parent = document.querySelector(this.parentElementSelector);
    } else {
      this.parent = this.window;
    }
    this.scroll$ = fromEvent(this.parent, 'scroll')
      .pipe(
        throttleTime(10),
        map(() => this.parent.pageYOffset || this.parent.scrollTop),
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
      .subscribe(state => this.state$.next(state));
  }

  ngOnDestroy() {
    if (this.scroll$) {
      this.scroll$.unsubscribe();
    }
  }

  handleClick(event) {
    this.scrollToTop();
    this.onClick.emit(event);
  }

  scrollToTop() {
    this.parent.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }
}
