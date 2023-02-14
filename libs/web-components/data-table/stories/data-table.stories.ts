const README = require('../README.md');
import '@finastra/data-table';
import { DataTable } from '@finastra/data-table';
import { Story } from '@storybook/web-components';
import { html } from 'lit';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';
import { columns, columnsToDisplay, ELEMENT_DATA } from './data';
import { actions } from './sb-generated/fds-data-table.json';

const dataTableDataSource = ELEMENT_DATA;
const dataTableColumns = columns;
const dataTableColumnsToDisplay = columnsToDisplay;
export default {
  title: 'DATA DISPLAY/Data Table',
  component: 'fds-data-table',
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
    showSingleSelectRadioBox: false,
    multiSelect: false,
    showMultiSelectCheckBox: false,
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

const Template: Story<DataTable> = ({
  dataSource = dataTableDataSource,
  columns = dataTableColumns,
  columnsToDisplay = dataTableColumnsToDisplay,
  selectable = true,
  showSingleSelectRadioBox = false,
  multiSelect = true,
  showMultiSelectCheckBox = true,
  dense = false
}) => {
  return html`
    <fds-data-table
      ?dense="${dense}"
      .dataSource=${dataSource}
      .columns=${columns}
      .columnsToDisplay=${columnsToDisplay}
      .selectable=${selectable}
      .showSingleSelectRadioBox=${showSingleSelectRadioBox}
      .multiSelect=${multiSelect}
      .showMultiSelectCheckBox=${showMultiSelectCheckBox}
    >
      <template id="fds-table-customized">
        <div style="width: fit-content">
          <span> {path} | {type} </span>
        </div>
      </template>
    </fds-data-table>
  `;
};

export const DataTableDefault: Story<DataTable> = Template.bind({});
export const DataTableDense: Story<DataTable> = Template.bind({});
DataTableDense.args = {
  dense: true
};

export const DataTableSingleSelectRadioBox: Story<DataTable> = Template.bind({});
DataTableSingleSelectRadioBox.args = {
  dense: true,
  showSingleSelectRadioBox: true
};

export const DataTableMultiSelectNormal: Story<DataTable> = Template.bind({});
DataTableMultiSelectNormal.args = {
  dense: true,
  selectable: true,
  multiSelect: true,
  showMultiSelectCheckBox: false
};

export const DataTableMultipleSelectCheckBox: Story<DataTable> = Template.bind({});
DataTableMultipleSelectCheckBox.args = {
  dense: true,
  showMultiSelectCheckBox: true
};
