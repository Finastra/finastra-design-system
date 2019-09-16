import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeaterComponent } from './repeater.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ScrollingModule as ExperimentalScrollingModule} from '@angular/cdk-experimental/scrolling';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material';
import { ComponentRepeaterComponent } from './component-repeater/component-repeater.component';
import { Component} from '@angular/core';

@Component({
  selector: 'mock-card',
  template: '<p>Mock Product Editor Component</p>'
})
class MockCardComponent {}

describe('RepeaterComponent', () => {
  let component: RepeaterComponent;
  let fixture: ComponentFixture<RepeaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepeaterComponent, ComponentRepeaterComponent,MockCardComponent ],
      imports: [CommonModule, MatTableModule, ScrollingModule, ExperimentalScrollingModule]
    })
    
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepeaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Repeater Component', () => {
      expect(component).toBeTruthy();    
  });

  it('should create Repeater Component', () => {
    expect(component).toBeTruthy();    
  });
});
