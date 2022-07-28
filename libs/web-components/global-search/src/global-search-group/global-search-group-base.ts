import '@finastra/icon-button';
import { html, LitElement, TemplateResult } from "lit";
import { property } from "lit/decorators.js";
import { FdsSearchItem, FDS_GLOBAL_SEARCH_ITEM_REMOVED, FDS_GLOBAL_SEARCH_ITEM_SELECTED } from '../global-search.model';



export class FdsGlobalSearchGroupBase extends LitElement{

    @property({type: String}) title = "";
    @property({type: Array}) items: FdsSearchItem[] = [];


    render(): TemplateResult{
        return html`
            <div class="fds-global-search-group">
                <h4 class="fds-global-search-group-title">
                    ${this.title}
                </h4>
                ${this.getSearchItemList()}
            </div>
        `;
    }

    setSearchItem(items: FdsSearchItem[]){
        this.items = items;
        this.requestUpdate();
    }

    private getSearchItemList(): TemplateResult{
        return html`
           ${ this.items.map( item => {
               return html`
                    <a class="fds-search-item" @click=${() => this.onClick(item)}>
                        <span class="fds-search-item-detail">
                             <fds-icon-button dense=true .icon=${item.icon} .disabled=${true}></fds-icon-button>
                             <span>${item.text}</span>
                        </span>

                        ${
                            item.displayCloseBtn? 
                            html` <fds-icon-button dense=true icon="clear" @click=${(e) =>this.removeItem(item, e)}></fds-icon-button>`
                            : ''
                        }
                    </a>
               `
           })}
        `
    }

    private onClick(item: FdsSearchItem){
        this.dispatchEvent(new CustomEvent(FDS_GLOBAL_SEARCH_ITEM_SELECTED, {
            bubbles: true,
            composed: true,
            detail: item.text
        }))
    }

    private removeItem(item: FdsSearchItem, e){
        e.stopPropagation();

        this.dispatchEvent(new CustomEvent(FDS_GLOBAL_SEARCH_ITEM_REMOVED, {
            bubbles: true,
            composed: true,
            detail:item.text
        }))
    }

}