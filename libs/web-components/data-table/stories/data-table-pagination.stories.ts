const README = require('../README.md');
import '@finastra/data-table';
import { DataTablePagination } from '@finastra/data-table';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';
import { PAGINATION_EVENTS } from '../src/constants';

const demoLength = 11;
const demoPageIndex = 0;
const demoPageSize = 5;
const demoPageSizeOptions = [5, 10, 20];
const showFirstLastButtons = false;

export default {
  title: 'DATA DISPLAY/Data Table/Pagination',
  component: 'fds-data-table-pagination',
  argTypes: {
    length: {
      type: 'number',
      description: 'the length of data',
      table: {
        defaultValue: {
          summary: 0
        }
      }
    },
    pageIndex: {
      type: 'number',
      description: 'the default page index',
      table: {
        defaultValue: {
          summary: 0
        }
      }
    },
    pageSize: {
      type: 'number',
      description: 'the number of items per page',
      table: {
        defaultValue: {
          summary: 10
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
  } as any,
  args: {
    length: demoLength,
    pageIndex: demoPageIndex,
    pageSize: demoPageSize,
    pageSizeOptions: demoPageSizeOptions,
    showFirstLastButtons: showFirstLastButtons,
    dense: false
  },
  parameters: {
    actions: {
      handles: [PAGINATION_EVENTS.PAGINATION_CHANGED]
    },
    docs: {
      description: { component: allSanitizers(README) }
    },
    design: {
      type: 'figma',
      url: ' https://www.figma.com/file/E1Mb1556RT3HbAUVu2Q0LV/Finastra-design-system?node-id=48606%3A19621'
    }
  }
} as Meta;

const templatePagination: Story<DataTablePagination> = ({
  length = demoLength,
  pageIndex = demoPageIndex,
  pageSize = demoPageSize,
  pageSizeOptions = demoPageSizeOptions,
  showFirstLastButtons = true,
  dense = false
}) => {
  return html`<fds-data-table-pagination
    ?dense="${dense}"
    length=${length}
    pageIndex=${pageIndex}
    pageSize=${pageSize}
    .pageSizeOptions=${pageSizeOptions}
    .showFirstLastButtons=${showFirstLastButtons}
  ></fds-data-table-pagination>`;
};

export const Default: Story<DataTablePagination> = templatePagination.bind({});
export const Dense: Story<DataTablePagination> = templatePagination.bind({});
Dense.args = {
  dense: true
};
