import "@material/icon-button";
import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { DATA_TABLE_EVENTS } from "./constants";

export enum FdsColumnType {
    string = 'string',
    number = 'number',
    date = 'date',
    typedouble = 'typedouble',
    cellTemplate = 'cellTemplate',
    checkbox = 'checkbox'
}

export enum FdsColumnSortDirection {
    none = 'none',
    asc = 'asc',
    desc = 'desc'
}
export interface FdsTableColumn {
    id: string;
    name: string; // column name
    type: FdsColumnType; // the data type of this column => can apply different template to this column
    align?: 'left' | 'right' | 'center'; // text align in cell
    displayName?: string;
    sortable: boolean; // can sort this column;
}

export interface FdsTableRow {
    selected?: boolean,
    _fdsRowId?: string
}

const FDS_TABLE_DATA_ROW_PREFIX = 'fds-table-data-row-';

export abstract class DataTableBase extends LitElement {

    private _dataSource: FdsTableRow[] = [];
    @property({
        type: Array,
    })
    set dataSource(data: any[]) {
        this._dataSource = this._addFdsRowIds(data);
        this.requestUpdate();
    }
    get dataSource(): FdsTableRow[] {
        return this._dataSource;
    }

    @property({
        type: Array,
    }) columns: FdsTableColumn[] = [];

    @property({
        type: Array,
    }) columnsToDisplay: string[] = [];

    @property({
        type: Boolean
    }) selectable = false;

    @property({
        type: Boolean
    }) multiSelect = false;

    private _columnsData = {};
    private _sortColumnId: string = '';
    private _sortDirection: FdsColumnSortDirection = FdsColumnSortDirection.none;

    override render() {
        this._columnsData = this.columns.reduce((acc, column) => {
            acc[column.id] = column;
            return acc;
        }, {})

        const tableHeaders = this.columnsToDisplay.map(columnId => {
            return this._getDataTableHeaderCell(this._columnsData[columnId]);
        });

        const tableRows = this._getSortedDataSource([...this.dataSource]).map(row => {
            return this._getDataTableRow(row, this.columnsToDisplay);
        })

        return html`<div class="mdc-data-table__table-container fds-data-table">
                        <table class="mdc-data-table__table" aria-label="Dessert calories">
                            <thead>
                                <tr class="mdc-data-table__header-row">
                                ${tableHeaders}
                                </tr>
                            </thead>
                            <tbody class="mdc-data-table__content" tabindex="0">
                                ${tableRows}
                            </tbody>
                        </table>
                    </div>`;
    }

    private _addFdsRowIds(data: any[]): FdsTableRow[] {
        return data.map((rowData, index) => {
            return { ...rowData, '_fdsRowId': FDS_TABLE_DATA_ROW_PREFIX + index };
        });
    }

    private _getSortedDataSource(dataSource: any[]): FdsTableRow[] {

        if (this._sortDirection === FdsColumnSortDirection.asc) {
            return dataSource.sort((a, b) => {
                if (a[this._sortColumnId] > b[this._sortColumnId]) {
                    return 1;
                }
                if (a[this._sortColumnId] < b[this._sortColumnId]) {
                    return -1;
                }
                return 0;
            });
        }

        if (this._sortDirection === FdsColumnSortDirection.desc) {
            return dataSource.sort((a, b) => {
                if (a[this._sortColumnId] < b[this._sortColumnId]) {
                    return 1;
                }
                if (a[this._sortColumnId] > b[this._sortColumnId]) {
                    return -1;
                }
                return 0;
            });
        }
        return dataSource;
    }

    private _getDataTableHeaderCell(column: FdsTableColumn) {
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
        return html`<th class="mdc-data-table__header-cell 
                        ${headerType ? headerType : ''} 
                        ${column.sortable ? 'mdc-data-table__header-cell--with-sort' : ''}" 
                        role="columnheader" scope="col" data-column-id=${column.id} >

                        ${column.sortable ? html`
                        <div class="mdc-data-table__header-cell-wrapper" @click=${() => this._sortByColumn(column.id)}>
            
                            <div class="mdc-data-table__header-cell-label">
                                ${column.displayName ? column.displayName : column.name}
                            </div>
                            
                            <mwc-icon-button class="mdc-icon-button 
                                material-icons mdc-data-table__sort-icon-button 
                                fds-data-table-sort-icon" 
                                aria-label="Sort by ${column.displayName ? column.displayName : column.name}" 
                                aria-describedby="${column.id}-status-label"
                                icon="${this._getSortIcon(column.id)}">
                            </mwc-icon-button>
                            <div class="mdc-data-table__sort-status-label" aria-hidden="true" id="carbs-status-label"></div>
                        </div>`
                : column.displayName ? column.displayName : column.name}

                    </th>`
    }

    private _getSortIcon(columnId: string): string {
        if (this._sortColumnId !== columnId) {
            return ''
        }

        if (this._sortDirection === FdsColumnSortDirection.asc) {
            return 'arrow_upward';
        }
        if (this._sortDirection === FdsColumnSortDirection.desc) {
            return 'arrow_downward';
        }

        return '';
    }

    private _sortByColumn(columnId: string) {

        //sort order none => asc => desc => none
        this._sortColumnId = columnId;
        switch (this._sortDirection) {
            case FdsColumnSortDirection.none:
                this._sortDirection = FdsColumnSortDirection.asc;
                break;
            case FdsColumnSortDirection.asc:
                this._sortDirection = FdsColumnSortDirection.desc;
                break;
            case FdsColumnSortDirection.desc:
                this._sortDirection = FdsColumnSortDirection.none;
        }
        this.requestUpdate();
    }

    private _getDataTableRow(row: any, columnsToDisplay: string[]) {
        const rowCells = columnsToDisplay.map(columnId => {
            return this._getDataTableCell(row, this._columnsData[columnId]);
        })
        return html`<tr class="mdc-data-table__row ${this.selectable && row.selected ? 'mdc-data-table__row--selected' : ''}" 
                    id="${row._fdsRowId}"
                    @click=${() => this._onRowSelected(row)}>
                ${rowCells}
                </tr>`
    }

    private _getDataTableCell(row: any, column: FdsTableColumn) {
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

    private _onRowSelected(row: FdsTableRow) {

        if (this.selectable && !this.multiSelect) {
            this.shadowRoot?.querySelectorAll('.mdc-data-table__row').forEach(row => {
                row.classList.remove('mdc-data-table__row--selected');
            })
        }

        if (this.selectable) {
            this.shadowRoot?.querySelector(`#${row._fdsRowId}`)?.classList.toggle('mdc-data-table__row--selected');
        }

        row.selected = !row.selected;
        let dataToSend: any = [];
        if (this.selectable) {
            if (this.multiSelect) {
                const selectedRowElements = this.shadowRoot?.querySelectorAll('.mdc-data-table__row--selected')
                if (selectedRowElements && selectedRowElements.length > 0) {
                    const selectedRows: any[] = []
                    selectedRowElements.forEach(row => {
                        const rowData = this.dataSource.find(data => data._fdsRowId === row.id);
                        if (rowData) {
                            selectedRows.push(rowData);
                        }

                    });
                    dataToSend = selectedRows.map(row => this._getPureData(row));
                }
            } else {
                dataToSend = [this._getPureData(row)]
            }
        }

        this.dispatchEvent(new CustomEvent(DATA_TABLE_EVENTS.DATA_TABLE_ROW_SELECTED, {
            detail: {
                data: dataToSend,
            }
        }));
    }

    private _getPureData(data: any): any {
        const dataCopy = { ...data } as any;
        delete dataCopy.selected;
        delete dataCopy._fdsRowId;
        return dataCopy;
    }
}
