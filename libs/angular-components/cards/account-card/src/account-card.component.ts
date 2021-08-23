import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'uxg-account-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.scss']
})
export class AccountCardComponent implements OnInit, OnDestroy {
  @Input() name?: string;
  @Input() balance?: number;
  @Input() currency?: string;
  @Input() number?: string;
  @Input() icon = 'credit_card';
  @Input() iconAriaLabel = 'Credit Card';
  @Input() selectable?: boolean;
  @Input() selected?: boolean;
  @Input() selectedWithCheckIcon?: boolean;

  ngOnInit() {
    if (this.selected) {
      this.selectable = true;
    }
  }
  ngOnDestroy() {}

  public onCardClick() {
    if (this.selectable) {
      this.selected = !this.selected;
    }
  }
}

// Skeleton
@Component({
  selector: 'uxg-account-card-skeleton',
  templateUrl: './account-card.skeleton.html',
  styleUrls: ['./account-card.component.scss']
})
export class AccountCardSkeletonComponent {}
