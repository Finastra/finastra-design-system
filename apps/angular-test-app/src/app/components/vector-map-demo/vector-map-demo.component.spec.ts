import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';

import { VectorMapDemoComponent } from './vector-map-demo.component';
import { VectorMapModule } from '@finastra/angular-components/vector-map';
import { PaletteModule } from '@finastra/angular-components/core';
import { LazyloadScriptService } from '@finastra/angular-components/core';
import { of } from 'rxjs';

describe('VectorMapDemoComponent', () => {
  let component: VectorMapDemoComponent;
  let fixture: ComponentFixture<VectorMapDemoComponent>;

  beforeEach(
    waitForAsync(() => {
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
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(VectorMapDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create ', () => {
    expect(component).toBeTruthy();
  });
});
