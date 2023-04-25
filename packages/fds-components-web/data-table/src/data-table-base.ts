/* eslint-disable @typescript-eslint/no-explicit-any */
import '@finastra/checkbox';
import '@finastra/chip';
import '@finastra/icon';
import '@finastra/icon-button';
import '@finastra/linear-progress';
import '@finastra/radio';
import { html, LitElement, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import {
  DATA_TABLE_EVENTS,
  FDS_TABLE_HEADER_CHECKBOX,
  FDS_TABLE_RADIO_GROUP,
  FDS_TABLE_ROW_CHECKBOX_SUFFIX,
  FDS_TABLE_ROW_RADIO_SUFFIX
} from './constants';
import { FdsTableCellStore } from './data-table-cells';
import { FdsColumnSortDirection, FdsColumnType, FdsTableColumn, FdsTableRow } from './model';
import { formatFdsDataSource, getCellClassByType, getFdsDataTablePureData } from './utils';

export abstract class DataTableBase extends LitElement {
  private _dataSource: FdsTableRow[] = [];
  private _selectable = false;
  private _multiSelect = false;
  private _showSingleSelectRadioBox = false;
  private _showMultiSelectCheckBox = false;

  @property({
    type: Array
  })
  set dataSource(data: FdsTableRow[]) {
    this._dataSource = this._formatFdsDataSource(data);
    this.requestUpdate();
  }
  get dataSource(): FdsTableRow[] {
    return this._dataSource;
  }

  @property({
    type: Array
  })
  columns: FdsTableColumn[] = [];

  @property({
    type: Array
  })
  columnsToDisplay: string[] = [];

  @property({
    type: Boolean
  })
  set selectable(selectable: boolean) {
    this._selectable = selectable;
  }
  get selectable(): boolean {
    return this._selectable;
  }

  @property({
    type: Boolean
  })
  set multiSelect(multiSelect: boolean) {
    this._multiSelect = multiSelect;
  }
  get multiSelect(): boolean {
    return this._multiSelect;
  }

  @property({
    type: Boolean
  })
  set showSingleSelectRadioBox(showRadioBox: boolean) {
    this._showSingleSelectRadioBox = showRadioBox;
    if (showRadioBox) {
      this.selectable = true;
      this.multiSelect = false;
    }
  }
  get showSingleSelectRadioBox(): boolean {
    return this._showSingleSelectRadioBox;
  }

  @property({
    type: Boolean
  })
  set showMultiSelectCheckBox(showCheckBox: boolean) {
    this._showMultiSelectCheckBox = showCheckBox;
    if (showCheckBox) {
      this.selectable = true;
      this.multiSelect = true;
    }
  }

  get showMultiSelectCheckBox(): boolean {
    return this._showMultiSelectCheckBox;
  }

  @property({ type: Boolean }) emitPureData = true;

  @property({ type: Boolean }) dense = false;

  private _columnsData = {};
  private _sortColumnId = '';
  private _sortDirection: FdsColumnSortDirection = FdsColumnSortDirection.none;
  private _headerCheckBox: any;

  override render() {
    this._columnsData = this.columns.reduce((acc, column) => {
      acc[column.id] = column;
      return acc;
    }, {});

    const tableHeaders = this._getDataTableHeaderCells();

    const tableRows = this._getSortedDataSource([...this._dataSource]).map((row) => {
      return this._getDataTableRow(row, this.columnsToDisplay);
    });

    return html` <div
      class="mdc-data-table__table-container fds-data-table
                                                ${this.selectable &&
      ((this.multiSelect && this.showMultiSelectCheckBox) || (!this.multiSelect && this.showSingleSelectRadioBox))
        ? 'fds-data-table-select-enabled'
        : ''}"
    >
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
    this._dataSource.forEach((row) => {
      this._handleSelected(row, row._fdsSelected);
    });
    this._checkIfAllRowSelected();
  }

  private _getDataTableHeaderCells(): TemplateResult[] {
    let headerCells: TemplateResult[] = [];
    const headerPrefixCells = this._getHeaderPrefixCells();
    headerCells = [...headerPrefixCells];
    this.columnsToDisplay.forEach((columnId) => headerCells.push(this._getDataTableHeaderCell(this._columnsData[columnId])));
    return headerCells;
  }

  private _getHeaderPrefixCells() {
    const headerCells: TemplateResult[] = [];
    if (this.selectable && this.multiSelect && this.showMultiSelectCheckBox) {
      headerCells.push(
        html` <th class="mdc-data-table__header-cell mdc-data-table__header-cell--checkbox" role="columnheader" scope="col">
          <fds-checkbox
            id=${FDS_TABLE_HEADER_CHECKBOX}
            @change=${(event) => this._tableHeaderCheckboxChanged(event)}
            ?dense="${this.dense}"
            color="primary"
            aria-label="Select all rows"
          >
          </fds-checkbox>
        </th>`
      );
    }

    if (this.selectable && !this.multiSelect && this.showSingleSelectRadioBox) {
      headerCells.push(
        html` <th class="mdc-data-table__header-cell mdc-data-table__header-cell--radiobox" role="columnheader" scope="col">
          <fds-radio style="display: none;" ?dense="${this.dense}"></fds-radio>
        </th>`
      );
    }
    return headerCells;
  }

  private _getDataTableHeaderCell(column: FdsTableColumn) {
    const headerType = getCellClassByType(column);
    return html` <th
      class="mdc-data-table__header-cell ${headerType} ${column.align} ${column.sortable ? 'mdc-data-table__header-cell--with-sort' : ''}"
      role="columnheader"
      scope="col"
      data-column-id=${column.id}
      style=${column._style}
    >
      ${column.type === FdsColumnType.date ? html` <fds-icon>date_range</fds-icon> ` : ''}
      ${column.sortable ? this._getDataTableSortableHeaderCell(column) : column.displayName ? column.displayName : column.name}
    </th>`;
  }

  private _getDataTableSortableHeaderCell(column: FdsTableColumn) {
    const numberTypeColumn = [FdsColumnType.number];
    let sortIconPosition = 'right';

    const sortableIconElement = html`
      <fds-icon-button
        class="fds-data-table-sort-icon"
        ?dense="${this.dense}"
        aria-label="Sort by ${column.displayName ? column.displayName : column.name}"
        aria-describedby="${column.id}-status-label"
        icon="${this._getSortIcon(column.id)}"
      >
      </fds-icon-button>
    `;

    if (numberTypeColumn.indexOf(column.type) > -1) {
      sortIconPosition = 'left';
    }

    return html` <div class="mdc-data-table__header-cell-wrapper" @click=${() => this._sortByColumn(column.id)}>
      ${sortIconPosition === 'left' ? sortableIconElement : ''}
      <div class="mdc-data-table__header-cell-label">${column.displayName ? column.displayName : column.name}</div>
      ${sortIconPosition === 'right' ? sortableIconElement : ''}

      <div class="mdc-data-table__sort-status-label" aria-hidden="true" id="carbs-status-label"></div>
    </div>`;
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
    const rowDataCells = columnsToDisplay.map((columnId) => {
      return this._getDataTableCell(row, this._columnsData[columnId]);
    });

    rowCells = [...rowPrefixCells, ...rowDataCells];
    return html` <tr
      class="mdc-data-table__row ${this.selectable && row._fdsSelected ? 'mdc-data-table__row--selected' : ''}"
      id="${row._fdsRowId}"
      @click=${() => this._onRowSelected(row)}
      style=${row._fdsTableRowStyle}
    >
      ${rowCells}
    </tr>`;
  }

  private _getRowPrefixCells(row: FdsTableRow) {
    const rowPrexFixCell: TemplateResult[] = [];
    if (this.selectable && this.multiSelect && this.showMultiSelectCheckBox) {
      rowPrexFixCell.push(
        html` <td class="mdc-data-table__cell mdc-data-table__cell--checkbox">
          <fds-checkbox
            @change=${(event) => this._tableRowCheckboxChanged(event, row)}
            ?dense="${this.dense}"
            id=${row._fdsRowId + FDS_TABLE_ROW_CHECKBOX_SUFFIX}
            ?checked=${row._fdsSelected}
            ?disabled=${row._fdsSelectDisabled}
          ></fds-checkbox>
        </td>`
      );
    }

    if (this.selectable && !this.multiSelect && this.showSingleSelectRadioBox) {
      rowPrexFixCell.push(
        html` <td class="mdc-data-table__cell mdc-data-table__cell--radiobox">
          <div class="mdc-data-table__cell--radiobox-container">
            <fds-radio
              @change=${() => this._onRadioButtonSelected(row)}
              ?dense="${this.dense}"
              name=${FDS_TABLE_RADIO_GROUP}
              id=${row._fdsRowId + FDS_TABLE_ROW_RADIO_SUFFIX}
              ?checked=${row._fdsSelected}
              ?disabled=${row._fdsSelectDisabled}
            ></fds-radio>
          </div>
        </td>`
      );
    }
    return rowPrexFixCell;
  }

  private _getDataTableCell(row: FdsTableRow, column: FdsTableColumn) {
    const tableCellStore = new FdsTableCellStore(row, column, this.dense);
    return tableCellStore.getTableDataCellTemplate();
  }

  private _getSortIcon(columnId: string): string {
    if (this._sortColumnId !== columnId) {
      return '';
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
    if (
      !this.selectable ||
      (this.selectable && this.multiSelect && this.showMultiSelectCheckBox) ||
      (this.showSingleSelectRadioBox && this.selectable && !this.multiSelect)
    )
      return;
    if (this.selectable && !this.multiSelect) {
      const rowToDeselect = this._dataSource.find((dataItem) => dataItem._fdsSelected && dataItem._fdsRowId !== row._fdsRowId);
      if (rowToDeselect) {
        this._handleSelected(rowToDeselect, false);
      }
    }
    this._handleSelected(row);

    this._dispatchSelectedData();
  }

  private _onRadioButtonSelected(row) {
    const rowToDeselect = this._dataSource.find((item) => item._fdsSelected && item._fdsRowId !== row._fdsRowId);
    if (rowToDeselect) {
      this._handleSelected(rowToDeselect, false);
    }
    this._handleSelected(row, true);
    this._dispatchSelectedData();
  }

  private _tableHeaderCheckboxChanged(event) {
    const selectStatus = event.target.checked;
    const rowToChange = this._dataSource.filter((row) => !row._fdsSelectDisabled && row._fdsSelected !== selectStatus);

    rowToChange.forEach((row) => {
      this._handleSelected(row, selectStatus);
      const checkBoxElement = this.shadowRoot?.querySelector('#' + row._fdsRowId + FDS_TABLE_ROW_CHECKBOX_SUFFIX) as any;
      if (checkBoxElement) {
        checkBoxElement.checked = selectStatus;
      }
    });
    this._dispatchSelectedData();
  }

  private _tableRowCheckboxChanged(event, row: FdsTableRow) {
    this._handleSelected(row, event.target.checked);
    this._dispatchSelectedData();
    this._checkIfAllRowSelected();
  }

  private _checkIfAllRowSelected() {
    let selectRowCount = 0;
    let selectableRowCount = 0;
    this._dataSource.forEach((row) => {
      if (!row._fdsSelectDisabled) {
        selectableRowCount++;
      }

      if (!row._fdsSelectDisabled && row._fdsSelected) {
        selectRowCount++;
      }
    });
    if (!this._headerCheckBox) {
      this._headerCheckBox = this.shadowRoot?.querySelector('#' + FDS_TABLE_HEADER_CHECKBOX);
    }
    if (this._headerCheckBox && selectableRowCount > 0) {
      if (selectableRowCount === selectRowCount) {
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
    const dataIdx = this._dataSource.findIndex((dataItem) => dataItem._fdsRowId === row._fdsRowId);

    if (selected === undefined) {
      if (this._dataSource[dataIdx]._fdsSelected) {
        this._deSelectRow(this._dataSource[dataIdx]);
      } else {
        this._selectRow(this._dataSource[dataIdx]);
      }
    } else if (selected) {
      this._selectRow(this._dataSource[dataIdx]);
    } else {
      this._deSelectRow(this._dataSource[dataIdx]);
    }
  }
  private _selectRow(row: FdsTableRow) {
    row._fdsSelected = true;
    const classList = this.shadowRoot?.querySelector(`#${row._fdsRowId}`)?.classList;
    if (!classList?.contains('mdc-data-table__row--selected')) {
      classList?.add('mdc-data-table__row--selected');
    }

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
    return formatFdsDataSource(data);
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

  private _dispatchSelectedData() {
    let dataToSend: any = [];
    if (this.selectable) {
      const selectedRowElements = this.shadowRoot?.querySelectorAll('.mdc-data-table__row--selected');
      if (selectedRowElements && selectedRowElements.length > 0) {
        const selectedRows: any[] = [];
        selectedRowElements.forEach((row) => {
          const rowData = this.dataSource.find((data) => data._fdsRowId === row.id);
          if (rowData && !rowData._fdsSelectDisabled) {
            selectedRows.push(rowData);
          }
        });
        dataToSend = this.emitPureData ? selectedRows.map((row) => getFdsDataTablePureData(row)) : selectedRows;
      }
      this.dispatchEvent(
        new CustomEvent(DATA_TABLE_EVENTS.DATA_TABLE_ROW_SELECTED, {
          bubbles: true,
          composed: true,
          detail: {
            data: dataToSend
          }
        })
      );
    }
  }
}
