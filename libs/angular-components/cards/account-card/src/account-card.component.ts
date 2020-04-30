import { Component, OnInit, OnDestroy, Input } from '@angular/core';

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

  ngOnInit() {}
  ngOnDestroy() {}
}

// Skeleton
@Component({
  selector: 'uxg-account-card-skeleton',
  templateUrl: './account-card.skeleton.html',
  styleUrls: ['./account-card.component.scss']
})
export class AccountCardSkeletonComponent {}
