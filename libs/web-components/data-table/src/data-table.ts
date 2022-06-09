/* eslint-disable @typescript-eslint/no-explicit-any */
import { customElement } from 'lit/decorators.js';
import { DataTableBase } from './data-table-base';
import { styles } from './data-table-styles.css';

/**
 * 
 * @attr [dataSource=[]] - Array of data to display in the table.
 * @attr [columns=[]] - Array of column definitions.
 * @attr [columnsToDisplay=[]] - Array of column ids to display.
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