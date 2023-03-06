/* eslint-disable @typescript-eslint/no-explicit-any */
import { customElement } from 'lit/decorators.js';
import { DataTableBase } from './data-table-base';
import { styles } from './data-table-styles.css';

/**
 *
 * @cssprop [--fds-data-table-border-width=1px] - Size of the border width
 * @cssprop [--fds-data-table-max-height=615px] - Max height of table. By default there will be max 10 rows displayed which means 615px for normal size. 439px for dense size. 538px for dense size with checkbox or radiobox.
 * @attr [dataSource=[]] - Array of data to display in the table.
 * @attr [columns=[]] - Array of column definitions.
 * @attr [columnsToDisplay=[]] - Array of column ids to display.
 * @attr [selectable=false] - Whether to show if a row is selected.
 * @attr [multiSelect=false] - Whether to allow multiple rows to be selected.
 * @attr [showSingleSelectRadioBox=false] - Whether to show single select radio box column. When showSingleSelectRadioBox=true implicits selectable=true multiSelect=false
 * @attr [showMultiSelectCheckBox=false] - Whether to show select checkbox column. When showMultiSelectCheckBox=true implicits selectable=true multiSelect=true.
 * @attr [emitPureData=true] - Whether event should emit only user data without fds data table used properties such like _fdsRowId/_fdsRowSelected etc.
 * @attr [dense=false] - Wether display data table in a smaller size
 *
 * @fires onFdsDataTableRowSelected - Fired when selecting a row
 */

@customElement('fds-data-table')
export class DataTable extends DataTableBase {
  static override styles = [styles];
  constructor() {
    super();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-data-table': DataTable;
  }
}
