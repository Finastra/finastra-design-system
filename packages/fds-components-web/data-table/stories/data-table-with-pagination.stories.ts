const README = require('../README.md');
import '@finastra/data-table';
import { DataTableWithPagination } from '@finastra/data-table';
import { Story } from '@storybook/web-components';
import { html } from 'lit';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';
import { columns, columnsToDisplay, ELEMENT_DATA } from './data';
import { actions } from './sb-generated/fds-data-table-with-pagination.json';

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
      description: 'a set of data',
      table: {
        defaultValue: {
          summary: '[]'
        }
      }
    },
    columns: {
      type: 'array',
      description: 'a set of columns settings',
      table: {
        defaultValue: {
          summary: '[]'
        }
      }
    },
    columnsToDisplay: {
      type: 'array',
      description: 'a set of columns id to display',
      table: {
        defaultValue: {
          summary: '[]'
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
    recordSelectionCrossPages: {
      type: 'boolean',
      description: 'enable selection cross pages',
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
          summary: '[]'
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
    dense: {
      type: 'boolean',
      description: 'show table in a smaller size',
      table: {
        defaultValue: {
          summary: false
        }
      }
    }
  },
  args: {
    dataSource: dataTableDataSource,
    columns: dataTableColumns,
    columnsToDisplay: dataTableColumnsToDisplay,
    selectable: true,
    recordSelectionCrossPages: false,
    showSingleSelectRadioBox: false,
    multiSelect: false,
    showMultiSelectCheckBox: false,
    pageSizeOptions: demoPageSizeOptions,
    showFirstLastButtons: showFirstLastButtons,
    dense: false
  },
  parameters: {
    actions,
    docs: {
      description: { component: allSanitizers(README) }
    },
    design: {
      type: 'figma',
      url: ' https://www.figma.com/file/E1Mb1556RT3HbAUVu2Q0LV/Finastra-design-system?node-id=48606%3A19621'
    }
  }
};

const Template: Story<DataTableWithPagination> = ({
  dataSource = dataTableDataSource,
  columns = dataTableColumns,
  columnsToDisplay = dataTableColumnsToDisplay,
  selectable = true,
  recordSelectionCrossPages = false,
  showSingleSelectRadioBox = false,
  multiSelect = true,
  showMultiSelectCheckBox = true,
  pageSizeOptions = demoPageSizeOptions,
  showFirstLastButtons = true,
  dense = false
}) => {
  return html`<fds-data-table-with-pagination
    ?dense="${dense}"
    .dataSource=${dataSource}
    .columns=${columns}
    .columnsToDisplay=${columnsToDisplay}
    .selectable=${selectable}
    .recordSelectionCrossPages=${recordSelectionCrossPages}
    .showSingleSelectRadioBox=${showSingleSelectRadioBox}
    .multiSelect=${multiSelect}
    .showMultiSelectCheckBox=${showMultiSelectCheckBox}
    .pageSizeOptions=${pageSizeOptions}
    .showFirstLastButtons=${showFirstLastButtons}
  >
    <template id="fds-table-customized">
      <div style="width: fit-content">
        <span> {path} | {type} </span>
      </div>
    </template>
  </fds-data-table-with-pagination>`;
};
export const DataTableComponentWithPagination: Story<DataTableWithPagination> = Template.bind({});

export const Dense: Story<DataTableWithPagination> = Template.bind({});
Dense.args = {
  dense: true
};
