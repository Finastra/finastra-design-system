import { Injectable, QueryList } from '@angular/core';
import { UxgWizardPage } from '../wizard-page/wizard-page.component';

@Injectable()
export class PageCollectionService {
  public pages: QueryList<UxgWizardPage>;

  public get pagesAsArray(): UxgWizardPage[] {
    return this.pages ? this.pages.toArray() : [];
  }

  public get pagesCount(): number {
    return this.pages ? this.pages.length : 0;
  }

  public get lastPage(): UxgWizardPage {
    const pageCount = this.pagesCount;

    if (pageCount < 1) {
      return;
    }

    return this.pagesAsArray[pageCount - 1];
  }

  public get firstPage(): UxgWizardPage {
    if (!this.pagesCount) {
      return;
    }

    return this.pagesAsArray[0];
  }

  public getPageById(id: string): UxgWizardPage {
    const foundPages: UxgWizardPage[] = this.pages.filter((page: UxgWizardPage) => id === page.id);
    return this.checkResults(foundPages, id);
  }

  public getPageByIndex(index: number): UxgWizardPage {
    const pageCount = this.pagesCount;
    const pagesLastIndex: number = pageCount > 1 ? pageCount - 1 : 0;

    if (index < 0) {
      throw new Error('Cannot retrieve page with index of ' + index);
    }

    if (index > pagesLastIndex) {
      throw new Error('Page index is greater than length of pages array.');
    }

    return this.pagesAsArray[index];
  }

  public getPageIndex(page: UxgWizardPage): number {
    const index = this.pagesAsArray.indexOf(page);

    if (index < 0) {
      throw new Error('Requested page cannot be found in collection of pages.');
    }

    return index;
  }

  private checkResults(results: UxgWizardPage[], requestedPageId: string) {
    const foundPagesCount: number = results.length || 0;

    if (foundPagesCount > 1) {
      throw new Error('More than one page has the requested id ' + requestedPageId + '.');
    } else if (foundPagesCount < 1) {
      throw new Error('No page can be found with the id ' + requestedPageId + '.');
    } else {
      return results[0];
    }
  }

  public pageRange(start: number, end: number): UxgWizardPage[] {
    let pages: UxgWizardPage[] = [];

    if (start < 0 || end < 0) {
      return [];
    }

    if (start === null || typeof start === 'undefined' || isNaN(start)) {
      return [];
    }

    if (end === null || typeof end === 'undefined' || isNaN(end)) {
      return [];
    }

    if (end > this.pagesCount) {
      end = this.pagesCount;
    }

    pages = this.pagesAsArray;

    if (end - start === 0) {
      return [this.getPageByIndex(start)];
    }

    end = end + 1;

    return pages.slice(start, end);
  }

  public getPageRangeFromPages(page: UxgWizardPage, otherPage: UxgWizardPage): UxgWizardPage[] {
    const pageIndex = this.getPageIndex(page);
    const otherPageIndex = this.getPageIndex(otherPage);
    let startIndex: number;
    let endIndex: number;

    if (pageIndex <= otherPageIndex) {
      startIndex = pageIndex;
      endIndex = otherPageIndex;
    } else {
      startIndex = otherPageIndex;
      endIndex = pageIndex;
    }
    return this.pageRange(startIndex, endIndex);
  }

  public getPreviousPage(page: UxgWizardPage) {
    const myPageIndex = this.getPageIndex(page);
    let previousPageIndex = myPageIndex - 1;
    let previousPage: UxgWizardPage;

    let valid = false;
    while (previousPageIndex >= 0) {
      previousPage = this.getPageByIndex(previousPageIndex);
      if (previousPage.disabled) {
        previousPageIndex--;
      } else {
        valid = true;
        break;
      }
    }

    if (!valid) {
      return null;
    }

    return previousPage;
  }

  public getNextPage(page: UxgWizardPage) {
    const myPageIndex = this.getPageIndex(page);
    let nextPageIndex = myPageIndex + 1;
    let nextPage: UxgWizardPage;

    let valid = false;
    while (nextPageIndex < this.pagesAsArray.length) {
      nextPage = this.getPageByIndex(nextPageIndex);
      if (nextPage.disabled) {
        nextPageIndex++;
      } else {
        valid = true;
        break;
      }
    }

    if (!valid) {
      return null;
    }

    return nextPage;
  }

  constructor() {}
}
