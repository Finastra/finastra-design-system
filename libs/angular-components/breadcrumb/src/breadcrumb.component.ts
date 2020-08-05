import {
  Component,
  Input,
  OnDestroy,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Attribute
} from '@angular/core';
import { Breadcrumb } from './breadcrumb';
import { Router } from '@angular/router';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Subject, combineLatest, ReplaySubject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
@Component({
  selector: 'uxg-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  host: {
    class: 'uxg-breadcrumb'
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UxgBreadcrumbComponent implements OnDestroy {
  private breadcrumbs$ = new Subject<Breadcrumb[]>();

  private _breadcrumbs: Breadcrumb[] = [];
  @Input()
  public get breadcrumbs(): Breadcrumb[] {
    if (this.shouldDisplayBackButton) {
      return this._breadcrumbs && this._breadcrumbs.length > 0 ? [this._breadcrumbs[this._breadcrumbs.length - 1]] : [];
    }
    return this._breadcrumbs;
  }
  public set breadcrumbs(value: Breadcrumb[]) {
    this._breadcrumbs = value;
    this.breadcrumbs$.next(value);
  }

  private _enableBackButton = true;
  @Input()
  public get enableBackButton() {
    return this._enableBackButton;
  }
  public set enableBackButton(value) {
    this._enableBackButton = coerceBooleanProperty(value);
  }

  /**
   * Back button can be displayed only in mobile mode and if breadscrumb have more than two items.
   */
  shouldDisplayBackButton = false;

  private destroyed$ = new Subject<void>();

  constructor(
    @Attribute('dense') public dense: any,
    @Attribute('color') public color: any,
    private router: Router,
    private breakpointObserver: BreakpointObserver,
    private cd: ChangeDetectorRef
  ) {
    combineLatest([
      this.breakpointObserver.observe([Breakpoints.HandsetPortrait]).pipe(map((result) => result.matches)),
      this.breadcrumbs$
    ])
      .pipe(
        map(([isMobile, breadcrumbs]) => {
          return isMobile && breadcrumbs && breadcrumbs.length > 2;
        }),
        takeUntil(this.destroyed$)
      )
      .subscribe((value) => {
        this.shouldDisplayBackButton = value;
        this.cd.markForCheck();
      });
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  backToPreviousPage() {
    if (this._breadcrumbs.length > 2) {
      const parentUrl = this._breadcrumbs[this._breadcrumbs.length - 2].url;
      if (parentUrl) {
        this.router.navigateByUrl(parentUrl);
      }
    }
  }
}
