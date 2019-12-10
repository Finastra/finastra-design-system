import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxgWizard } from './wizard.component';

describe('UxgWizard', () => {
  let component: UxgWizard;
  let fixture: ComponentFixture<UxgWizard>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UxgWizard]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxgWizard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
