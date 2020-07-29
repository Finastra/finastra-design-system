import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponetDemoComponent } from './my-componet-demo.component';

describe('MyComponetDemoComponent', () => {
  let component: MyComponetDemoComponent;
  let fixture: ComponentFixture<MyComponetDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComponetDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComponetDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
