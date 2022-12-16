import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { LazyloadScriptService, PaletteModule } from '@finastra/angular-components/core';
import { VectorMapModule } from '@finastra/angular-components/vector-map';
import { of } from 'rxjs';
import { VectorMapDemoComponent } from './vector-map-demo.component';

describe('VectorMapDemoComponent', () => {
  let component: VectorMapDemoComponent;
  let fixture: ComponentFixture<VectorMapDemoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        MatTooltipModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        PaletteModule,
        VectorMapModule,
        NoopAnimationsModule
      ],
      declarations: [VectorMapDemoComponent],
      providers: [
        {
          provide: LazyloadScriptService,
          useValue: {
            load: () => {
              return of((global as any).Plotly);
            }
          }
        }
      ],
      teardown: { destroyAfterEach: false }
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
