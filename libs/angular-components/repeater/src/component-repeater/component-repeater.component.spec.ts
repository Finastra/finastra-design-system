import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentRepeaterComponent } from './component-repeater.component';
import { Component, NgModule, Type, ComponentFactoryResolver } from '@angular/core';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'uxg-mock-card',
  template: '<p>Mock Card Component</p>'
})
class MockCardComponent {}

@NgModule({
  imports: [CommonModule],
  declarations: [MockCardComponent],
  entryComponents: [MockCardComponent]
})
export class FakeMockCardNgModule {}

describe('ComponentRepeaterComponent', () => {
  let component: ComponentRepeaterComponent;
  let fixture: ComponentFixture<ComponentRepeaterComponent>;
  let componentFactoryResolver: ComponentFactoryResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentRepeaterComponent],
      imports: [FakeMockCardNgModule, CommonModule]
    }).compileComponents();
    fixture = TestBed.createComponent(ComponentRepeaterComponent);
    component = fixture.componentInstance;
    componentFactoryResolver = fixture.debugElement.injector.get<ComponentFactoryResolver>(
      ComponentFactoryResolver as any
    );

    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should add MockCardComponent', () => {
    const componentR: Type<any> = MockCardComponent;
    const factory = componentFactoryResolver.resolveComponentFactory(componentR);
    component.factory = factory;
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('uxg-mock-card'))).toBeTruthy();
  });
});
