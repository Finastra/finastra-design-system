import { Injectable, OnDestroy, TemplateRef } from '@angular/core';
import { UxgWizardPage } from '../wizard-page/wizard-page.component';
import { PageCollectionService } from './page-collection.service';
import { Subject, Observable, Subscription } from 'rxjs';
import { ButtonHubService } from './button-hub.service';

@Injectable()
export class WizardNavigationService implements OnDestroy {
  public previousButtonSubscription: Subscription;

  public nextButtonSubscription: Subscription;

  public doneButtonSubscription: Subscription;

  public cancelButtonSubscription: Subscription;

  private _currentChange = new Subject<UxgWizardPage>();

  public get currentPageChange(): Observable<UxgWizardPage> {
    return this._currentChange.asObservable();
  }

  public get currentPageTitle(): TemplateRef<any> {
    if (!this.currentPage) {
      return null;
    }
    return this.currentPage.title;
  }

  public get currentPageIsFirst(): boolean {
    return this.pageCollection.firstPage === this.currentPage;
  }

  public get currentPageIsLast(): boolean {
    return this.pageCollection.lastPage === this.currentPage;
  }

  private _currentPage: UxgWizardPage;

  get currentPage(): UxgWizardPage {
    if (!this._currentPage) {
      return null;
    }
    return this._currentPage;
  }

  set currentPage(page: UxgWizardPage) {
    if (this._currentPage !== page) {
      this._currentPage = page;
      page.onLoad.emit(page.id);
      this._currentChange.next(page);
    }
  }

  public setFirstPageCurrent() {
    this.currentPage = this.pageCollection.pagesAsArray[0];
  }

  constructor(public pageCollection: PageCollectionService, public buttonService: ButtonHubService) {
    this.previousButtonSubscription = this.buttonService.previousButtonClicked.subscribe(() => {
      const currentPage = this.currentPage;
      if (this.currentPageIsFirst || currentPage.previousStepDisabled) {
        return;
      }
      currentPage.previousButtonClicked.emit(currentPage);
      this.previous();
    });

    this.nextButtonSubscription = this.buttonService.nextButtonClicked.subscribe(() => {
      this.checkAndCommitCurrentPage('next');
    });

    this.doneButtonSubscription = this.buttonService.doneButtonClicked.subscribe(() => {
      this.checkAndCommitCurrentPage('done');
    });

    this.cancelButtonSubscription = this.buttonService.cancelButtonClicked.subscribe(() => {
      this.cancel();
    });
  }

  ngOnDestroy() {
    this.nextButtonSubscription.unsubscribe();
    this.previousButtonSubscription.unsubscribe();
    this.doneButtonSubscription.unsubscribe();
    this.cancelButtonSubscription.unsubscribe();
  }

  private _wizardDone = new Subject<boolean>();

  public get wizardDone(): Observable<boolean> {
    return this._wizardDone.asObservable();
  }

  private _wizardCancel = new Subject<any>();

  public get wizardCancel(): Observable<any> {
    return this._wizardCancel.asObservable();
  }

  public cancel() {
    this._wizardCancel.next();
  }

  private _movedToNextPage = new Subject<boolean>();

  public get movedToNextPage(): Observable<boolean> {
    return this._movedToNextPage.asObservable();
  }

  public next() {
    if (this.currentPageIsLast) {
      this.checkAndCommitCurrentPage('done');
    } else {
      this.checkAndCommitCurrentPage('next');
    }
  }

  public forceNext() {
    const currentPage: UxgWizardPage = this.currentPage;
    const nextPage: UxgWizardPage = this.pageCollection.getNextPage(currentPage);

    if (!nextPage) {
      throw new Error('The wizard has no next page to go to.');
    }

    this.currentPage = nextPage;
  }

  public checkAndCommitCurrentPage(buttonType: string) {
    const currentPage: UxgWizardPage = this.currentPage;

    let isNext: boolean = buttonType === 'next';
    let isDone: boolean = buttonType === 'done';

    if (isDone) {
      currentPage.doneButtonClicked.emit(currentPage);
    } else if (isNext) {
      currentPage.nextButtonClicked.emit();
    }

    //TODO: stuff

    if (isDone) {
      this._wizardDone.next();
    }

    if (isNext) {
      this.forceNext();
    }

    this._movedToNextPage.next(true);
  }

  private _movedToPreviousPage = new Subject<boolean>();

  public get movedToPreviousPage(): Observable<boolean> {
    return this._movedToPreviousPage.asObservable();
  }

  public previous() {
    let previousPage: UxgWizardPage;

    if (this.currentPageIsFirst) {
      return;
    }

    previousPage = this.pageCollection.getPreviousPage(this.currentPage);

    if (!previousPage) {
      return;
    }

    this._movedToPreviousPage.next(true);

    this.currentPage = previousPage;
  }

  public goTo(pageOrId: any) {
    let pageToGoTo: UxgWizardPage;
    let currentPage: UxgWizardPage;
    let pages: PageCollectionService;
    let pagesToCheck: UxgWizardPage[];
    let currentPageIndex: number;
    let goToPageIndex: number;
    let goingForward: boolean;

    pages = this.pageCollection;
    pageToGoTo = typeof pageOrId === 'string' ? pages.getPageById(pageOrId) : pageOrId;
    currentPage = this.currentPage;

    currentPageIndex = pages.getPageIndex(currentPage);
    goToPageIndex = pages.getPageIndex(pageToGoTo);
    goingForward = goToPageIndex > currentPageIndex;

    if (pageToGoTo === currentPage || pageToGoTo.disabled) {
      return;
    }

    pagesToCheck = pages.getPageRangeFromPages(this.currentPage, pageToGoTo);

    if (!pagesToCheck || pagesToCheck.length < 1) {
      return;
    }

    let canGo: boolean = true;
    pagesToCheck.forEach((page: UxgWizardPage) => {
      if (goingForward && !page.disabled && page.nextStepDisabled && page !== pageToGoTo) {
        canGo = false;
      } else if (!goingForward && !page.disabled && page.previousStepDisabled && page !== pageToGoTo) {
        canGo = false;
      }
    });

    if (!canGo) {
      return;
    }

    this.currentPage = pageToGoTo;
  }
}
