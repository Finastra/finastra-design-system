import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatInputModule, MatFormFieldModule, MatSelectModule, MatTooltipModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';

import { VectorMapDemoComponent } from './vector-map-demo.component';
import { VectorMapModule } from '@ffdc/uxg-angular-components/vector-map';

describe('VectorMapDemoComponent', () => {
  let component: VectorMapDemoComponent;
  let fixture: ComponentFixture<VectorMapDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        MatTooltipModule,
        FlexLayoutModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        VectorMapModule,
        BrowserAnimationsModule
      ],
      declarations: [VectorMapDemoComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VectorMapDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create demo table ', () => {
    expect(component).toBeTruthy();
  });
});
