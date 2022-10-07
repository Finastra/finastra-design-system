/* eslint-disable @typescript-eslint/no-explicit-any */
import { customElement } from 'lit/decorators.js';
import { DataTableBase } from './data-table-base';
import { styles } from './data-table-styles.css';

/**
 *
 * @attr [dataSource=[]] - Array of data to display in the table.
 * @attr [columns=[]] - Array of column definitions.
 * @attr [columnsToDisplay=[]] - Array of column ids to display.
 * @attr [selectable=false] - Whether to show if a row is selected.
 * @attr [showSingleSelectRadioBox=false] - Whether to show single select radio box column if single is enabled but multiple select is disabled.
 * @attr [multiSelect=false] - Whether to allow multiple rows to be selected.
 * @attr [showMultiSelectCheckBox=false] - Whether to show select checkbox column if multiple select is enabled.
 * 
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