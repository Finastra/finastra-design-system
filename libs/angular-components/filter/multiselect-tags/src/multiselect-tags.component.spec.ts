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
  data: MultiselectTag[] = [{ label: 'API' }, { label: 'SPI', isSelected: true }, { label: 'Service API' }];
  @ViewChild('demoMultiselectTags', { static: true }) component: any;

  ngOnInit() {}

  updateMultiselectTags($event: any) {}
}

describe('MultiselectTagsModule', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WrapperComponent, MultiselectTagsComponent],
      imports: [ReactiveFormsModule, CommonModule, MatIconModule, MatChipsModule, BrowserAnimationsModule]
    }).compileComponents();
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should get data', () => {
    const newData = wrapper.component.data;
    expect(newData.length).toBe(wrapper.data.length);
  });

  it('should add tag', () => {
    const spy = spyOn(wrapper, 'updateMultiselectTags');
    const tag: MultiselectTag = wrapper.component.data[0];

    wrapper.component.onTagSelection(tag);

    expect(wrapper.component.data[0].isSelected).toBe(true);
    expect(spy).toHaveBeenCalledWith({ added: [wrapper.component.data[0]], removed: [] });
  });

  it('should remove tag', () => {
    const spy = spyOn(wrapper, 'updateMultiselectTags');
    const tag: MultiselectTag = wrapper.component.data[0];

    tag.isSelected = true;
    wrapper.component.onTagSelection(tag);

    expect(wrapper.component.data[0].isSelected).toBe(false);
    expect(spy).toHaveBeenCalledWith({ added: [], removed: [wrapper.component.data[0]] });
  });
});
