import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatInputModule, MatFormFieldModule, MatSelectModule, MatTooltipModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';

import { VectorMapDemoComponent } from './vector-map-demo.component';
import { VectorMapModule } from '@ffdc/uxg-angular-components/vector-map';
import { PaletteModule } from '@ffdc/uxg-angular-components/core';

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
        PaletteModule,
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

  it('should create ', () => {
    expect(component).toBeTruthy();
  });
});
