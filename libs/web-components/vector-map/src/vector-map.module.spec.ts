import { waitForAsync, TestBed } from '@angular/core/testing';
import { VectorMapModule } from './vector-map.module';
import { LazyloadScriptService } from '@finastra/angular-components/core';
import { of } from 'rxjs';

describe('VectorMapModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [VectorMapModule],
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

  it('should create', () => {
    expect(VectorMapModule).toBeDefined();
  });
});
