import {async, ComponentFixture, TestBed, inject, tick, fakeAsync} from '@angular/core/testing';
import {Component, ViewChild} from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {dispatchMouseEvent} from '@angular/cdk/testing';
import {ThemePalette} from '@angular/material/core';
import {MatSelect} from '@angular/material/select';
import {By} from '@angular/platform-browser';
// import {MatPaginatorModule, MatPaginator, MatPaginatorIntl} from './index';
import { PaginatorModule, PaginatorComponent } from './index';
import { MatPaginator } from '@angular/material';


describe('MatPaginator', () => {
  let fixture: ComponentFixture<MatPaginatorApp>;
  let component: MatPaginatorApp;
  let paginator: PaginatorComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        PaginatorModule,
        NoopAnimationsModule,
      ],
      declarations: [
        MatPaginatorApp,
        MatPaginatorWithoutPageSizeApp,
        MatPaginatorWithoutOptionsApp,
        MatPaginatorWithoutInputsApp,
        MatPaginatorWithStringValues
      ],
      providers: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatPaginatorApp);
    fixture.detectChanges();

    component = fixture.componentInstance;
    paginator = component.paginator;
  });

  describe('with the default internationalization provider', () => {
    it('should show the right range text', () => {
      const rangeElement = fixture.nativeElement.querySelector('.mat-paginator-range-label');

      // View second page of list of 100, each page contains 10 items.
      component.length = 100;
      component.pageSize = 10;
      component.pageIndex = 1;
      fixture.detectChanges();
      expect(rangeElement.innerText).toBe('11 - 20 of 100');

      // View third page of list of 200, each page contains 20 items.
      component.length = 200;
      component.pageSize = 20;
      component.pageIndex = 2;
      fixture.detectChanges();
      expect(rangeElement.innerText).toBe('41 - 60 of 200');

      // View first page of list of 0, each page contains 5 items.
      component.length = 0;
      component.pageSize = 5;
      component.pageIndex = 2;
      fixture.detectChanges();
      expect(rangeElement.innerText).toBe('0 of 0');

      // View third page of list of 12, each page contains 5 items.
      component.length = 12;
      component.pageSize = 5;
      component.pageIndex = 2;
      fixture.detectChanges();
      expect(rangeElement.innerText).toBe('11 - 12 of 12');

      // View third page of list of 10, each page contains 5 items.
      component.length = 10;
      component.pageSize = 5;
      component.pageIndex = 2;
      fixture.detectChanges();
      expect(rangeElement.innerText).toBe('11 - 15 of 10');

      // View third page of list of -5, each page contains 5 items.
      component.length = -5;
      component.pageSize = 5;
      component.pageIndex = 2;
      fixture.detectChanges();
      expect(rangeElement.innerText).toBe('11 - 15 of 0');
    });

    it('should show right aria-labels for select and buttons', () => {
      const select = fixture.nativeElement.querySelector('.mat-select');
      expect(select.getAttribute('aria-label')).toBe('Items per page:');

      expect(getPreviousButton(fixture).getAttribute('aria-label')).toBe('Previous page');
      expect(getNextButton(fixture).getAttribute('aria-label')).toBe('Next page');
    });

  });

  describe('when navigating with the next and previous buttons', () => {
    it('should be able to go to the next page', () => {
      expect(paginator.pageIndex).toBe(0);

      dispatchMouseEvent(getNextButton(fixture), 'click');

      expect(paginator.pageIndex).toBe(1);
      expect(component.pageEvent).toHaveBeenCalledWith(jasmine.objectContaining({
        previousPageIndex: 0,
        pageIndex: 1
      }));
    });

    it('should be able to go to the previous page', () => {
      paginator.pageIndex = 1;
      fixture.detectChanges();
      expect(paginator.pageIndex).toBe(1);

      dispatchMouseEvent(getPreviousButton(fixture), 'click');

      expect(paginator.pageIndex).toBe(0);
      expect(component.pageEvent).toHaveBeenCalledWith(jasmine.objectContaining({
        previousPageIndex: 1,
        pageIndex: 0
      }));
    });
  });

  it('should be able to show the first/last buttons', () => {
    expect(getFirstButton(fixture))
        .toBeNull();

    expect(getLastButton(fixture))
        .toBeNull();

    fixture.componentInstance.showFirstLastButtons = true;
    fixture.detectChanges();

    expect(getFirstButton(fixture))
        .toBeTruthy();

    expect(getLastButton(fixture))
        .toBeTruthy();
  });


  it('should be able to set the color of the form field', () => {
    const formField: HTMLElement = fixture.nativeElement.querySelector('.mat-form-field');

    expect(formField.classList).toContain('mat-primary');

    component.color = 'accent';
    fixture.detectChanges();

    expect(formField.classList).not.toContain('mat-primary');
    expect(formField.classList).toContain('mat-accent');
  });

  describe('when showing the first and last button', () => {

    beforeEach(() => {
      component.showFirstLastButtons = true;
      fixture.detectChanges();
    });

    it('should show right aria-labels for first/last buttons', () => {
      expect(getFirstButton(fixture).getAttribute('aria-label')).toBe('First page');
      expect(getLastButton(fixture).getAttribute('aria-label')).toBe('Last page');
    });

    it('should be able to go to the last page via the last page button', () => {
      expect(paginator.pageIndex).toBe(0);

      dispatchMouseEvent(getLastButton(fixture), 'click');

      expect(paginator.pageIndex).toBe(9);
      expect(component.pageEvent).toHaveBeenCalledWith(jasmine.objectContaining({
        previousPageIndex: 0,
        pageIndex: 9
      }));
    });

    it('should be able to go to the first page via the first page button', () => {
      paginator.pageIndex = 3;
      fixture.detectChanges();
      expect(paginator.pageIndex).toBe(3);

      dispatchMouseEvent(getFirstButton(fixture), 'click');

      expect(paginator.pageIndex).toBe(0);
      expect(component.pageEvent).toHaveBeenCalledWith(jasmine.objectContaining({
        previousPageIndex: 3,
        pageIndex: 0
      }));
    });



  it('should mark for check when inputs are changed directly', () => {
    const rangeElement = fixture.nativeElement.querySelector('.mat-paginator-range-label');

    expect(rangeElement.innerText).toBe('1 - 10 of 100');

    paginator.length = 99;
    fixture.detectChanges();
    expect(rangeElement.innerText).toBe('1 - 10 of 99');


    paginator.pageIndex = 1;
    fixture.detectChanges();
    expect(rangeElement.innerText).toBe('7 - 12 of 99');

  });

  it('should default the page size options to the page size if no options provided', () => {
    const withoutOptionsAppFixture = TestBed.createComponent(MatPaginatorWithoutOptionsApp);
    withoutOptionsAppFixture.detectChanges();

    expect(withoutOptionsAppFixture.componentInstance.paginator._displayedPageSizeOptions)
        .toEqual([10]);
  });

  it('should default the page size to the first page size option if not provided', () => {
    const withoutPageSizeAppFixture = TestBed.createComponent(MatPaginatorWithoutPageSizeApp);
    withoutPageSizeAppFixture.detectChanges();

    expect(withoutPageSizeAppFixture.componentInstance.paginator.pageSize).toEqual(10);
  });


  it('should handle the number inputs being passed in as strings', () => {
    const withStringFixture = TestBed.createComponent(MatPaginatorWithStringValues);
    withStringFixture.detectChanges();

    const withStringPaginator = withStringFixture.componentInstance.paginator;
    expect(withStringPaginator.pageIndex).toEqual(0);
    expect(withStringPaginator.length).toEqual(100);
    expect(withStringPaginator.pageSize).toEqual(10);
    expect(withStringPaginator.pageSizeOptions).toEqual([5, 10, 25, 100]);
  });

  it('should be able to disable all the controls in the paginator via the binding', () => {
    const select: MatSelect = fixture.debugElement.query(By.directive(MatSelect)).componentInstance;

    fixture.componentInstance.pageIndex = 1;
    fixture.componentInstance.showFirstLastButtons = true;
    fixture.detectChanges();

    expect(select.disabled).toBe(false);
    expect(getPreviousButton(fixture).hasAttribute('disabled')).toBe(false);
    expect(getNextButton(fixture).hasAttribute('disabled')).toBe(false);
    expect(getFirstButton(fixture).hasAttribute('disabled')).toBe(false);
    expect(getLastButton(fixture).hasAttribute('disabled')).toBe(false);

    fixture.componentInstance.disabled = true;
    fixture.detectChanges();

    expect(select.disabled).toBe(true);
    expect(getPreviousButton(fixture).hasAttribute('disabled')).toBe(true);
    expect(getNextButton(fixture).hasAttribute('disabled')).toBe(true);
    expect(getFirstButton(fixture).hasAttribute('disabled')).toBe(true);
    expect(getLastButton(fixture).hasAttribute('disabled')).toBe(true);
  });

});

function getPreviousButton(fixture: ComponentFixture<any>) {
  return fixture.nativeElement.querySelector('.mat-paginator-navigation-previous');
}

function getNextButton(fixture: ComponentFixture<any>) {
  return fixture.nativeElement.querySelector('.mat-paginator-navigation-next');
}

function getFirstButton(fixture: ComponentFixture<any>) {
    return fixture.nativeElement.querySelector('.mat-paginator-navigation-first');
}

function getLastButton(fixture: ComponentFixture<any>) {
    return fixture.nativeElement.querySelector('.mat-paginator-navigation-last');
}

@Component({
  template: `
    <mat-paginator [pageIndex]="pageIndex"
                   [pageSize]="pageSize"
                   [pageSizeOptions]="pageSizeOptions"
                   [hidePageSize]="hidePageSize"
                   [showFirstLastButtons]="showFirstLastButtons"
                   [length]="length"
                   [color]="color"
                   [disabled]="disabled"
                   (page)="pageEvent($event)">
    </mat-paginator>
  `,
})
class MatPaginatorApp {
  pageIndex = 0;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];
  hidePageSize = false;
  showFirstLastButtons = false;
  length = 100;
  disabled: boolean;
  pageEvent = jasmine.createSpy('page event');
  color: ThemePalette;

  @ViewChild(MatPaginator, {static: false}) paginator: PaginatorComponent;

  goToLastPage() {
    this.pageIndex = Math.ceil(this.length / this.pageSize) - 1;
  }
}

@Component({
  template: `
    <mat-paginator></mat-paginator>
  `,
})
class MatPaginatorWithoutInputsApp {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
}

@Component({
  template: `
    <mat-paginator [pageSizeOptions]="[10, 20, 30]"></mat-paginator>
  `,
})
class MatPaginatorWithoutPageSizeApp {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
}

@Component({
  template: `
    <mat-paginator [pageSize]="10"></mat-paginator>
  `,
})
class MatPaginatorWithoutOptionsApp {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
}

@Component({
  template: `
    <mat-paginator pageIndex="0"
                   pageSize="10"
                   [pageSizeOptions]="['5', '10', '25', '100']"
                   length="100">
    </mat-paginator>
  `
  })
class MatPaginatorWithStringValues {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
}