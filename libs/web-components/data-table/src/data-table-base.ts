import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export enum FdsColumnType {
    string = 'string',
    number = 'number',
    date = 'date',
    typedouble = 'typedouble',
    cellTemplate = 'cellTemplate',
    checkbox = 'checkbox'
}

export interface FdsTableColumn {
    id: string;
    name: string; // column name
    type: FdsColumnType; // the data type of this column => can apply different template to this column
    align?: 'left' | 'right' | 'center'; // text align in cell
    displayName?: string;
}


export abstract class DataTableBase extends LitElement {

    @property({
        type: Array,
    }) dataSource: any[] = [];
    @property({
        type: Array,
    }) columns: FdsTableColumn[] = [];
    @property({
        type: Array,
    }) columnsToDisplay: string[] = [];
    @property({
        type: Boolean
    }) sortable = false;
    private _columnsData = {};

    override render() {
        this._columnsData = this.columns.reduce((acc, column) => {
            acc[column.id] = column;
            return acc;
        }, {})

        const tableHeaders = this.columnsToDisplay.map(columnId => {
            return this.getDataTableHeaderCell(this._columnsData[columnId]);
        });

        const tableRows = this.dataSource.map(row => {
            return this.getDataTableRow(row, this.columnsToDisplay);
        })

        return html`<div class="mdc-data-table__table-container">
                        <table class="mdc-data-table__table" aria-label="Dessert calories">
                            <thead>
                                <tr class="mdc-data-table__header-row">
                                ${tableHeaders}
                                </tr>
                            </thead>
                            <tbody class="mdc-data-table__content">
                                ${tableRows}
                            </tbody>
                        </table>
                    </div>`;
    }

    private getDataTableHeaderCell(column: FdsTableColumn) {
        let headerType = "";
        switch (column.type) {
            case FdsColumnType.number:
            case FdsColumnType.typedouble:
                headerType = "mdc-data-table__header-cell--numeric";
                break;
            case FdsColumnType.checkbox:
                headerType = "mdc-data-table__header-cell--checkbox";
                break;
            default:
                headerType = "";
                break;
        }
        return html`<th class="mdc-data-table__header-cell ${headerType ? headerType : ''}" 
                        role="columnheader" scope="col">
                        ${column.displayName ? column.displayName : column.name}
                    </th>`
    }

    private getDataTableRow(row: any, columnsToDisplay: string[]) {
        const rowCells = columnsToDisplay.map(columnId => {

            return this.getDataTableCell(row, this._columnsData[columnId]);
        })
        return html`<tr class="mdc-data-table__row">
                ${rowCells}
                </tr>`
    }

    private getDataTableCell(row: any, column: FdsTableColumn) {
        let cellType = "";
        switch (column.type) {
            case FdsColumnType.number:
            case FdsColumnType.typedouble:
                cellType = "mdc-data-table__cell--numeric";
                break;
            case FdsColumnType.checkbox:
                cellType = "mdc-data-table__cell--checkbox";
                break;
            default:
                cellType = "";
                break;
        }
        return html`<td class="mdc-data-table__cell ${cellType}">
                ${row[column.id]}
            </td>`
    }
}
