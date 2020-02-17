import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultiselectTagsComponent, MultiselectTag } from './multiselect-tags.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  template: `
    <uxg-multiselect-tags [data]="data" (changes)="updateMultiselectTags($event)" #demoMultiselectTags>
    </uxg-multiselect-tags>
  `
})
class WrapperComponent implements OnInit {
  data = [{ label: 'API' }, { label: 'SPI', isSelected: true }, { label: 'Service API' }];
  @ViewChild('demoMultiselectTags', { static: true }) multiSelectTagsFilter: any;

  ngOnInit() {}

  updateMultiselectTags($event: any) {}
}

describe('MultiselectTagsModule', () => {
  let component: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WrapperComponent, MultiselectTagsComponent],
      imports: [ReactiveFormsModule, CommonModule, MatIconModule, MatChipsModule, BrowserAnimationsModule]
    }).compileComponents();
    fixture = TestBed.createComponent(WrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get data', () => {
    const newData = component.multiSelectTagsFilter.data;
    expect(newData.length).toBe(component.data.length);
  });

  it('should add tag', () => {
    const spy = spyOn(component, 'updateMultiselectTags');
    const tag: MultiselectTag = component.data[0];
    component.multiSelectTagsFilter.onTagSelection(tag);
    expect(component.data[0].isSelected).toBe(true);
    expect(spy).toHaveBeenCalledWith({ added: [component.multiSelectTagsFilter.data[0]], removed: [] });
  });

  it('should remove tag', () => {
    const spy = spyOn(component, 'updateMultiselectTags');
    const tag: MultiselectTag = component.data[0];
    tag.isSelected = true;
    component.multiSelectTagsFilter.onTagSelection(tag);
    expect(component.data[0].isSelected).toBe(false);
    expect(spy).toHaveBeenCalledWith({ added: [], removed: [component.multiSelectTagsFilter.data[0]] });
  });
});
