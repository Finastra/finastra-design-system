import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardDemoComponent } from './wizard-demo.component';
import { WizardModule } from '@ffdc/uxg-angular-components';
import { MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('WizardDemoComponent', () => {
  let component: WizardDemoComponent;
  let fixture: ComponentFixture<WizardDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, MatIconModule, WizardModule],
      declarations: [WizardDemoComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
