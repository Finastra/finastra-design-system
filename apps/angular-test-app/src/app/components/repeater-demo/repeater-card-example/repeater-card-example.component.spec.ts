import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeaterCardExampleComponent } from './repeater-card-example.component';

describe('RepeaterCardExampleComponent', () => {
  let component: RepeaterCardExampleComponent;
  let fixture: ComponentFixture<RepeaterCardExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepeaterCardExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepeaterCardExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
