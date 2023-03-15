import { elementUpdated, expect, fixture, html } from '@open-wc/testing';
import { DataTable } from '../src';
import '../src/data-table';
import { DataTablePagination } from '../src/pagination/data-table-pagination';

const ELEMENT_DATA = [
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
    'End Point': 'End point 2',
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
    'End Point': 'End point 3',
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
    'End Point': 'End point 4',
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
    'End Point': 'End point 5',
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
    'End Point': 'End point 6',
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
    'End Point': 'End point 7',
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
    'End Point': 'End point 8',
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
    'End Point': 'End point 9',
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
    'End Point': 'End point 10',
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
    'End Point': 'End point 11',
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
const dataTableColumns = [
  { id: 'API', name: 'API', type: 'string', align: 'center', displayName: 'Display Api' },
  { id: 'End Point', name: 'End Point', type: 'string', align: 'left' },
  { id: 'Hour of Day', name: 'Hour of Day', type: 'string', align: 'left' },
  { id: 'Status Code', name: 'Status Code', type: 'string', align: 'left' },
  { id: 'Error Response', name: 'Error Response', type: 'string', align: 'center' },
  { id: 'No. of Calls', name: 'No. of Calls', type: 'number', align: 'right' }
];
const dataTableColumnsToDisplay = ['API', 'End Point', 'Hour of Day', 'Status Code', 'Error Response', 'No. of Calls'];

const demoLength = 11;
const demoPageIndex = 0;
const demoPageSize = 5;
const demoPageSizeOptions = [5, 10];
const showFirstLastButtons = true;

describe('data table', () => {
  describe(' - Accessibility', () => {
    it('loads accessibly', async () => {
      const el: DataTable = await fixture(
        html`<fds-data-table
          .dataSource=${ELEMENT_DATA}
          .columns=${dataTableColumns}
          .columnsToDisplay=${dataTableColumnsToDisplay}
        ></fds-data-table>`
      );

      await elementUpdated(el);
      await expect(el).to.be.accessible();
    });
    it('loads accessibly', async () => {
      const el: DataTablePagination = await fixture(
        html`<fds-data-table-pagination
          .length=${demoLength}
          .pageIndex=${demoPageIndex}
          .pageSize=${demoPageSize}
          .pageSizeOptions=${demoPageSizeOptions}
          .showFirstLastButtons=${showFirstLastButtons}
        ></fds-data-table-pagination>`
      );

      await elementUpdated(el);
      await expect(el).to.be.accessible();
    });
  });
});
