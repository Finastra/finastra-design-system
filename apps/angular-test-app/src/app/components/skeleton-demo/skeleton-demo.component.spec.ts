import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SkeletonDemoComponent } from './skeleton-demo.component';
import { SkeletonTextModule } from '@finastra/angular-components/skeleton-text';
import { MatCardModule } from '@angular/material/card';

describe('SkeletonDemoComponent', () => {
  let component: SkeletonDemoComponent;
  let fixture: ComponentFixture<SkeletonDemoComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [SkeletonTextModule, MatCardModule],
        declarations: [SkeletonDemoComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SkeletonDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
