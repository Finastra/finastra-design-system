const README = require('../README.md');
import '@finastra/data-table';
import { DataTable } from '@finastra/data-table';
import { Story } from '@storybook/web-components';
import { html } from 'lit';
import { DATA_TABLE_EVENTS } from '../src/constants';


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
      },
      _class: 'hello'
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
  { id: 'End Point', name: 'End Point', type: 'string', align: 'left', sortable: true},
  { id: 'Hour of Day', name: 'Hour of Day', type: 'string', align: 'left' },
  { id: 'Status Code',name: 'Status Code', type: 'string', align: 'left' },
  { id: 'Error Response',name: 'Error Response', type: 'string', align: 'center' },
  { id: 'No. of Calls',name: 'No. of Calls', type: 'number', align: 'right', sortable: true }
];
const dataTableColumnsToDisplay = ['API', 'End Point', 'Hour of Day', 'Status Code', 'Error Response', 'No. of Calls'];

export default {
  title: 'Components/Data Table',
  component: 'fds-data-table',
  argTypes: {
    dataSource: {
      type: 'array',
      description: "a set of data",
      table: {
        defaultValue: ELEMENT_DATA
      },
    },
    columns: {
      type: 'array',
      description: 'a set of columns settings',
      table: {
        defaultValue: dataTableColumns
      }
    },
    columnsToDisplay: {
      type: 'array',
      description: 'a set of columns id to display',
      table: {
        defaultValue: dataTableColumnsToDisplay
      }
    },
    selectable: {
      type: 'boolean',
      description: 'enable/disable selection',
      table: {
        defaultValue: false
      }
    },
    multiSelect: {
      type: 'boolean',
      description: 'enable/disable multiselect or not selection',
      table: {
        defaultValue: false
      }
    }
  },
  args: {
    dataSource: ELEMENT_DATA,
    columns: dataTableColumns,
    columnsToDisplay: dataTableColumnsToDisplay,
    selectable: true,
    multiSelect: false
  },
  parameters: {
    actions: {
      handles: [DATA_TABLE_EVENTS.DATA_TABLE_ROW_SELECTED]
    },
    docs: {
      description: { component: README }
    }
  },
};

const Template: Story<DataTable> = ({dataSource = ELEMENT_DATA, columns = dataTableColumns, columnsToDisplay = dataTableColumnsToDisplay, selectable = true, multiSelect = true }) => {
  return html`<fds-data-table .dataSource=${dataSource} .columns=${columns} .columnsToDisplay=${columnsToDisplay} .selectable=${selectable} .multiSelect=${multiSelect}></fds-data-table>`
};


export const Default: Story<DataTable> = Template.bind({});
