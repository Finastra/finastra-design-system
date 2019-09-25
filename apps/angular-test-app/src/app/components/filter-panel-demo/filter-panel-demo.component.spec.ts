import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPanelDemoComponent } from './filter-panel-demo.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { ComponentsModule } from '@ffdc/uxg-angular-components';

describe('FilterPanelDemoComponent', () => {
  let component: FilterPanelDemoComponent;
  let fixture: ComponentFixture<FilterPanelDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        MaterialModule,
        ComponentsModule,
      ],
      declarations: [FilterPanelDemoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterPanelDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
