import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { DATA_TABLE_EVENTS } from './constants';
import './data-table';
import { styles } from './data-table-with-pagination-styles.css';
import { FdsTableColumn, FdsTableRow } from './model';
import './pagination/data-table-pagination';
import { formatFdsDataSource, getFdsDataTablePureData } from './utils';

/**
 * This component is a simple example combining fds-data-table with fds-data-table-pagination component.
 * If it can meet your requirements, you can use it directly with it.
 * If it can't meet your requirements, you can use fds-data-table with fds-data-table-pagination to compose your own logic.
 *
 *
 * @cssprop [--fds-data-table-border-width=1px] - Size of the border width
 * @cssprop [--fds-data-table-max-height=615px] - Max height of table. By default there will be max 10 rows displayed which means 615px for normal size. 439px for dense size. 538px for dense size with checkbox or radiobox.
 * @attr [dataSource=[]] - Array of data to display in the table.
 * @attr [columns=[]] - Array of column definitions.
 * @attr [columnsToDisplay=[]] - Array of column ids to display.
 * @attr [selectable=false] - Whether to show if a row is selected.
 * @attr [recordSelectionCrossPages=false] - Wether selection cross pages is enabled
 * @attr [multiSelect=false] - Whether to allow multiple rows to be selected.
 * @attr [showSingleSelectRadioBox=false] - Whether to show single select radio box column. When showSingleSelectRadioBox=true implicits selectable=true multiSelect=false
 * @attr [showMultiSelectCheckBox=false] - Whether to show select checkbox column. When showMultiSelectCheckBox=true implicits selectable=true multiSelect=true.
 * @attr [pageSizeOptions=[]] - Array of page sizes to display, pageSize will take the first element otherwise pageSize will be 5.
 * @attr [showFirstLastButtons=false] - Whether to display the first and last page buttons.
 * @attr [dense=false] - Wether display data table in a smaller size
 *
 * @fires onFdsDataTableWithPaginationRowSelected - Fired when selecting a row
 *
 */
@customElement('fds-data-table-with-pagination')
export class DataTableWithPagination extends LitElement {
  static override styles = [styles];

  private pageSize = 5;

  private _dataSource: FdsTableRow[] = [];
  @property({
    type: Array
  })
  set dataSource(data) {
    this._dataSource = formatFdsDataSource(data);
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
  selectable = false;

  @property({
    type: Boolean
  })
  recordSelectionCrossPages = false;

  @property({
    type: Boolean
  })
  showSingleSelectRadioBox = false;

  @property({
    type: Boolean
  })
  multiSelect = false;

  @property({
    type: Boolean
  })
  showMultiSelectCheckBox = false;

  @property({
    type: Number
  })
  pageIndex = 0;

  private _pageSizeOptions: number[] = [];
  @property({
    type: Array
  })
  set pageSizeOptions(options) {
    this._pageSizeOptions = options;
    if (options.length > 0) {
      this.pageSize = options[0];
    }
  }
  get pageSizeOptions() {
    return this._pageSizeOptions;
  }

  @property({
    type: Boolean
  })
  showFirstLastButtons = false;

  @property({
    type: Boolean
  })
  dense = false;

  override render() {
    return html`
      <div class="fds-data-table-with-pagination-wrapper">
        <fds-data-table
          ?dense="${this.dense}"
          .dataSource=${this.getDataByPagination()}
          .columns=${this.columns}
          .columnsToDisplay=${this.columnsToDisplay}
          .selectable=${this.selectable}
          .showSingleSelectRadioBox=${this.showSingleSelectRadioBox}
          .multiSelect=${this.multiSelect}
          .emitPureData=${false}
          .showMultiSelectCheckBox=${this.showMultiSelectCheckBox}
          @onFdsDataTableRowSelected=${this.onDataTableRowSelected}
        >
        </fds-data-table>
        <fds-data-table-pagination
          ?dense="${this.dense}"
          .length=${this.dataSource.length}
          .pageIndex=${this.pageIndex}
          .pageSize=${this.pageSizeOptions.length > 0 ? this.pageSizeOptions[0] : 5}
          .pageSizeOptions=${this.pageSizeOptions}
          .showFirstLastButtons=${this.showFirstLastButtons}
          @onFdsPaginationChanged=${this.onDataTablePaginationChanged}
        >
        </fds-data-table-pagination>
      </div>
    `;
  }
  getDataByPagination() {
    return [...this.dataSource].slice(this.pageIndex * this.pageSize, (this.pageIndex + 1) * this.pageSize);
  }
  onDataTablePaginationChanged(e) {
    this.pageIndex = e.detail.pageIndex;
    this.pageSize = e.detail.pageSize;
    this.requestUpdate();
  }
  onDataTableRowSelected(e: CustomEvent) {
    let selectedData: unknown[] = [];
    if (this.recordSelectionCrossPages) {
      this.recodeSelectionToDataSource(e.detail.data);
      selectedData = this.dataSource
        .filter((row) => row._fdsSelected && !row._fdsSelectDisabled)
        .map((item) => getFdsDataTablePureData(item));
    } else {
      selectedData = e.detail.data;
    }
    if (this.selectable) {
      this.dispatchEvent(
        new CustomEvent(DATA_TABLE_EVENTS.DATA_TABLE_WITH_PAGINATION_ROW_SELECTED, {
          bubbles: true,
          composed: true,
          detail: {
            data: selectedData
          }
        })
      );
    }
  }

  private recodeSelectionToDataSource(selectedData: FdsTableRow[]) {
    const selectedIdsInCurrentPage = selectedData.map((item) => item._fdsRowId as string);
    for (let i = this.pageIndex * this.pageSize; i <= Math.min((this.pageIndex + 1) * this.pageSize, this.dataSource.length) - 1; i++) {
      if (!this.dataSource[i]._fdsSelectDisabled) {
        if (selectedIdsInCurrentPage.includes(this.dataSource[i]._fdsRowId as string)) {
          this.dataSource[i]._fdsSelected = true;
        } else {
          this.dataSource[i]._fdsSelected = false;
        }
      }
    }
  }
}
