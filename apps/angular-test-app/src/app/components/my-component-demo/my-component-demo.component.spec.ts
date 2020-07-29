import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponentDemoComponent } from './my-component-demo.component';

describe('MyComponentDemoComponent', () => {
  let component: MyComponentDemoComponent;
  let fixture: ComponentFixture<MyComponentDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyComponentDemoComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComponentDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
