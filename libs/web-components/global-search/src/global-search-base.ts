import '@finastra/divider';
import '@finastra/icon-button';
import '@finastra/linear-progress';
import { html, LitElement } from 'lit';
import { property } from "lit/decorators.js";
import { FdsSearchItem, FDS_GLOBAL_RECENT_SEARCH_KEY, FDS_GLOBAL_SEARCH_INPUT_CHANGED, FDS_GLOBAL_SEARCH_ITEM_REMOVED, FDS_GLOBAL_SEARCH_ITEM_SELECTED, FDS_GLOBAL_SEARCH_PAGE_SELECTED, MAX_RECENT_SEARCH } from './global-search.model';


export class FdsGlobalSearchBase extends LitElement {

    @property({type: String}) value = '';
    @property({type: Boolean}) loading = false;
    @property({type: String}) placeholder = '';

    private _enableRecentSearch = true;
    @property({type: Boolean}) 
    set enableRecentSearch(status){
        this._enableRecentSearch = status;
        this.requestUpdate();
    } 
    get enableRecentSearch(){
        return this._enableRecentSearch;
    }

    private isOpen = false;
    private overlay: any = null;
    private recentSearch: FdsSearchItem[] = [];
    private wrapperElement: any = null;
    private wrapperContainerElement: any = null;
    private textFieldElement: any = null;
    private clearButtonElement: any = null;
    
    constructor(){
        super();
        this.addEventListener(FDS_GLOBAL_SEARCH_ITEM_REMOVED, (event)=>{
            const itemToRemove = (event as any).detail;
            this.recentSearch = this.recentSearch.filter(item => item.text !== itemToRemove.text);
            this.updateRecentSearch();
            this.requestUpdate();
        })
        this.addEventListener(FDS_GLOBAL_SEARCH_ITEM_SELECTED, (e) =>{
            this.addNewRecentSearch((e as any).detail.text);
            this.closeGlobalSearch();
        })
        this.addEventListener(FDS_GLOBAL_SEARCH_PAGE_SELECTED, () =>{
            this.closeGlobalSearch();
        })
        this.addEventListener('keypress', (e)=>{
            if(e.key === 'Enter' && this.isOpen){
                this.addNewRecentSearch();
                this.closeGlobalSearch();
            }
        })
    }
    
    render() {
       return html`
             <div class="fds-global-search">
                <div class="fds-global-search-wrapper">
                    <div class="fds-global-search-text-container">
                        <div class="fds-global-search-text-field">
                            <div class="fds-global-search-text-action">
                                <fds-icon-button primary=true icon="search" @click=${(e) => this.triggerSearchWithText(e)}></fds-icon-button>
                            </div>
                            <div class="fds-global-search-text-input">
                                <input 
                                    id="fds-global-search-textfield"
                                    placeholder="${this.placeholder}"
                                    value="${this.value}"
                                    tabindex="-1"
                                    @focus=${() => this.onGlobalSearchInputFocus()}
                                    @input=${() => this.onGlobalSearchInputChanged()}
                                    @blur=${() => this.onGlobalSearchInputBlur()}
                                    />
                            </div>
                            <div class="fds-global-search-text-action">
                                <fds-icon-button  id="fds-global-search-clear-btn" class="${this.value? '' : 'fds-global-search-action-hide'}" dense icon="close" @click=${(e) => this.clearInput(e)} ></fds-icon-button>
                            </div>
                        </div>
                        <fds-divider></fds-divider>
                    </div>
                    ${this.loading ? html`<fds-linear-progress indeterminate></fds-linear-progress>`: ''}
                    <div class="fds-global-search-container ${this.isOpen? 'fds-global-search-container-open': ''}">
                        <div class="fds-global-search-block">
                            ${ this.renderRecentSearch()}
                            <slot name="searches"></slot>
                            <slot name="pages"></slot>
                            <slot name=“summary></slot>
                        </div>
                    </div>
                </div>
    
            </div>
       `
    }

    renderRecentSearch(){
        if(!this.recentSearch || !this.enableRecentSearch){
            return ''
        }

        const recentList = this.getRecentList();
        
        if(recentList.length === 0) {
            return ''
        }

        return html`
            <fds-global-search-group 
                id="fds-global-search-recent"
                title="Recent searches"
                icon="history"
                displayCloseBtn=true
                .items=${recentList}
            >
            </fds-global-search-group>
        `
    }
    
    getRecentList(): FdsSearchItem[]{
        if(this.recentSearch.length === 0){
            let recentSearchText: [] = [];
            try{
                recentSearchText  = JSON.parse(localStorage.getItem(FDS_GLOBAL_RECENT_SEARCH_KEY) as any) || [];
            }catch{
                recentSearchText = [];
            }
            this.recentSearch = recentSearchText.map( text => {
                return {
                    text: text,
                    displayCloseBtn: true
                }
            })
        }
        return this.recentSearch;
    }

    onGlobalSearchInputFocus(){
        if(!this.isOpen){
            this.isOpen = true;
            this.toggleGlobalSearch();
            this.requestUpdate();
        }
        this.notifyWapperElementFocused(true);
    }

    onGlobalSearchInputBlur(){
        this.notifyWapperElementFocused(false);
    }

    onGlobalSearchInputChanged(){
        this.isOpen = true;
        
        this.value = this.getSearchInputValue();

        if(this.value){
            this.toggleSearchClearButton(true);
        }else{
            this.toggleSearchClearButton(false);
        }

        const inputEvent = new CustomEvent(FDS_GLOBAL_SEARCH_INPUT_CHANGED, {
            bubbles: true,
            composed: true,
            detail: this.value
        })
        this.dispatchEvent(inputEvent)
        this.requestUpdate();
    }

    clearInput(e){
        e.preventDefault();
        this.value = '';
        const inputElement = this.getSearchInputElement();
        if(inputElement){
            inputElement.value = '';
        }
    }

    notifyWapperElementFocused(focused: boolean){
        if(!this.wrapperElement){
            this.wrapperElement = this.shadowRoot?.querySelector('.fds-global-search-wrapper');
        }

        if(focused){
            this.wrapperElement.classList.add('fds-global-search-input-focus')
        }else{
            this.wrapperElement.classList.remove('fds-global-search-input-focus')
        }
    }
    
    triggerSearchWithText(e){
        e.preventDefault();
        this.addNewRecentSearch();

        this.value = this.getSearchInputValue();
        const inputEvent = new CustomEvent(FDS_GLOBAL_SEARCH_ITEM_SELECTED, {
            bubbles: true,
            composed: true,
            detail: this.value
        })
        this.dispatchEvent(inputEvent)
    }

    addNewRecentSearch(searchText?: string){
        const text = searchText? searchText : this.getSearchInputValue();
        if(!text) return ;
        
        const recentSearchIdx = this.recentSearch.findIndex(item => item.text === text);
        if(recentSearchIdx < 0){
            this.recentSearch.unshift({
                text: text
            })

            this.recentSearch = this.recentSearch.slice(0, MAX_RECENT_SEARCH);
        }
        this.updateRecentSearch();
        this.requestUpdate();
    }
    
    updateRecentSearch(){
        localStorage.setItem(FDS_GLOBAL_RECENT_SEARCH_KEY, JSON.stringify(this.recentSearch.map(item => item.text)));
    }

    closeGlobalSearch(){
        this.isOpen = false;
        this.toggleGlobalSearch();
    }
    
    getSearchInputValue(){
        const value = this.getSearchInputElement() ? this.getSearchInputElement().value : '';
        return value;
    }

    getSearchInputElement(){
        if(!this.textFieldElement){
            this.textFieldElement = this.shadowRoot?.querySelector('#fds-global-search-textfield');
        }
        return this.textFieldElement;
    }

    toggleGlobalSearch(){
        if(!this.wrapperElement){
            this.wrapperElement = this.shadowRoot?.querySelector('.fds-global-search-wrapper');
        }
        if(!this.wrapperContainerElement){
            this.wrapperContainerElement = this.shadowRoot?.querySelector('.fds-global-search-container');
        }
        
        if(!this.overlay) {
            this.overlay = this.getOverlayElement();
        }
 
        if(this.isOpen){
            this.overlay.style['display'] = 'flex';
        }else{
            this.overlay.style['display'] = 'none';
        }

        if(this.isOpen){
            this.wrapperElement?.classList.add('open');
            this.wrapperContainerElement?.classList.add('fds-global-search-container-open');
        }else{
            this.wrapperElement?.classList.remove('open');
            this.wrapperContainerElement.classList.remove('open');
            this.wrapperContainerElement?.classList.remove('fds-global-search-container-open');
        }
    }

    toggleSearchClearButton(display: boolean){
        if(!this.clearButtonElement){
            this.clearButtonElement = this.shadowRoot?.querySelector('#fds-global-search-clear-btn')
        }
        if(display){
            this.clearButtonElement.classList.remove('fds-global-search-action-hide');
        }else{
            this.clearButtonElement.classList.add('fds-global-search-action-hide');
        }
    }

    private getOverlayElement(){
        const overlay = window.document.createElement('div');
        overlay.id = 'fds-global-search-overlay'
        overlay.classList.add('fds-global-search-backdrop');
        overlay.style.cssText = `
            background-color: var(--fds-dialog-scrim-color, var(--fds-surface-disabled));
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            display: flex;
            height: 300vh;
            z-index: 999;
            pointer-events: auto;
            -webkit-tap-highlight-color: transparent;
            transition: opacity .4s cubic-bezier(.25,.8,.25,1);
            opacity: 1;`
        overlay.onclick = () => {
            this.isOpen = false;
            this.toggleGlobalSearch()
        }
        window.document.body.appendChild(overlay);
        return overlay;
    }
}