import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, ViewChild } from '@angular/core';
import { Sort, PageEvent } from '@angular/material';
import { UxgTableSelectEvent, TableComponent, UxgPage, UxgSort } from '@ffdc/uxg-angular-components/table';

const ELEMENT_DATA: any[] = [
  {
    API: 'Exchange Rates',
    'End Point': 'End point 1',
    'Date Time': '01-10-2019',
    'Day of Week': 'Monday',
    'Hour of Day': '16h-17h',
    'Status Code': '200',
    'Error Response': 'OK',
    'No. of Calls': 3
  },
  {
    API: 'Exchange Rates',
    'End Point': 'End point 1',
    'Date Time': '02-01-2019',
    'Day of Week': 'Monday',
    'Hour of Day': '16h-17h',
    'Status Code': '400',
    'Error Response': 'Bad Request',
    'No. of Calls': 2
  },
  {
    API: 'Exchange Rates',
    'End Point': 'End point 1',
    'Date Time': '03-01-2019',
    'Day of Week': 'Monday',
    'Hour of Day': '17h-18h',
    'Status Code': '500',
    'Error Response': 'Server Error',
    'No. of Calls': 4
  },
  {
    API: 'Exchange Rates',
    'End Point': 'End point 1',
    'Date Time': '04-01-2019',
    'Day of Week': 'Monday',
    'Hour of Day': '17h-18h',
    'Status Code': '500',
    'Error Response': 'Bad Request',
    'No. of Calls': 7
  },
  {
    API: 'Exchange Rates',
    'End Point': 'End point 1',
    'Date Time': '05-01-2019',
    'Day of Week': 'Monday',
    'Hour of Day': '18h-19h',
    'Status Code': '200',
    'Error Response': 'OK',
    'No. of Calls': 6
  },
  {
    API: 'Exchange Rates',
    'End Point': 'End point 1',
    'Date Time': '06-01-2019',
    'Day of Week': 'Monday',
    'Hour of Day': '18h-19h',
    'Status Code': '400',
    'Error Response': 'OK',
    'No. of Calls': 8
  },
  {
    API: 'Exchange Rates',
    'End Point': 'End point 1',
    'Date Time': '07-01-2019',
    'Day of Week': 'Monday',
    'Hour of Day': '16h-17h',
    'Status Code': '500',
    'Error Response': 'OK',
    'No. of Calls': 1
  },
  {
    API: 'Exchange Rates',
    'End Point': 'End point 1',
    'Date Time': '08-01-2019',
    'Day of Week': 'Monday',
    'Hour of Day': '16h-17h',
    'Status Code': '200',
    'Error Response': 'OK',
    'No. of Calls': 3
  },
  {
    API: 'Exchange Rates',
    'End Point': 'End point 1',
    'Date Time': '09-01-2019',
    'Day of Week': 'Monday',
    'Hour of Day': '16h-17h',
    'Status Code': '200',
    'Error Response': 'OK',
    'No. of Calls': 3
  },
  {
    API: 'Exchange Rates',
    'End Point': 'End point 1',
    'Date Time': '09-01-2019',
    'Day of Week': 'Monday',
    'Hour of Day': '16h-17h',
    'Status Code': '200',
    'Error Response': 'OK',
    'No. of Calls': 3
  },
  {
    API: 'Exchange Rates',
    'End Point': 'End point 1',
    'Date Time': '09-01-2019',
    'Day of Week': 'Monday',
    'Hour of Day': '16h-17h',
    'Status Code': '200',
    'Error Response': 'OK',
    'No. of Calls': 3
  },
  {
    API: 'Exchange Rates',
    'End Point': 'End point 1',
    'Date Time': '09-01-2019',
    'Day of Week': 'Monday',
    'Hour of Day': '16h-17h',
    'Status Code': '200',
    'Error Response': 'OK',
    'No. of Calls': 3
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
  @ViewChild(TableComponent, { static: false }) table: TableComponent;

  dataSource = ELEMENT_DATA; //data
  length = ELEMENT_DATA.length;

  dragEnable = false;
  totalEnable = false;
  pageEnable = false;
  customizedPage = false;
  stickyFooter = true;
  paging = null;
  actionDiscription = '';
  singleSelect = true;

  // columns defination object
  columns: any[] = [
    { name: 'API', type: 'string', align: 'left' },
    { name: 'End Point', type: 'string', align: 'left' },
    { name: 'Date Time', type: 'date', align: 'left' },
    { name: 'Day of Week', type: 'string', align: 'left' },
    { name: 'Hour of Day', type: 'string', align: 'left' },
    { name: 'Status Code', type: 'string', align: 'left' },
    { name: 'Error Response', type: 'string', align: 'left' },
    { name: 'No. of Calls', type: 'number', align: 'right' }
  ];
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
  totalData = {
    'Status Code': '80% GOOD'
  };
  constructor() {}

  ngOnInit(): void {}

  sortData(sort: UxgSort) {
    this.actionDiscription = 'customized sorting function excuted';
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
    return this.columns.find(column => {
      return column.name === columnName;
    }).type;
  }
  applyPaging($event: UxgPage) {
    this.actionDiscription = 'customized paging applied';
    const offset = $event.pageSize * $event.pageIndex;
    this.dataSource = ELEMENT_DATA.slice(offset, offset + $event.pageSize);
  }
  applyDefaultPaging() {
    const defaultPaging: UxgPage = {
      length: this.length,
      pageIndex: 0,
      pageSize: 5
    };
    this.applyPaging(defaultPaging);
  }
  enableDrag($event) {
    this.dragEnable = $event.checked;
  }
  enablePaging($event) {
    this.pageEnable = $event.checked;
  }
  enableCustomizedPaging($event) {
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
      this.table.pageChange.subscribe(page => this.applyPaging(page));
    } else {
      this.paging = null;
    }
  }
  selectChange($event: UxgTableSelectEvent) {
    this.actionDiscription = JSON.stringify($event.data);
  }
  enableTotal($event) {
    this.totalEnable = $event.checked;
  }
}
