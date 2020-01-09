import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, ViewChild, TemplateRef } from '@angular/core';
import {
  UxgTableSelectEvent,
  TableComponent,
  UxgSort,
  UxgColumnType,
  UxgColumn
} from '@ffdc/uxg-angular-components/table';
import { PageEvent } from '@angular/material';

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
  },
  {
    API: 'Exchange Rates',
    'End Point': 'End point 1',
    'Date Time': '12-01-2019',
    'Day of Week': 'Monday',
    'Hour of Day': '16h-17h',
    'Status Code': '200',
    'Error Response': 'OK',
    'No. of Calls': 3,
    Revenue: {
      currency: 'EUR',
      amount: 7
    }
  }
];

@Component({
  selector: 'ffdc-table-demo',
  templateUrl: './table-demo.component.html',
  styleUrls: ['./table-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class TableDemoComponent implements OnInit {
  @ViewChild(TableComponent, { static: true }) table!: TableComponent;
  @ViewChild('tableCellTypedCurrency', { static: true }) typedCurrency!: TemplateRef<any>;
  @ViewChild('tableCellTypedCurrencyEdit', { static: true }) typedCurrencyEdit!: TemplateRef<any>;
  @ViewChild('tableCellTable', { static: true }) tableCellTable!: TemplateRef<any>;

  selectedIndex = [1, 2];

  dataSource = ELEMENT_DATA; //data
  length = ELEMENT_DATA.length;

  dragEnable = false;
  totalEnable = false;
  pageEnable = false;
  customizedPage = false;
  stickyFooter = true;
  paging = null;
  actionDescription = '';
  singleSelect = true;
  enableTableEdit = false;
  enableTableRowDelete = false;
  enableTableSendEvent = false;

  columns: UxgColumn[] = [];
  columnsToDisplay: string[] = [];

  columnsCellTemplate: UxgColumn[] = [];
  columnsToDisplayCellTemplate: string[] = [];

  totalData: any;

  subData: any[] = [
    {
      API: 'http://localhost'
    },
    {
      API: 'http://www.google.com'
    }
  ];
  subColumns: UxgColumn[] = [{ name: 'API', type: UxgColumnType.string }];
  subColumnsToDisplay = ['API'];

  constructor() {}

  ngOnInit(): void {
    // columns defination object
    this.columns = [
      { name: 'API', type: UxgColumnType.string, align: 'left', displayName: 'Display Api' },
      { name: 'End Point', type: UxgColumnType.string, align: 'left' },
      { name: 'Date Time', type: UxgColumnType.date, align: 'left' },
      { name: 'Day of Week', type: UxgColumnType.string, align: 'left' },
      { name: 'Hour of Day', type: UxgColumnType.string, align: 'left' },
      { name: 'Status Code', type: UxgColumnType.string, align: 'left' },
      { name: 'Error Response', type: UxgColumnType.string, align: 'left' },
      { name: 'No. of Calls', type: UxgColumnType.number, align: 'right' }
    ];
    this.columnsCellTemplate = [
      {
        name: 'Revenue',
        type: UxgColumnType.cellTemplate,
        cellTemplate: this.typedCurrency,
        cellEditTemplate: this.typedCurrencyEdit
      },
      {
        name: 'API',
        type: UxgColumnType.cellTemplate,
        align: 'left',
        displayName: 'Display Api',
        cellTemplate: this.tableCellTable
      },
      { name: 'End Point', type: UxgColumnType.string, align: 'left' },
      { name: 'Date Time', type: UxgColumnType.date, align: 'left' },
      { name: 'Day of Week', type: UxgColumnType.string, align: 'left' },
      { name: 'Hour of Day', type: UxgColumnType.string, align: 'left' },
      { name: 'Status Code', type: UxgColumnType.string, align: 'left' },
      { name: 'Error Response', type: UxgColumnType.string, align: 'left' },
      { name: 'No. of Calls', type: UxgColumnType.number, align: 'right' }
    ];
    this.columnsToDisplayCellTemplate = [
      'API',
      'End Point',
      'Date Time',
      'Day of Week',
      'Hour of Day',
      'Status Code',
      'Error Response',
      'No. of Calls',
      'Revenue'
    ];
    this.columnsToDisplay = [
      'API',
      'End Point',
      'Date Time',
      'Day of Week',
      'Hour of Day',
      'Status Code',
      'Error Response',
      'No. of Calls'
    ];
    this.totalData = {
      'Status Code': '80% GOOD'
    };
  }

  sortData(sort: UxgSort) {
    this.actionDescription = 'customized sorting function excuted';
    this.dataSource = this.dataSource.slice().sort((obj1, obj2) => {
      switch (this.getSortColumnType(sort.active)) {
        case 'number':
          const bios = obj1[sort.active] - obj2[sort.active];
          if (sort.direction === 'asc') {
            return bios;
          } else {
            return -bios;
          }
        default:
          const genreA = obj1[sort.active].toUpperCase();
          const genreB = obj2[sort.active].toUpperCase();

          let comparison = 0;
          if (genreA > genreB) {
            comparison = 1;
          } else if (genreA < genreB) {
            comparison = -1;
          }
          if (sort.direction === 'asc') {
            return comparison;
          } else {
            return -comparison;
          }
      }
    });
  }
  getSortColumnType(columnName: string) {
    const column = this.columns.find(item => {
      return item.name === columnName;
    });
    return column ? column.type : '';
  }

  applyPaging($event: PageEvent) {
    this.actionDescription = 'customized paging applied';
    const offset = $event.pageSize * $event.pageIndex;
    this.dataSource = ELEMENT_DATA.slice(offset, offset + $event.pageSize);
  }

  applyDefaultPaging() {
    const defaultPaging: PageEvent = {
      length: this.length,
      pageIndex: 0,
      pageSize: 5
    };
    this.applyPaging(defaultPaging);
  }

  enableDrag($event: any) {
    this.dragEnable = $event.checked;
  }

  enablePaging($event: any) {
    this.pageEnable = $event.checked;
  }

  setSelectedKeys($event: any) {
    this.selectedIndex = $event.value;
  }

  enableCustomizedPaging($event: any) {
    if ($event.checked) {
      this.table.paging = {
        disabled: false,
        pageIndex: 0,
        length: this.length,
        hidePageSize: false,
        pageSizeOptions: [5, 10, 20],
        pageSize: 5,
        showFirstLastButtons: true
      };
      this.table.pageChanged.subscribe((page: PageEvent) => this.applyPaging(page));
    } else {
      this.paging = null;
    }
  }

  selectChange($event: UxgTableSelectEvent) {
    this.updateActionsDescription($event.data);
  }

  enableTotal($event: any) {
    this.totalEnable = $event.checked;
  }

  enableTableEditChanged($event: any) {
    this.enableTableEdit = $event.checked;
  }

  enableTableRowDeleteChanged($event: any) {
    this.enableTableRowDelete = $event.checked;
  }

  enableTableRowSendChanged($event: any) {
    this.enableTableSendEvent = $event.checked;
  }

  rowEditEvent($event: any) {
    this.updateActionsDescription($event.data);
  }

  rowDeleteEvent($event: any) {
    this.updateActionsDescription($event.data);
  }

  rowClickUnderMutiSelectMode($event: any) {
    this.updateActionsDescription($event.data);
  }

  rowSendClickEvent($event: any) {
    this.updateActionsDescription($event.data);
  }

  updateActionsDescription(data: any) {
    this.actionDescription = JSON.stringify(data);
  }
}
