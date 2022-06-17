
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { DATA_TABLE_EVENTS } from './constants';
import './data-table';
import { FdsTableColumn, FdsTableRow } from './data-table-base';
import './pagination/data-table-pagination';

@customElement('fds-data-table-with-pagination')
export class DataTableWithPagination extends LitElement{

    private pageSize = 5;

    @property({
        type: Array,
    }) dataSource: FdsTableRow[] = [];

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

    @property({
        type: Number
    }) pageIndex = 0;

    private _pageSizeOptions: number[] = [];
    @property({
        type: Array
    }) 
    set pageSizeOptions(options){
        this._pageSizeOptions = options
        if(options.length > 0) {
            this.pageSize = options[0]
        }
    } 
    get pageSizeOptions(){
        return this._pageSizeOptions;
    }

    @property({
        type: Boolean
    }) showFirstLastButtons = false;

    private selected: FdsTableRow[] = [];


    override render(){
        return html`
        <div style="display:flex;
                    flex-direction: column;
                    justify-content: center;
                    place-content: flex-end flex-start;
                    align-items: flex-end;
                    ">
            <fds-data-table
                .dataSource=${this.getDataByPagination()}
                .columns=${this.columns}
                .columnsToDisplay=${this.columnsToDisplay}
                .selectable=${this.selectable}
                .multiSelect=${this.multiSelect}
                @onFdsDataTableRowSelected=${this.onDataTableRowSelected}
            >
            </fds-data-table>
            <fds-data-table-pagination
                .length=${this.dataSource.length}
                .pageIndex=${this.pageIndex}
                .pageSize=${this.pageSizeOptions.length > 0 ? this.pageSizeOptions[0] : 5}
                .pageSizeOptions=${this.pageSizeOptions}
                .showFirstLastButtons=${this.showFirstLastButtons}
                @onFdsPaginationChanged=${this.onDataTablePaginationChanged}
            >
            </fds-data-table-pagination>
        </div>
          
        `
    }
    getDataByPagination(){
        return [...this.dataSource].slice(this.pageIndex * this.pageSize, (this.pageIndex + 1) * this.pageSize)
    }
    onDataTablePaginationChanged(e){
        this.pageIndex = e.detail.pageIndex;
        this.pageSize = e.detail.pageSize;
        this.requestUpdate();
    }
    onDataTableRowSelected(e){
        this.selected = e.detail;
        if(this.selectable){
            this.dispatchEvent(new CustomEvent(DATA_TABLE_EVENTS.DATA_TABLE_WITH_PAGINATION_ROW_SELECTED, {
                bubbles: true,
                composed: true,
                detail: {
                    data: this.selected,
                }
            }));
        }
    }
}