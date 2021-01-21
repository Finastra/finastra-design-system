import { Component, Input, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

import { ToasterComponent } from './toaster.component';
import { Toast } from './toaster.model';

const voidState = style({
  transform: 'translateX(110%)',
  height: 0,
  marginLeft: '0',
  marginRight: '0'
});

@Component({
  selector: 'uxg-toaster-container',
  template: `
    <uxg-toaster
      fxLayout="row"
      fxLayoutAlign="start stretch"
      [@fadeIn]="fadeIn"
      *ngFor="let toast of content"
      [toast]="toast"
    ></uxg-toaster>
  `,
  animations: [
    trigger('fadeIn', [
      transition(':enter', [voidState, animate(100)]),
      transition(':leave', [animate(100, voidState)])
    ])
  ]
})
export class ToasterContainerComponent implements OnInit, OnDestroy {
  @Input()
  content: Toast[] = [];

  @ViewChildren(ToasterComponent)
  toasts!: QueryList<ToasterComponent>;

  fadeIn: any;

  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {}
}
