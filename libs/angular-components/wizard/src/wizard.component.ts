import {
  AfterContentInit,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  QueryList,
  ViewEncapsulation
} from '@angular/core';
import { Subscription } from 'rxjs';
import { wizardAnimation } from './animations';
import { ButtonHubService } from './services/button-hub.service';
import { PageCollectionService } from './services/page-collection.service';
import { WizardNavigationService } from './services/wizard-navigation.service';
import { UxgWizardPageComponent } from './wizard-page/wizard-page.component';

@Component({
  selector: 'uxg-wizard',
  providers: [WizardNavigationService, PageCollectionService, ButtonHubService],
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.uxg-wizard]': 'true'
  },
  animations: [wizardAnimation()]
})
export class UxgWizardComponent implements OnDestroy, AfterContentInit {
  @ContentChildren(UxgWizardPageComponent) pages!: QueryList<UxgWizardPageComponent>;

  @Input('uxgWizardShowPageTitles') showPageTitles = true;

  @Input('uxgWizardShowCloseButton') showCloseButton = true;

  @Input('uxgWizardStartingPage') startingPage = 0;

  @Output('uxgWizardOnCancel') cancel = new EventEmitter<any>(false);

  @Output('uxgWizardOnDone') done = new EventEmitter<any>(false);

  @Output('uxgWizardCurrentPageChange') currentPageChange = new EventEmitter<any>(false);

  currentPageId = -1;

  private subscriptions: Subscription[] = [];

  swipeCoord: [number, number] = [0, 0];
  swipeTime = 0;

  public get currentPage() {
    return this.navService.currentPage;
  }

  public set currentPage(page: UxgWizardPageComponent | null) {
    if (page) this.navService.goTo(page);
  }

  public get isLast() {
    return this.navService.currentPageIsLast;
  }

  public get isFirst() {
    return this.navService.currentPageIsFirst;
  }

  ngAfterContentInit() {
    this.pages.forEach((page) => (page.showTitle = this.showPageTitles));

    this.pageCollection.pages = this.pages;

    if (!this.currentPage) {
      if (this.startingPage) {
        this.navService.currentPage = this.pageCollection.pagesAsArray[this.startingPage];
      } else {
        this.navService.setFirstPageCurrent();
      }
    }

    this.buttonService.buttonsReady = true;
  }

  constructor(
    public navService: WizardNavigationService,
    public pageCollection: PageCollectionService,
    public buttonService: ButtonHubService
  ) {
    this.subscriptions.push(this.listenForCancelChanges(), this.listenForDoneChanges(), this.listenForPageChanges());
  }

  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  onStepClick(page: UxgWizardPageComponent) {
    this.currentPage = page;
  }

  swipe(e: TouchEvent, when: string): void {
    const coord: [number, number] = [e.changedTouches[0].clientX, e.changedTouches[0].clientY];
    const time = new Date().getTime();

    if (when === 'start') {
      this.swipeCoord = coord;
      this.swipeTime = time;
    } else {
      const direction = [coord[0] - this.swipeCoord[0], coord[1] - this.swipeCoord[1]];
      const duration = time - this.swipeTime;

      if (duration < 1000 && Math.abs(direction[0]) > 30 && Math.abs(direction[0]) > Math.abs(direction[1] * 3)) {
        const swipe = direction[0] < 0 ? 'next' : 'previous';
        if (swipe === 'next') {
          this.navService.next();
        } else {
          this.navService.previous();
        }
      }
    }
  }

  private listenForCancelChanges(): Subscription {
    return this.navService.wizardCancel.subscribe(() => this.cancel.emit());
  }

  private listenForDoneChanges(): Subscription {
    return this.navService.wizardDone.subscribe(() => this.done.emit());
  }

  private listenForPageChanges(): Subscription {
    return this.navService.currentPageChange.subscribe((page) => {
      this.currentPageId = this.pageCollection.getPageIndex(page);
      this.currentPageChange.emit();
    });
  }
}
