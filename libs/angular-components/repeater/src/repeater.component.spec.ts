import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeaterComponent } from './repeater.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ScrollingModule as ExperimentalScrollingModule } from '@angular/cdk-experimental/scrolling';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { ComponentRepeaterComponent } from './component-repeater/component-repeater.component';
import { Component, DebugElement, Type, NgModule, SimpleChange } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RepeaterModule } from './repeater.module';

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

describe('RepeaterComponent', () => {
  let component: RepeaterComponent;
  let fixture: ComponentFixture<RepeaterComponent>;

  const data = [
    {
      network: 'Visa',
      number: '4897 8291 0707 2480',
      cvv: 264,
      pin: 6174,
      balance: '$7631',
      'expiration-date': '4/25',
      name: 'Fred Weaver',
      address: "St. Joseph's Street 9879",
      country: 'Angola'
    },
    {
      network: 'American Express',
      number: '3704 474792 65600',
      cvv: 3339,
      pin: 6972,
      balance: '$9877',
      'expiration-date': '12/21',
      name: 'Roosevelt Fox',
      address: 'Borthwick Street 7058',
      country: 'Sweden'
    },
    {
      network: 'Mastercard',
      number: '2437 6934 0440 3694',
      cvv: 648,
      pin: 3159,
      balance: '$17694',
      'expiration-date': '3/23',
      name: 'Emmett Wagner',
      address: 'Cavaye Place 5408',
      country: 'Cameroon'
    },
    {
      network: 'Visa',
      number: '4138 1119 2661 0488',
      cvv: 305,
      pin: 2774,
      balance: '$2640',
      'expiration-date': '5/21',
      name: 'Nylah Nash',
      address: 'Whichcote Street 5701',
      country: 'Rwanda'
    },
    {
      network: 'Maestro',
      number: '6761 0399 6317 0349',
      cvv: 141,
      pin: 8372,
      balance: '$7047',
      'expiration-date': '6/22',
      name: 'Jacqueline Stevenson',
      address: 'Plympton Place 3116',
      country: 'Fiji'
    },
    {
      network: 'Visa',
      number: '4115 7635 4415 6505',
      cvv: 396,
      pin: 3553,
      balance: '$7192',
      'expiration-date': '11/26',
      name: 'Micah Morrison',
      address: 'Langford Close 5508',
      country: 'Romania'
    },
    {
      network: 'Visa',
      number: '4399 3597 6596 4888',
      cvv: 977,
      pin: 8479,
      balance: '$19552',
      'expiration-date': '4/21',
      name: 'Vince Stone',
      address: 'Chelsea Manor Gardens 5397',
      country: 'Reunion'
    },
    {
      network: 'American Express',
      number: '3479 563642 42540',
      cvv: 8716,
      pin: 1550,
      balance: '$14311',
      'expiration-date': '10/19',
      name: 'Angelique Spencer',
      address: 'Connaught Close 4792',
      country: 'Singapore'
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepeaterComponent, ComponentRepeaterComponent],
      imports: [FakeMockCardNgModule, CommonModule, MatTableModule, ScrollingModule, ExperimentalScrollingModule]
    }).compileComponents();
    fixture = TestBed.createComponent(RepeaterComponent);
    component = fixture.componentInstance;
    component.data = data;
    fixture.detectChanges();
  });

  it('should create Repeater Component', () => {
    expect(component).toBeTruthy();
  });

  it('should repeat MockCardComponent', () => {
    const componentR: Type<any> = MockCardComponent;

    component.component = componentR;
    component.ngOnChanges({
      component: new SimpleChange(null, component.component, true)
    });

    fixture.detectChanges();
    expect(fixture.debugElement.query(By.directive(MockCardComponent))).toBeTruthy();
  });

  it('should display MockCardComponent verticaly', () => {
    const componentR: Type<any> = MockCardComponent;

    component.component = componentR;
    component.orientation = 'vertical';
    component.ngOnChanges({
      component: new SimpleChange(null, component.component, true),
      orientation: new SimpleChange(null, component.orientation, true)
    });

    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.cdk-virtual-scroll-orientation-horizontal'))).toBeFalsy();
  });

  it('should switch from Single Select to Multi Select', () => {
    component.selectedItems = { 0: data[0] };

    component.multiSelect = true;
    component.ngOnChanges({
      multiSelect: new SimpleChange(null, component.multiSelect, true)
    });

    fixture.detectChanges();
    expect(component.selectedItems[0]).toBeFalsy();
  });

  it('should emit an event with one item when click is trigger and multiselect is false', () => {
    const componentR: Type<any> = MockCardComponent;

    component.component = componentR;
    component.ngOnChanges({
      component: new SimpleChange(null, component.component, true)
    });
    fixture.detectChanges();

    const button = fixture.debugElement.query(By.css('.repeater-item'));
    spyOn(component.selectionChange, 'emit');
    button.nativeElement.click();

    const expectedObj = { value: { '0': data[0] } };
    expect(component.selectionChange.emit).toHaveBeenCalledWith(expectedObj);
  });

  it('should emit an event with 2 item when click is trigger twice and multiselect is true', () => {
    const componentR: Type<any> = MockCardComponent;

    component.component = componentR;
    component.multiSelect = true;
    component.ngOnChanges({
      component: new SimpleChange(null, component.component, true),
      multiSelect: new SimpleChange(null, component.multiSelect, true)
    });
    fixture.detectChanges();

    const buttons = fixture.debugElement.queryAll(By.css('.repeater-item'));

    const button1 = buttons[0];
    const button2 = buttons[1];
    spyOn(component.selectionChange, 'emit');
    button1.nativeElement.click();
    button2.nativeElement.click();

    const expectedObj = { value: { '0': data[0], '1': data[1] } };
    expect(component.selectionChange.emit).toHaveBeenCalledWith(expectedObj);
  });

  it('should set default selection', () => {
    const componentR: Type<any> = MockCardComponent;

    component.component = componentR;
    component.selectedKeys = [0, 3];
    component.multiSelect = true;
    component.ngOnChanges({
      component: new SimpleChange(null, component.component, true),
      selectedKeys: new SimpleChange(null, component.selectedKeys, true)
    });

    fixture.detectChanges();
    expect(component.selectedItems[0]).toBeTruthy();
    expect(component.selectedItems[3]).toBeTruthy();
    expect(Object.keys(component.selectedItems).length).toBe(2);
  });
});
