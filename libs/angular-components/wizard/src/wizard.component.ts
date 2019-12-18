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
  @ContentChildren(UxgWizardPageComponent) pages: QueryList<UxgWizardPageComponent>;

  @Input('uxgWizardShowCloseButton') showCloseButton = true;

  @Input('uxgWizardStartingPage') startingPage: number;

  @Output('uxgWizardOnCancel') cancel = new EventEmitter<any>(false);

  @Output('uxgWizardOnDone') done = new EventEmitter<any>(false);

  @Output('uxgWizardCurrentPageChange') currentPageChange = new EventEmitter<any>(false);

  currentPageId = -1;

  private subscriptions: Subscription[] = [];

  public get currentPage() {
    return this.navService.currentPage;
  }

  public set currentPage(page: UxgWizardPageComponent) {
    this.navService.goTo(page);
  }

  public get isLast() {
    return this.navService.currentPageIsLast;
  }

  public get isFirst() {
    return this.navService.currentPageIsFirst;
  }

  ngAfterContentInit() {
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
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  onStepClick(page: UxgWizardPageComponent) {
    this.currentPage = page;
  }

  private listenForCancelChanges(): Subscription {
    return this.navService.wizardCancel.subscribe(() => this.cancel.emit());
  }

  private listenForDoneChanges(): Subscription {
    return this.navService.wizardDone.subscribe(() => this.done.emit());
  }

  private listenForPageChanges(): Subscription {
    return this.navService.currentPageChange.subscribe(page => {
      this.currentPageId = this.pageCollection.getPageIndex(page);
      this.currentPageChange.emit();
    });
  }
}
