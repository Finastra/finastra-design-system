import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, ComponentFactory, ComponentFactoryResolver, Type, OnChanges, SimpleChanges, Input, OnDestroy } from '@angular/core';
import { RepeaterCardExampleComponent } from './repeater-card-example/repeater-card-example.component';
import { RepeaterCardAdvancedExampleComponent } from './repeater-card-advanced-example/repeater-card-advanced-example.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
const ELEMENT_DATA: any[] = [
  {

    "network": "Visa",
    "number": "4897 8291 0707 2480",
    "cvv": 264,
    "pin": 6174,
    "balance": "$7631",
    "expiration-date": "4/25",
    "name": "Fred Weaver",
    "address": "St. Joseph's Street 9879",
    "country": "Angola"
  },
  {
    "network": "American Express",
    "number": "3704 474792 65600",
    "cvv": 3339,
    "pin": 6972,
    "balance": "$9877",
    "expiration-date": "12/21",
    "name": "Roosevelt Fox",
    "address": "Borthwick Street 7058",
    "country": "Sweden"
  },
  {
    "network": "Mastercard",
    "number": "2437 6934 0440 3694",
    "cvv": 648,
    "pin": 3159,
    "balance": "$17694",
    "expiration-date": "3/23",
    "name": "Emmett Wagner",
    "address": "Cavaye Place 5408",
    "country": "Cameroon"
  },
  {
    "network": "Visa",
    "number": "4138 1119 2661 0488",
    "cvv": 305,
    "pin": 2774,
    "balance": "$2640",
    "expiration-date": "5/21",
    "name": "Nylah Nash",
    "address": "Whichcote Street 5701",
    "country": "Rwanda"
  },
  {
    "network": "Maestro",
    "number": "6761 0399 6317 0349",
    "cvv": 141,
    "pin": 8372,
    "balance": "$7047",
    "expiration-date": "6/22",
    "name": "Jacqueline Stevenson",
    "address": "Plympton Place 3116",
    "country": "Fiji"
  },
  {
    "network": "Visa",
    "number": "4115 7635 4415 6505",
    "cvv": 396,
    "pin": 3553,
    "balance": "$7192",
    "expiration-date": "11/26",
    "name": "Micah Morrison",
    "address": "Langford Close 5508",
    "country": "Romania"
  },
  {
    "network": "Visa",
    "number": "4399 3597 6596 4888",
    "cvv": 977,
    "pin": 8479,
    "balance": "$19552",
    "expiration-date": "4/21",
    "name": "Vince Stone",
    "address": "Chelsea Manor Gardens 5397",
    "country": "Reunion"
  },
  {
    "network": "American Express",
    "number": "3479 563642 42540",
    "cvv": 8716,
    "pin": 1550,
    "balance": "$14311",
    "expiration-date": "10/19",
    "name": "Angelique Spencer",
    "address": "Connaught Close 4792",
    "country": "Singapore"
  },
  {
    "network": "Mastercard",
    "number": "2261 5264 0034 8235",
    "cvv": 331,
    "pin": 2400,
    "balance": "$6054",
    "expiration-date": "8/20",
    "name": "Elisabeth Parrish",
    "address": "Union Walk 9851",
    "country": "Malaysia"
  },
  {
    "network": "American Express",
    "number": "3747 074990 87383",
    "cvv": 2800,
    "pin": 2101,
    "balance": "$2755",
    "expiration-date": "1/24",
    "name": "Teagan Contreras",
    "address": "Chalcot Square 2175",
    "country": "Azerbaijan"
  },
  {
    "network": "Mastercard",
    "number": "2393 5529 7579 0701",
    "cvv": 662,
    "pin": 5646,
    "balance": "$1553",
    "expiration-date": "2/22",
    "name": "Jean Sullivan",
    "address": "Somertrees Avenue 8292",
    "country": "Kuwait"
  },
  {
    "network": "Mastercard",
    "number": "2626 8533 4478 8031",
    "cvv": 401,
    "pin": 9119,
    "balance": "$9557",
    "expiration-date": "12/21",
    "name": "Darius Hurst",
    "address": "St. Edmunds Close 5167",
    "country": "Luxembourg"
  },
  {
    "network": "American Express",
    "number": "3402 870170 60585",
    "cvv": 7704,
    "pin": 4554,
    "balance": "$3568",
    "expiration-date": "2/23",
    "name": "Silas Weaver",
    "address": "Highway, The 7446",
    "country": "Sweden"
  },
  {
    "network": "Maestro",
    "number": "5018 6532 3194 7677",
    "cvv": 184,
    "pin": 3522,
    "balance": "$14624",
    "expiration-date": "7/22",
    "name": "Tad Norris",
    "address": "Broadbent Street 6737",
    "country": "Western Sahara"
  },
  {
    "network": "Maestro",
    "number": "0604 7347 5421 0544",
    "cvv": 101,
    "pin": 1454,
    "balance": "$5445",
    "expiration-date": "4/25",
    "name": "Porfirio Day",
    "address": "St. Peter's Way 1705",
    "country": "Argentina"
  },
  {
    "network": "American Express",
    "number": "3754 803039 88985",
    "cvv": 8524,
    "pin": 6575,
    "balance": "$18017",
    "expiration-date": "2/23",
    "name": "Larry Burke",
    "address": "Priter Way 7026",
    "country": "Thailand"
  },
  {
    "network": "American Express",
    "number": "3449 031760 57735",
    "cvv": 9379,
    "pin": 4179,
    "balance": "$14710",
    "expiration-date": "9/18",
    "name": "Santos Davidson",
    "address": "Snowden Street 1428",
    "country": "Pitcairn"
  }
];

const COLUMNS: any[] = [
  { name: 'network', type: 'string', align: 'left' },
  { name: 'number', type: 'string', align: 'left' },
  { name: 'cvv', type: 'number', align: 'left' },
  { name: 'pin', type: 'number', align: 'left' },
  { name: 'balance', type: 'string', align: 'left' },
  { name: 'expiration-date', type: 'string', align: 'left' },
  { name: 'name', type: 'string', align: 'left' },
  { name: 'address', type: 'string', align: 'left' },
  { name: 'country', type: 'number', align: 'right' }
];

const TEMPLATES_DATA: any[] = [
  {
    'component': RepeaterCardExampleComponent,
    'displayName': "UXG Card",
    'columnsMatcher': {
      "title": "name",
      "subtitle": "address"
    },
    'space': '10px'
  },
  {
    'component': RepeaterCardAdvancedExampleComponent,
    'displayName': "Code Pen Card",
    'columnsMatcher': {
      "bankName": "network",
      "name": "name",
      "date": "expiration-date",
      "cid": "cvv",
      "number":"number"
    },
    'space': '20px'
  }
]

@Component({
  selector: 'ffdc-repeater-demo',
  templateUrl: './repeater-demo.component.html',
  styleUrls: ['./repeater-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class RepeaterDemoComponent implements OnInit, OnDestroy {

  dataSource = ELEMENT_DATA; //data
  columns = COLUMNS;
  templatesData = TEMPLATES_DATA;

  componentExample: Type<any>;
  columnsMatcherExample: Object;
  orientationExample: string = 'horizontal';
  spaceExample: string;
  multiselectExample: boolean = true;

  actionDescription: string;

  currentTemplate: any = this.templatesData[0];

  repeaterConfigurationForm: FormGroup;
  private destroyed$ = new Subject<void>();

  api: string = "import {RepeaterModule} from '@ffdc/uxg-angular-components/repeater'";
  code:string;

  get templateFieldsConfig() {
    return this.repeaterConfigurationForm.get('templateFieldsConfig');
  }

  constructor(private fb: FormBuilder) {
    this.repeaterConfigurationForm = this.fb.group({
      templateFieldsConfig: {}
    });

    this.templateFieldsConfig.valueChanges.pipe(takeUntil(this.destroyed$)).subscribe(value => {
      this.columnsMatcherExample = value;
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
  ngOnInit() {
    this.updateTemplate();
  }

  updateTemplate() {
    this.componentExample = this.currentTemplate.component;
    this.columnsMatcherExample = this.currentTemplate.columnsMatcher;
    this.spaceExample = this.currentTemplate.space;
    this.templateFieldsConfig.patchValue(this.columnsMatcherExample);
  }

  displaySelection(data: any) {
    this.actionDescription = JSON.stringify(data);
  }

  compareWith(o1: any, o2: any): boolean {
    if (o1 && o2) {
      return o1.displayName === o2.displayName;
    } else {
      return o1 === o2;
    }
  }
}
