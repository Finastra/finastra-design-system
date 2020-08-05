import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, Type, OnDestroy } from '@angular/core';
import { RepeaterCardExampleComponent } from './repeater-card-example/repeater-card-example.component';
import { RepeaterCardAdvancedExampleComponent } from './repeater-card-advanced-example/repeater-card-advanced-example.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { RepeaterCardChartExampleComponent } from './repeater-card-chart-example/repeater-card-chart-example.component';

const ELEMENT_DATA_TRADE: any[] = [
  {
    forex: 'Gold',
    buy: '1497.89',
    sell: '1497.9'
  },
  {
    forex: 'German30',
    buy: '1497.89',
    sell: '1497.9'
  },
  {
    forex: 'UK100',
    buy: '1497.89',
    sell: '1497.9'
  },
  {
    forex: 'EUR/USD',
    buy: '1497.89',
    sell: '1497.9'
  },
  {
    forex: 'USD/JPY',
    buy: '1497.89',
    sell: '1497.9'
  },
  {
    forex: 'USD/CHF',
    buy: '1497.89',
    sell: '1497.9'
  },
  {
    forex: 'USD/CHF',
    buy: '1497.89',
    sell: '1497.9'
  },
  {
    forex: 'USD/CHF',
    buy: '1497.89',
    sell: '1497.9'
  }
];

const ELEMENT_DATA: any[] = [
  {
    network: 'Visa',
    number: '4897 8291 0707 2480',
    cvv: 264,
    pin: 6174,
    balance: '$7631',
    'expiration-date': '4/25',
    name: 'Fred Weaver',
    address: "St. Joseph's Street 9879",
    country: 'Angola',
    historic: [1460, 1956, 2274, 5055, 5573, 6441, 6473, 7246, 7965, 9850],
    photo: 'https://randomuser.me/api/portraits/men/1.jpg'
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
    country: 'Sweden',
    historic: [556, 845, 1868, 3233, 4650, 5059, 5493, 7540, 8311, 9982],
    photo: 'https://randomuser.me/api/portraits/men/2.jpg'
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
    country: 'Cameroon',
    historic: [1426, 2488, 4414, 4801, 5003, 7143, 8063, 8250, 8948, 9432],
    photo: 'https://randomuser.me/api/portraits/men/3.jpg'
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
    country: 'Rwanda',
    historic: [1735, 2065, 2426, 2864, 3181, 5072, 5224, 8112, 9410, 9813],
    photo: 'https://randomuser.me/api/portraits/women/4.jpg'
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
    country: 'Fiji',
    historic: [1298, 2101, 3019, 3962, 5237, 5675, 7554, 8618, 8906, 9023],
    photo: 'https://randomuser.me/api/portraits/women/5.jpg'
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
    country: 'Romania',
    historic: [403, 652, 1008, 1698, 2267, 3654, 5205, 6861, 7974, 8413],
    photo: 'https://randomuser.me/api/portraits/men/6.jpg'
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
    country: 'Reunion',
    historic: [1, 369, 1281, 3618, 4230, 5059, 5138, 7838, 7906, 9655],
    photo: 'https://randomuser.me/api/portraits/men/7.jpg'
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
    country: 'Singapore',
    historic: [1515, 1923, 4204, 5451, 5579, 7416, 7537, 8356, 9132, 9673],
    photo: 'https://randomuser.me/api/portraits/women/8.jpg'
  },
  {
    network: 'Mastercard',
    number: '2261 5264 0034 8235',
    cvv: 331,
    pin: 2400,
    balance: '$6054',
    'expiration-date': '8/20',
    name: 'Elisabeth Parrish',
    address: 'Union Walk 9851',
    country: 'Malaysia',
    historic: [608, 1089, 2136, 2405, 2677, 3395, 6527, 6869, 7695, 7772],
    photo: 'https://randomuser.me/api/portraits/women/9.jpg'
  },
  {
    network: 'American Express',
    number: '3747 074990 87383',
    cvv: 2800,
    pin: 2101,
    balance: '$2755',
    'expiration-date': '1/24',
    name: 'Teagan Contreras',
    address: 'Chalcot Square 2175',
    country: 'Azerbaijan',
    historic: [1460, 1956, 2274, 5055, 5573, 6441, 6473, 7246, 7965, 9850],
    photo: 'https://randomuser.me/api/portraits/men/10.jpg'
  },
  {
    network: 'Mastercard',
    number: '2393 5529 7579 0701',
    cvv: 662,
    pin: 5646,
    balance: '$1553',
    'expiration-date': '2/22',
    name: 'Jean Sullivan',
    address: 'Somertrees Avenue 8292',
    country: 'Kuwait',
    historic: [5, 105, 1496, 2273, 3231, 5446, 6945, 7775, 8873, 9575],
    photo: 'https://randomuser.me/api/portraits/men/11.jpg'
  },
  {
    network: 'Mastercard',
    number: '2626 8533 4478 8031',
    cvv: 401,
    pin: 9119,
    balance: '$9557',
    'expiration-date': '12/21',
    name: 'Darius Hurst',
    address: 'St. Edmunds Close 5167',
    country: 'Luxembourg',
    historic: [1092, 1509, 1640, 1890, 1896, 2809, 3387, 4931, 6142, 8591],
    photo: 'https://randomuser.me/api/portraits/men/12.jpg'
  },
  {
    network: 'American Express',
    number: '3402 870170 60585',
    cvv: 7704,
    pin: 4554,
    balance: '$3568',
    'expiration-date': '2/23',
    name: 'Silas Weaver',
    address: 'Highway, The 7446',
    country: 'Sweden',
    historic: [1839, 3193, 3678, 4136, 4645, 4862, 5664, 8475, 8512, 9999],
    photo: 'https://randomuser.me/api/portraits/men/13.jpg'
  },
  {
    network: 'Maestro',
    number: '5018 6532 3194 7677',
    cvv: 184,
    pin: 3522,
    balance: '$14624',
    'expiration-date': '7/22',
    name: 'Tad Norris',
    address: 'Broadbent Street 6737',
    country: 'Western Sahara',
    historic: [1460, 1956, 2274, 5055, 5573, 6441, 6473, 7246, 7965, 9850],
    photo: 'https://randomuser.me/api/portraits/men/14.jpg'
  },
  {
    network: 'Maestro',
    number: '0604 7347 5421 0544',
    cvv: 101,
    pin: 1454,
    balance: '$5445',
    'expiration-date': '4/25',
    name: 'Porfirio Day',
    address: "St. Peter's Way 1705",
    country: 'Argentina',
    historic: [1762, 2372, 2865, 3007, 3032, 3881, 4622, 6915, 8038, 9400],
    photo: 'https://randomuser.me/api/portraits/men/15.jpg'
  },
  {
    network: 'American Express',
    number: '3754 803039 88985',
    cvv: 8524,
    pin: 6575,
    balance: '$18017',
    'expiration-date': '2/23',
    name: 'Larry Burke',
    address: 'Priter Way 7026',
    country: 'Thailand',
    historic: [1460, 1956, 2274, 5055, 5573, 6441, 6473, 7246, 7965, 9850],
    photo: 'https://randomuser.me/api/portraits/men/16.jpg'
  },
  {
    network: 'American Express',
    number: '3449 031760 57735',
    cvv: 9379,
    pin: 4179,
    balance: '$14710',
    'expiration-date': '9/18',
    name: 'Santos Davidson',
    address: 'Snowden Street 1428',
    country: 'Pitcairn',
    historic: [450, 878, 1107, 1481, 2357, 5587, 6820, 7725, 8263, 9007],
    photo: 'https://randomuser.me/api/portraits/men/17.jpg'
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

const COLUMNS2: any[] = [
  { name: 'forex', type: 'string', align: 'left' },
  { name: 'sell', type: 'string', align: 'left' },
  { name: 'buy', type: 'string', align: 'left' }
];

const TEMPLATES_DATA: any[] = [
  {
    component: RepeaterCardExampleComponent,
    displayName: 'UXG Card',
    columnsMatcher: {
      title: 'name',
      subtitle: 'address',
      photoPath: 'photo'
    },
    space: '10px'
  },
  {
    component: RepeaterCardChartExampleComponent,
    displayName: 'D3 chart',
    columnsMatcher: {
      forex: 'forex',
      buy: 'buy',
      sell: 'sell'
    },
    space: '1px',
    datasource: '2'
  },
  {
    component: RepeaterCardAdvancedExampleComponent,
    displayName: 'Code Pen Card',
    columnsMatcher: {
      bankName: 'network',
      name: 'name',
      date: 'expiration-date',
      cid: 'cvv',
      number: 'number'
    },
    space: '20px'
  }
];

@Component({
  selector: 'ffdc-repeater-demo',
  templateUrl: './repeater-demo.component.html',
  styleUrls: ['./repeater-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class RepeaterDemoComponent implements OnInit, OnDestroy {
  dataSource = ELEMENT_DATA; //data
  dataSource2 = ELEMENT_DATA_TRADE; //data
  columns = COLUMNS;
  columns2 = COLUMNS2;
  templatesData = TEMPLATES_DATA;

  columnsExample = this.columns;
  dataSourceExample = this.dataSource;
  componentExample!: Type<any>;
  columnsMatcherExample!: Object;
  orientationExample = 'horizontal';
  spaceExample!: string;
  multiselectExample = true;

  actionDescription!: string;

  currentTemplate: any = this.templatesData[0];

  repeaterConfigurationForm: FormGroup;
  private destroyed$ = new Subject<void>();

  get templateFieldsConfig() {
    return this.repeaterConfigurationForm.get('templateFieldsConfig')!;
  }

  constructor(private fb: FormBuilder) {
    this.repeaterConfigurationForm = this.fb.group({
      templateFieldsConfig: {}
    });

    this.templateFieldsConfig.valueChanges.pipe(takeUntil(this.destroyed$)).subscribe((value) => {
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
    if (this.currentTemplate.datasource === '2') {
      this.dataSourceExample = this.dataSource2;
      this.columnsExample = this.columns2;
    } else {
      this.dataSourceExample = this.dataSource;
      this.columnsExample = this.columns;
    }
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
