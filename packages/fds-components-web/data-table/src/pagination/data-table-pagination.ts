import { customElement } from 'lit/decorators.js';
import { DataTablePaginationBase } from './data-table-pagination-base';
import { styles } from './data-table-pagination-styles.css';

/**
 * @attr [length=0] - Total number of items in the data source.
 * @attr [pageIndex=0] - Index of the current page.
 * @attr [pageSize=10] - Number of items per page.
 * @attr [pageSizeOptions=[]] - Array of page sizes to display.
 * @attr [showFirstLastButtons=false] - Whether to display the first and last page buttons.
 * @attr [dense=false] - Wether display pagination in a smaller size
 */

@customElement('fds-data-table-pagination')
export class DataTablePagination extends DataTablePaginationBase {
  static override styles = [styles];
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-data-table-pagination': DataTablePagination;
  }
}
