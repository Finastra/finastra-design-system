import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeaterCardAdvancedExampleComponent } from './repeater-card-advanced-example.component';

describe('RepeaterCardAdvancedExampleComponent', () => {
  let component: RepeaterCardAdvancedExampleComponent;
  let fixture: ComponentFixture<RepeaterCardAdvancedExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepeaterCardAdvancedExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepeaterCardAdvancedExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
