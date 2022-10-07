const README = require('../README.md');
import '@finastra/data-table';
import { DataTableWithPagination } from '@finastra/data-table';
import { Story } from '@storybook/web-components';
import { html } from 'lit';
import { DATA_TABLE_EVENTS } from '../src/constants';
import { columns, columnsToDisplay, ELEMENT_DATA } from './data';

const demoPageSize = 5;
const demoPageSizeOptions = [5, 10, 20];
const showFirstLastButtons = false;

const dataTableDataSource = ELEMENT_DATA;
const dataTableColumns = columns;
const dataTableColumnsToDisplay = columnsToDisplay;

export default {
  title: 'DATA DISPLAY/Data Table/Table with pagination',
  component: 'fds-data-table-with-pagination',
  argTypes: {
    dataSource: {
      type: 'array',
      description: "a set of data",
      table: {
        defaultValue: {
          summary: "[]"
        }
      },
    },
    columns: {
      type: 'array',
      description: 'a set of columns settings',
      table: {
        defaultValue: {
          summary: "[]"
        }
      }
    },
    columnsToDisplay: {
      type: 'array',
      description: 'a set of columns id to display',
      table: {
        defaultValue: {
          summary: "[]"
        }
      }
    },
    selectable: {
      type: 'boolean',
      description: 'enable/disable selection',
      table: {
        defaultValue: {
          summary: false
        }
      }
    },
    showSingleSelectRadioBox: {
      type: 'boolean',
      description: 'enable single select radio column or not',
      table: {
        defaultValue: {
          summary: false
        }
      }
    },
    multiSelect: {
      type: 'boolean',
      description: 'enable/disable multiselect or not selection',
      table: {
        defaultValue: {
          summary: false
        }
      }
    },
    showMultiSelectCheckBox: {
      type: 'boolean',
      description: 'enable multiselect checkbox column or not',
      table: {
        defaultValue: {
          summary: false
        }
      }
    },
    pageSizeOptions: {
      type: 'array',
      description: 'an arry of page size',
      table: {
          defaultValue: {
            summary: "[]"
          }
      }
    },
    showFirstLastButtons: {
      type: 'boolean',
      description: 'show first and last buttons',
      table: {
          defaultValue: {
            summary: false
          }
      }
    },
  },
  args: {
    dataSource: dataTableDataSource,
    columns: dataTableColumns,
    columnsToDisplay: dataTableColumnsToDisplay,
    selectable: true,
    showSingleSelectRadioBox: false,
    multiSelect: false,
    showMultiSelectCheckBox: false,
    pageSizeOptions: demoPageSizeOptions,
    showFirstLastButtons: showFirstLastButtons
  },
  parameters: {
    actions: {
      handles: [DATA_TABLE_EVENTS.DATA_TABLE_WITH_PAGINATION_ROW_SELECTED]
    },
    docs: {
      description: { component: README }
    },
    design: {
      type: 'figma',
      url: ' https://www.figma.com/file/E1Mb1556RT3HbAUVu2Q0LV/Finastra-design-system?node-id=48606%3A19621'
    }
  },
};


const Template: Story<DataTableWithPagination> = (
  {
    dataSource = dataTableDataSource, 
    columns = dataTableColumns, 
    columnsToDisplay = dataTableColumnsToDisplay, 
    selectable = true, 
    showSingleSelectRadioBox = false,
    multiSelect = true,
    showMultiSelectCheckBox = true,
    pageSizeOptions= demoPageSizeOptions,
    showFirstLastButtons = true,
  }) => {

  return html`<fds-data-table-with-pagination
                .dataSource=${dataSource}
                .columns=${columns}
                .columnsToDisplay=${columnsToDisplay}
                .selectable=${selectable}
                .showSingleSelectRadioBox=${showSingleSelectRadioBox} 
                .multiSelect=${multiSelect}
                .showMultiSelectCheckBox=${showMultiSelectCheckBox}
                .pageSizeOptions=${pageSizeOptions}
                .showFirstLastButtons=${showFirstLastButtons}
              ></fds-data-table-with-pagination>`
}
export const DataTableComponentWithPagination: Story<DataTableWithPagination> = Template.bind({});
