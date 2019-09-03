import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollToTopComponent } from './scroll-to-top.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ScrollToTopComponent', () => {
  let component: ScrollToTopComponent;
  let fixture: ComponentFixture<ScrollToTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, CommonModule, MatButtonModule, MatIconModule],
      declarations: [ScrollToTopComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollToTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
