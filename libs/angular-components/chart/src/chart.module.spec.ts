import { async, TestBed } from '@angular/core/testing';
import { ChartModule } from './chart.module';
import { LazyloadScriptService } from '@ffdc/uxg-angular-components/core';
import { of } from 'rxjs';

describe('ChartModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ChartModule],
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
  }));

  it('should create', () => {
    expect(ChartModule).toBeDefined();
  });
});
