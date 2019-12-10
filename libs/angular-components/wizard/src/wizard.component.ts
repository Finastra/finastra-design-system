import {
  AfterContentInit,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  QueryList
} from '@angular/core';
import { Subscription } from 'rxjs';
import { wizardAnimation } from './animations';
import { ButtonHubService } from './services/button-hub.service';
import { PageCollectionService } from './services/page-collection.service';
import { WizardNavigationService } from './services/wizard-navigation.service';
import { UxgWizardPage } from './wizard-page/wizard-page.component';

@Component({
  selector: 'uxg-wizard',
  providers: [WizardNavigationService, PageCollectionService, ButtonHubService],
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss'],
  host: {
    '[class.uxg-wizard]': 'true'
  },
  animations: [wizardAnimation()]
})
export class UxgWizard implements OnDestroy, AfterContentInit {
  @ContentChildren(UxgWizardPage) pages: QueryList<UxgWizardPage>;

  @Input('uxgWizardShowCloseButton') showCloseButton: boolean = true;

  @Input('uxgWizardStartingPage') startingPage: number;

  @Output('uxgWizardOnCancel') onCancel = new EventEmitter<any>(false);

  @Output('uxgWizardOnDone') onDone = new EventEmitter<any>(false);

  @Output('uxgWizardCurrentPageChange') currentPageChange = new EventEmitter<any>(false);

  currentPageId = -1;

  public get currentPage() {
    return this.navService.currentPage;
  }

  public set currentPage(page: UxgWizardPage) {
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

  private subscriptions: Subscription[] = [];

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

  onStepClick(page: UxgWizardPage) {
    this.currentPage = page;
  }

  private listenForCancelChanges(): Subscription {
    return this.navService.wizardCancel.subscribe(() => this.onCancel.emit());
  }

  private listenForDoneChanges(): Subscription {
    return this.navService.wizardDone.subscribe(() => this.onDone.emit());
  }

  private listenForPageChanges(): Subscription {
    return this.navService.currentPageChange.subscribe(page => {
      this.currentPageId = this.pageCollection.getPageIndex(page);
      this.currentPageChange.emit();
    });
  }
}

@Component({
  selector: 'uxg-wizard-title',
  template: `
    <ng-content></ng-content>
  `
})
export class UxgWizardTitle {}
