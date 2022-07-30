import '@finastra/linear-progress';
import '@finastra/textfield';
import '@material/mwc-icon-button';
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
    private textFieldElement: any = null;
    
    constructor(){
        super();
        this.addEventListener(FDS_GLOBAL_SEARCH_ITEM_REMOVED, (event)=>{
            const itemToRemove = (event as any).detail;
            this.recentSearch = this.recentSearch.filter(item => item.text !== itemToRemove);
            this.updateRecentSearch();
            this.requestUpdate();
        })
        this.addEventListener(FDS_GLOBAL_SEARCH_ITEM_SELECTED, (e) =>{
            this.addNewRecentSearch((e as any).detail);
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
                <div class="fds-global-search-wrapper ${this.isOpen? 'open': ''}">
                    <fds-textfield showActionButton 
                        id="fds-global-seatch-textfield"
                        class="fds-global-search-textfield"
                        outlined 
                        tabindex="-1"
                        value=${this.value}
                        placeholder=${this.placeholder}
                        @focus=${() => this.onGlobalSearchInputFocus()}
                        @input=${() => this.onSearchInputChanged()}
                        >
                        <mwc-icon-button slot="actionButton" class="${this.value ? '': 'fds-global-search-clear'}" icon="close" @click=${(e) => this.clearInput(e)} ></mwc-icon-button>
                        <mwc-icon-button slot="actionButton" icon="search" @click=${(e) => this.triggerSearchWithText(e)}></mwc-icon-button>
                    </fds-textfield>
                    ${this.loading ? html`<fds-linear-progress indeterminate></fds-linear-progress>`: ''}
                    <div class="fds-global-search-container ${this.isOpen? 'fds-global-search-container-open': ''}">
                        ${ this.renderRecentSearch()}
                        <slot name="searches"></slot>
                        <slot name="pages"></slot>
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
                .items=${recentList}
            >
            </fds-global-search-group>
        `
    }

    onSearchInputChanged(){
        this.isOpen = true;
        
        this.value = this.getSearchInputValue();
        const inputEvent = new CustomEvent(FDS_GLOBAL_SEARCH_INPUT_CHANGED, {
            bubbles: true,
            composed: true,
            detail: this.value
        })
        this.dispatchEvent(inputEvent)
        this.requestUpdate();
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
                    icon: 'history',
                    text: text,
                    displayCloseBtn: true
                }
            })
        }
        return this.recentSearch;
    }
    
    clearInput(e){
        e.preventDefault();
        this.value = '';
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

    onGlobalSearchInputFocus(){
        if(!this.isOpen){
            this.isOpen = true;
            this.toggleGlobalSearch();
            this.requestUpdate();
        }
    }
    
    addNewRecentSearch(searchText?: string){
        const text = searchText? searchText : this.getSearchInputValue();
        if(!text) return ;
        
        const recentSearchIdx = this.recentSearch.findIndex(item => item.text === text);
        if(recentSearchIdx < 0){
            this.recentSearch.unshift({
                icon: 'history',
                text: text,
                displayCloseBtn: true,
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
        if(!this.textFieldElement){
            this.textFieldElement = this.shadowRoot?.querySelector('.fds-global-search-textfield');
        }

        return this.textFieldElement.value;
    }

    toggleGlobalSearch(){
        if(!this.wrapperElement){
            this.wrapperElement = this.shadowRoot?.querySelector('.fds-global-search-container');
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
            this.wrapperElement?.classList.add('fds-global-search-container-open')
        }else{
            this.wrapperElement?.classList.remove('fds-global-search-container-open')
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