import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClickOutsideDirective } from './click-outside.directive';

@Component({
  template: '<div (uxgClickOutside)="count()"></div>'
})
class WrapperComponent {
  @ViewChild(ClickOutsideDirective) clickOutside!: ClickOutsideDirective;
  clickNr = 0;
  count() {
    this.clickNr++;
  }
}

describe('ClickOutsideDirective directive', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WrapperComponent, ClickOutsideDirective]
    }).compileComponents();

    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create testing component instance', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should count outside clicks', () => {
    const spy = jest.spyOn(wrapper.clickOutside, 'onClick');
    document.dispatchEvent(new MouseEvent('click'));

    expect(spy).toHaveBeenCalled();
    expect(wrapper.clickNr).toEqual(1);
  });
});
