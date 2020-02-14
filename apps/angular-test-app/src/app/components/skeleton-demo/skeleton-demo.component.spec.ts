import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SkeletonDemoComponent } from './skeleton-demo.component';
import { SkeletonTextModule } from '@ffdc/uxg-angular-components/skeleton-text';

describe('SkeletonDemoComponent', () => {
  let component: SkeletonDemoComponent;
  let fixture: ComponentFixture<SkeletonDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SkeletonTextModule],
      declarations: [SkeletonDemoComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkeletonDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
