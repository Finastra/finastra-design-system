import "@finastra/select";
import "@material/icon-button";
import { html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { PAGINATION_EVENTS } from "../constants";

export interface FdsPageEvent {
    length: number;
    pageIndex: number;
    pageSize: number;
    previousPageIndex: number;
}

export abstract class DataTablePaginationBase extends LitElement {

    @property({
        type: Number
    }) pageIndex = 0;

    @property({
        type: Number,
    }) length = 0;

    @property({
        type: Number,
    }) pageSize = 10;

    @property({
        type: Array
    }) pageSizeOptions = [];

    @property({
        type: Boolean
    }) showFirstLastButtons = false;

    override render() {
        const maxPageIdx = Math.floor(this.length / this.pageSize);
        return html`
        <div class="fds-data-table-pagination mdc-data-table__pagination" >
            <div class="mdc-data-table__pagination-trailing">
                ${this.pageSizeOptions.length > 0 ?
                html`
                    <div class="mdc-data-table__pagination-rows-per-page">
                        <div class="mdc-data-table__pagination-rows-per-page-label">
                            Rows per page
                        </div>
                        <fds-select dense class="fds-select" value="${this.pageSize ? this.pageSize : this.pageSizeOptions[0]}">
                            ${this.getPageSizeOptionsItems(this.pageSizeOptions)}
                        </fds-select>
                    </div>
                    `: ``
            }
 
                <div class="mdc-data-table__pagination-navigation">
                    <span class="mdc-data-table__pagination-total mdc-typography mdc-typography--body2">
                    ${this.pageIndex * this.pageSize + 1} - ${Math.min(this.pageIndex * this.pageSize + 1 + this.pageSize - 1, this.length)} of ${this.length}
                    </span>
                    
                    ${this.showFirstLastButtons ?
                html`<mwc-icon-button icon="first_page"  .disabled=${this.pageIndex <= 0} @click=${() => this.goToPage(0)}></mwc-icon-button>` : ``}
                    
                    <mwc-icon-button icon="chevron_left"  .disabled=${this.pageIndex <= 0} @click=${() => this.goToPage(this.pageIndex - 1)}></mwc-icon-button>
                    <mwc-icon-button icon="chevron_right"   .disabled=${this.pageIndex >= maxPageIdx} @click=${() => this.goToPage(this.pageIndex + 1)}></mwc-icon-button>
                    
                    ${this.showFirstLastButtons ?
                html`<mwc-icon-button icon="last_page"  .disabled=${this.pageIndex >= maxPageIdx} @click=${() => this.goToPage(Math.floor(this.length / this.pageSize))}></mwc-icon-button>` : ``}
                    
                </div>
            </div>
        </div>
            `;
    }

    private getPageSizeOptionsItems(pageSizeOptions: number[]) {
        return pageSizeOptions.map(pageSize => {
            return html`<mwc-list-item value="${pageSize}" @click=${() => this.updatePageSize(pageSize)}>${pageSize}</mwc-list-item>`
        })
    }

    updatePageSize(pageSize: number) {
        this.pageIndex = 0;
        this.pageSize = pageSize;
        this._onPaginationChanged();
    }

    goToPage(pageIndex: number) {
        const maxPageIdx = Math.floor(this.length / this.pageSize);
        if (pageIndex < 0) {
            this.pageIndex = 0;
        } else {
            if (pageIndex > maxPageIdx) {
                this.pageIndex = maxPageIdx;
            } else {
                this.pageIndex = pageIndex;
            }
        }

        this._onPaginationChanged();
    }
    _onPaginationChanged() {
        this.dispatchEvent(new CustomEvent(PAGINATION_EVENTS.PAGINATION_CHANGED, {
            detail: {
                pageIndex: this.pageIndex,
                pageSize: this.pageSize,
                length: this.length,
                previousPageIndex: this.pageIndex
            }
        }));
    }
}
