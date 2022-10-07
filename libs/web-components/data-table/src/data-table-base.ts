import "@finastra/checkbox";
import "@finastra/chip";
import "@finastra/linear-progress";
import "@finastra/radio";
import "@material/icon-button";
import { html, LitElement, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { DATA_TABLE_EVENTS, FDS_TABLE_DATA_ROW_PREFIX, FDS_TABLE_HEADER_CHECKBOX, FDS_TABLE_RADIO_GROUP, FDS_TABLE_ROW_CHECKBOX_SUFFIX, FDS_TABLE_ROW_RADIO_SUFFIX } from "./constants";
import { FdsTableCellStore } from "./data-table-cells";
import { FdsColumnSortDirection, FdsColumnType, FdsTableColumn, FdsTableRow } from "./model";

export abstract class DataTableBase extends LitElement {

    private _dataSource: FdsTableRow[] = [];
    @property({
        type: Array,
    })
    set dataSource(data: FdsTableRow[]) {
        this._dataSource = this._formatFdsDataSource(data);
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
    }) showSingleSelectRadioBox = false;

    @property({
        type: Boolean
    }) multiSelect = false;

    @property({
        type: Boolean
    }) showMultiSelectCheckBox = false;

    private _columnsData = {};
    private _sortColumnId = '';
    private _sortDirection: FdsColumnSortDirection = FdsColumnSortDirection.none;
    private _headerCheckBox: any;


    override render() {
        this._columnsData = this.columns.reduce((acc, column) => {
            acc[column.id] = column;
            return acc;
        }, {})

        const tableHeaders = this._getDataTableHeaderCells();

        const tableRows = this._getSortedDataSource([...this._dataSource]).map(row => {
            return this._getDataTableRow(row, this.columnsToDisplay);
        });

        return html`
                    <div class="mdc-data-table__table-container fds-data-table">
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

    override updated() {
        this._dataSource.forEach(row => {
            this._handleSelected(row, false);
        })
        this._checkIfAllRowSelected();
    }

    private _getDataTableHeaderCells(): TemplateResult[] {
        let headerCells: TemplateResult[] = [];
        const headerPrefixCells = this._getHeaderPrefixCells();
        headerCells = [...headerPrefixCells];
        this.columnsToDisplay.forEach(columnId => headerCells.push(this._getDataTableHeaderCell(this._columnsData[columnId])));
        return headerCells;
    }

    private _getHeaderPrefixCells() {
        const headerCells: TemplateResult[] = [];
        if (this.selectable && this.multiSelect && this.showMultiSelectCheckBox) {
            headerCells.push(
                html`      
                <th class="mdc-data-table__header-cell mdc-data-table__header-cell--checkbox" role="columnheader" scope="col">
                    <fds-checkbox id=${FDS_TABLE_HEADER_CHECKBOX} @change=${(event)=> this._tableHeaderCheckboxChanged(event)}
                        color="primary"
                        aria-label="Select all rows"
                        >
                    </fds-checkbox>
                </th>`
            );
        }

        if (this.selectable && !this.multiSelect && this.showSingleSelectRadioBox) {
            headerCells.push(
                html`
                <th class="mdc-data-table__header-cell mdc-data-table__header-cell--radiobox" role="columnheader" scope="col">
                    <fds-radio style="display: none;"></fds-radio>
                </th>`
            )
        }
        return headerCells;
    }

    private _getDataTableHeaderCell(column: FdsTableColumn) {
        let headerType = "";
        switch (column.type) {
            case FdsColumnType.number:
            case FdsColumnType.typedouble:
                headerType = "mdc-data-table__header-cell--numeric";
                break;
            default:
                headerType = "";
                break;
        }
        return html`
        <th class="mdc-data-table__header-cell 
                                                ${headerType ? headerType : ''} 
                                                ${column.sortable ? 'mdc-data-table__header-cell--with-sort' : ''}"
            role="columnheader" scope="col" data-column-id=${column.id}>
        
            ${column.sortable ? html`
            <div class="mdc-data-table__header-cell-wrapper" @click=${()=> this._sortByColumn(column.id)}>
        
                <div class="mdc-data-table__header-cell-label">
                    ${column.displayName ? column.displayName : column.name}
                </div>
        
                <mwc-icon-button class="mdc-icon-button 
                                                        material-icons mdc-data-table__sort-icon-button 
                                                        fds-data-table-sort-icon"
                    aria-label="Sort by ${column.displayName ? column.displayName : column.name}"
                    aria-describedby="${column.id}-status-label" icon="${this._getSortIcon(column.id)}">
                </mwc-icon-button>
                <div class="mdc-data-table__sort-status-label" aria-hidden="true" id="carbs-status-label"></div>
            </div>`
            : column.displayName ? column.displayName : column.name}
        
        </th>`
    }

    private _getSortedDataSource(dataSource: FdsTableRow[]): FdsTableRow[] {

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

    private _getDataTableRow(row: FdsTableRow, columnsToDisplay: string[]) {
        let rowCells: TemplateResult[] = [];
        const rowPrefixCells = this._getRowPrefixCells(row);
        const rowDataCells = columnsToDisplay.map(columnId => {
            return this._getDataTableCell(row, this._columnsData[columnId]);
        })

        rowCells = [...rowPrefixCells, ...rowDataCells];
        return html`
        <tr class="mdc-data-table__row ${this.selectable && row._fdsSelected ? 'mdc-data-table__row--selected' : ''}"
            id="${row._fdsRowId}" @click=${()=> this._onRowSelected(row)}>
            ${rowCells}
        </tr>`
    }

    private _getRowPrefixCells(row: FdsTableRow) {
        const rowPrexFixCell: TemplateResult[] = [];
        if (this.selectable && this.multiSelect && this.showMultiSelectCheckBox) {
            rowPrexFixCell.push(
                html`
                <td class="mdc-data-table__cell mdc-data-table__cell--checkbox">
                    <fds-checkbox @change=${(event)=> this._tableRowCheckboxChanged(event, row)}
                        id=${row._fdsRowId + FDS_TABLE_ROW_CHECKBOX_SUFFIX}
                        ?checked=${row._fdsSelected}
                        ></fds-checkbox>
                </td>`
            );
        };

        if (this.selectable && !this.multiSelect && this.showSingleSelectRadioBox) {
            rowPrexFixCell.push(
                html`
                <td class="mdc-data-table__cell mdc-data-table__cell--radiobox">
                    <fds-radio @change=${()=> this._onRadioButtonSelected(row)}
                        name=${FDS_TABLE_RADIO_GROUP}
                        id=${row._fdsRowId + FDS_TABLE_ROW_RADIO_SUFFIX}
                        ?checked=${row._fdsSelected}
                        ></fds-radio>
                </td>`
            );
        }
        return rowPrexFixCell;
    }

    private _getDataTableCell(row: FdsTableRow, column: FdsTableColumn) {
        const tableCellStore = new FdsTableCellStore(row, column);
        return tableCellStore.getTableDataCellTemplate();
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

    private _onRowSelected(row: FdsTableRow) {
        if (this.showMultiSelectCheckBox || this.showSingleSelectRadioBox) return;
        if (this.selectable && !this.multiSelect) {
            const rowToDeselect = this._dataSource.find(dataItem => dataItem._fdsSelected && dataItem._fdsRowId !== row._fdsRowId);
            if (rowToDeselect) {
                this._handleSelected(rowToDeselect, false);
            }
        }
        this._handleSelected(row);

        this._dispatchSelectedData();
    }

    private _onRadioButtonSelected(row) {
        const rowToDeselect = this._dataSource.find(item => item._fdsSelected && item._fdsRowId !== row._fdsRowId)
        if (rowToDeselect) {
            this._handleSelected(rowToDeselect, false);
        }
        this._handleSelected(row, true);
        this._dispatchSelectedData();
    }

    private _tableHeaderCheckboxChanged(event) {
        const selectStatus = event.target.checked;
        const rowToChange = this._dataSource.filter(row => row._fdsSelected !== selectStatus);

        rowToChange.forEach(row => {
            this._handleSelected(row, selectStatus);
            const checkBoxElement = this.shadowRoot?.querySelector('#' + row._fdsRowId + FDS_TABLE_ROW_CHECKBOX_SUFFIX) as any;
            if (checkBoxElement) {
                checkBoxElement.checked = selectStatus;
            }
        })
        this._dispatchSelectedData();
    }

    private _tableRowCheckboxChanged(event, row: FdsTableRow) {
        this._handleSelected(row, event.target.checked);
        this._dispatchSelectedData();
        this._checkIfAllRowSelected();
    }

    private _checkIfAllRowSelected() {
        let selectRowCount = 0;
        this._dataSource.forEach(row => {
            if (row._fdsSelected) {
                selectRowCount++;
            }
        })
        if (!this._headerCheckBox) {
            this._headerCheckBox = this.shadowRoot?.querySelector('#' + FDS_TABLE_HEADER_CHECKBOX);
        }
        if (this._headerCheckBox) {
            if (this._dataSource.length === selectRowCount) {
                this._headerCheckBox.checked = true;
                this._headerCheckBox.indeterminate = false;
            } else if (selectRowCount === 0) {
                this._headerCheckBox.checked = false;
                this._headerCheckBox.indeterminate = false;
            } else {
                this._headerCheckBox.checked = false;
                this._headerCheckBox.indeterminate = true;
            }
        }

    }

    private _handleSelected(row: FdsTableRow, selected?: boolean) {
        const dataIdx = this._dataSource.findIndex(dataItem => dataItem._fdsRowId === row._fdsRowId);

        if (selected === undefined) {
            if (this._dataSource[dataIdx]._fdsSelected) {
                this._deSelectRow(this._dataSource[dataIdx]);
            } else {
                this._selectRow(this._dataSource[dataIdx])
            }
        } else if (selected) {
            this._selectRow(this._dataSource[dataIdx]);
        } else {
            this._deSelectRow(this._dataSource[dataIdx]);
        }

    }
    private _selectRow(row: FdsTableRow) {
        row._fdsSelected = true;
        this.shadowRoot?.querySelector(`#${row._fdsRowId}`)?.classList.toggle('mdc-data-table__row--selected');
        const checkboxToUpdate = this.shadowRoot?.querySelector(`#${row._fdsRowId + FDS_TABLE_ROW_CHECKBOX_SUFFIX}`) as any;
        if (checkboxToUpdate) {
            checkboxToUpdate.checked = true;
        }
    }

    private _deSelectRow(row: FdsTableRow) {
        row._fdsSelected = false;
        this.shadowRoot?.querySelector(`#${row._fdsRowId}`)?.classList.remove('mdc-data-table__row--selected');
        const checkboxToUpdate = this.shadowRoot?.querySelector(`#${row._fdsRowId + FDS_TABLE_ROW_CHECKBOX_SUFFIX}`) as any;
        if (checkboxToUpdate) {
            checkboxToUpdate.checked = false;
        }
    }

    private _formatFdsDataSource(data: FdsTableRow[]): FdsTableRow[] {
        return data.map((rowData, index) => {
            return { ...rowData, '_fdsRowId': FDS_TABLE_DATA_ROW_PREFIX + index, _fdsSelected: false };
        });
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

    private _getPureData(data: FdsTableRow): any {
        const dataCopy = { ...data };
        delete dataCopy._fdsSelected;
        delete dataCopy._fdsRowId;
        return dataCopy;
    }

    private _dispatchSelectedData() {
        let dataToSend: any = [];
        if (this.selectable) {
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
            this.dispatchEvent(new CustomEvent(DATA_TABLE_EVENTS.DATA_TABLE_ROW_SELECTED, {
                bubbles: true,
                composed: true,
                detail: {
                    data: dataToSend,
                }
            }));
        }
    }
}
