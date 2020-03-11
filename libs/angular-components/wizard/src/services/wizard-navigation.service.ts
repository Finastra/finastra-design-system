import { Injectable, OnDestroy, TemplateRef } from '@angular/core';
import { UxgWizardPageComponent } from '../wizard-page/wizard-page.component';
import { PageCollectionService } from './page-collection.service';
import { Subject, Observable, Subscription } from 'rxjs';
import { ButtonHubService } from './button-hub.service';

@Injectable()
export class WizardNavigationService implements OnDestroy {
  public previousButtonSubscription: Subscription;

  public nextButtonSubscription: Subscription;

  public doneButtonSubscription: Subscription;

  public cancelButtonSubscription: Subscription;

  private _currentChange = new Subject<UxgWizardPageComponent>();

  private _wizardDone = new Subject<boolean>();

  private _currentPage: UxgWizardPageComponent | null = null;

  private _wizardCancel = new Subject<any>();

  private _movedToNextPage = new Subject<boolean>();

  private _movedToPreviousPage = new Subject<boolean>();

  public get currentPageChange(): Observable<UxgWizardPageComponent> {
    return this._currentChange.asObservable();
  }

  public get currentPageTitle(): TemplateRef<any> | null {
    if (!this.currentPage) {
      return null;
    }
    return this.currentPage.title;
  }

  public get currentPageDescription(): TemplateRef<any> | null {
    if (!this.currentPage) {
      return null;
    }
    return this.currentPage.description;
  }

  public get currentPageIsFirst(): boolean {
    return this.pageCollection.firstPage === this.currentPage;
  }

  public get currentPageIsLast(): boolean {
    return this.pageCollection.lastPage === this.currentPage;
  }

  get currentPage(): UxgWizardPageComponent | null {
    return this._currentPage;
  }

  set currentPage(page: UxgWizardPageComponent | null) {
    if (page && this._currentPage !== page) {
      this._currentPage = page;
      page.load.emit(page.id);
      this._currentChange.next(page);
    }
  }

  public setFirstPageCurrent() {
    this.currentPage = this.pageCollection.pagesAsArray[0];
  }

  public get wizardDone(): Observable<boolean> {
    return this._wizardDone.asObservable();
  }

  public get wizardCancel(): Observable<any> {
    return this._wizardCancel.asObservable();
  }

  public cancel() {
    this._wizardCancel.next();
  }

  constructor(public pageCollection: PageCollectionService, public buttonService: ButtonHubService) {
    this.previousButtonSubscription = this.buttonService.previousButtonClicked.subscribe(() => {
      const currentPage = this.currentPage;
      if (!currentPage || this.currentPageIsFirst || currentPage.previousStepDisabled) {
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
    const currentPage = this.currentPage;
    const nextPage = this.pageCollection.getNextPage(currentPage);

    if (!nextPage) {
      throw new Error('The wizard has no next page to go to.');
    }

    this.currentPage = nextPage;
  }

  public checkAndCommitCurrentPage(buttonType: string) {
    const currentPage = this.currentPage;
    if (!currentPage) return;
    const isNext: boolean = buttonType === 'next';
    const isDone: boolean = buttonType === 'done';

    if (isDone) {
      currentPage.doneButtonClicked.emit(currentPage);
    } else if (isNext) {
      currentPage.nextButtonClicked.emit();
    }

    if (isDone) {
      this._wizardDone.next();
    }

    if (isNext) {
      this.forceNext();
    }

    this._movedToNextPage.next(true);
  }

  public get movedToPreviousPage(): Observable<boolean> {
    return this._movedToPreviousPage.asObservable();
  }

  public previous() {
    let previousPage: UxgWizardPageComponent | null;

    if (this.currentPageIsFirst || !this.currentPage) {
      return;
    }

    previousPage = this.pageCollection.getPreviousPage(this.currentPage);

    if (!previousPage) {
      return;
    }

    this._movedToPreviousPage.next(true);

    this.currentPage = previousPage;
  }

  public goTo(pageOrId: UxgWizardPageComponent | string) {
    let pageToGoTo: UxgWizardPageComponent;
    let currentPage: UxgWizardPageComponent;
    let pages: PageCollectionService;
    let pagesToCheck: UxgWizardPageComponent[];
    let currentPageIndex: number;
    let goToPageIndex: number;
    let goingForward: boolean;

    pages = this.pageCollection;
    pageToGoTo = typeof pageOrId === 'string' ? pages.getPageById(pageOrId) : pageOrId;
    if (!this.currentPage) return;
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

    let canGo = true;
    pagesToCheck.forEach((page: UxgWizardPageComponent) => {
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
