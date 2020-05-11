import {
  Component,
  OnInit,
  ViewChildren,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  QueryList,
  ChangeDetectorRef
} from '@angular/core';
import { UxgColumnType } from '@ffdc/uxg-angular-components/table';
import { ChartType } from '@ffdc/uxg-angular-components/chart';
import { VectorMapDataSource } from '@ffdc/uxg-angular-components/vector-map';
const ELEMENT_DATA: any[] = [
  {
    API: 'Exchange Rates',
    'End Point': 'End point 1',
    'Date Time': '01-10-2019',
    'Day of Week': 'Monday',
    'Hour of Day': '16h-17h',
    'Status Code': '200',
    'Error Response': 'OK',
    'No. of Calls': 3,
    Revenue: {
      currency: 'EUR',
      amount: 3
    }
  },
  {
    API: 'Exchange Rates',
    'End Point': 'End point 1',
    'Date Time': '02-01-2019',
    'Day of Week': 'Monday',
    'Hour of Day': '16h-17h',
    'Status Code': '400',
    'Error Response': 'Bad Request',
    'No. of Calls': 2,
    Revenue: {
      currency: 'EUR',
      amount: 2
    }
  },
  {
    API: 'Exchange Rates',
    'End Point': 'End point 1',
    'Date Time': '03-01-2019',
    'Day of Week': 'Monday',
    'Hour of Day': '17h-18h',
    'Status Code': '500',
    'Error Response': 'Server Error',
    'No. of Calls': 4,
    Revenue: {
      currency: 'EUR',
      amount: 4
    }
  },
  {
    API: 'Exchange Rates',
    'End Point': 'End point 1',
    'Date Time': '04-01-2019',
    'Day of Week': 'Monday',
    'Hour of Day': '17h-18h',
    'Status Code': '500',
    'Error Response': 'Bad Request',
    'No. of Calls': 7,
    Revenue: {
      currency: 'EUR',
      amount: 5
    }
  },
  {
    API: 'Exchange Rates',
    'End Point': 'End point 1',
    'Date Time': '05-01-2019',
    'Day of Week': 'Monday',
    'Hour of Day': '18h-19h',
    'Status Code': '200',
    'Error Response': 'OK',
    'No. of Calls': 6,
    Revenue: {
      currency: 'EUR',
      amount: 6
    }
  },
  {
    API: 'Exchange Rates',
    'End Point': 'End point 1',
    'Date Time': '06-01-2019',
    'Day of Week': 'Monday',
    'Hour of Day': '18h-19h',
    'Status Code': '400',
    'Error Response': 'OK',
    'No. of Calls': 8,
    Revenue: {
      currency: 'EUR',
      amount: 5
    }
  },
  {
    API: 'Exchange Rates',
    'End Point': 'End point 1',
    'Date Time': '07-01-2019',
    'Day of Week': 'Monday',
    'Hour of Day': '16h-17h',
    'Status Code': '500',
    'Error Response': 'OK',
    'No. of Calls': 1,
    Revenue: {
      currency: 'EUR',
      amount: 1
    }
  },
  {
    API: 'Exchange Rates',
    'End Point': 'End point 1',
    'Date Time': '08-01-2019',
    'Day of Week': 'Monday',
    'Hour of Day': '16h-17h',
    'Status Code': '200',
    'Error Response': 'OK',
    'No. of Calls': 3,
    Revenue: {
      currency: 'EUR',
      amount: 6
    }
  },
  {
    API: 'Exchange Rates',
    'End Point': 'End point 1',
    'Date Time': '09-01-2019',
    'Day of Week': 'Monday',
    'Hour of Day': '16h-17h',
    'Status Code': '200',
    'Error Response': 'OK',
    'No. of Calls': 3,
    Revenue: {
      currency: 'EUR',
      amount: 7
    }
  },
  {
    API: 'Exchange Rates',
    'End Point': 'End point 1',
    'Date Time': '10-01-2019',
    'Day of Week': 'Monday',
    'Hour of Day': '16h-17h',
    'Status Code': '200',
    'Error Response': 'OK',
    'No. of Calls': 3,
    Revenue: {
      currency: 'EUR',
      amount: 9
    }
  },
  {
    API: 'Exchange Rates',
    'End Point': 'End point 1',
    'Date Time': '11-01-2019',
    'Day of Week': 'Monday',
    'Hour of Day': '16h-17h',
    'Status Code': '200',
    'Error Response': 'OK',
    'No. of Calls': 3,
    Revenue: {
      currency: 'EUR',
      amount: 3
    }
  }
];

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA_ANGULAR: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' }
];
@Component({
  selector: 'uxg-dashboard-layout-demo',
  templateUrl: './dashboard-layout-demo.component.html',
  styleUrls: ['./dashboard-layout-demo.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardLayoutDemoComponent implements OnInit {
  columns = [
    { name: 'API', type: UxgColumnType.string, align: 'center', displayName: 'Display Api' },
    { name: 'End Point', type: UxgColumnType.string, align: 'left' },
    { name: 'Date Time', type: UxgColumnType.date, align: 'left' },
    { name: 'Day of Week', type: UxgColumnType.string, align: 'left' },
    { name: 'Hour of Day', type: UxgColumnType.string, align: 'left' },
    { name: 'Status Code', type: UxgColumnType.string, align: 'left' },
    { name: 'Error Response', type: UxgColumnType.string, align: 'center' },
    { name: 'No. of Calls', type: UxgColumnType.number, align: 'right' }
  ];
  dataSource = ELEMENT_DATA; //data
  columnsToDisplay = [
    'API',
    'End Point',
    'Date Time',
    'Day of Week',
    'Hour of Day',
    'Status Code',
    'Error Response',
    'No. of Calls'
  ];

  traces = [
    {
      dimension: ['Banks', 'Foods', 'Energies'],
      dimensionName: 'Industry',
      measure: [100, 50, 70],
      measureName: 'PNL',
      type: ChartType.bar
    }
  ];

  viewMapDataSource: VectorMapDataSource = {
    data: {
      view1: [
        { name: 'Greenland', value: 2300 },
        { name: 'Canada', value: 2300 },
        { name: 'United States', value: 1610 },
        { name: 'Mexico', value: 1000 },
        { name: 'Russia', value: 5000 }
      ],
      view2: [
        { name: 'Greenland', value: 300 },
        { name: 'Canada', value: 300 },
        { name: 'United States', value: 5610 },
        { name: 'Mexico', value: 1000 },
        { name: 'Russia', value: 500 }
      ]
    },
    views: [
      {
        id: 'view1',
        text: 'View 1'
      },
      {
        id: 'view2',
        text: 'view 2'
      }
    ]
  };

  @ViewChildren('table, vectorMap, chart', { read: TemplateRef }) templates!: QueryList<TemplateRef<any>>;

  widgets: TemplateRef<any>[] = [];
  dashBoardItems: [] = [];
  edit = false;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSourceAngular = ELEMENT_DATA_ANGULAR;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    // this.widgets = ;
    // this.dashBoardItems = [0, 1, 2];
  }
  addWidget() {
    const widgetIndex = Math.round(Math.random() * 10) % 3;
    this.widgets.push(this.templates.toArray()[0]);
  }
  toggleEdit() {
    this.edit = !this.edit;
  }
}
