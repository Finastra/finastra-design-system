import '@finastra/divider';
import '@finastra/icon-button';
import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import {
  FdsSearchItem,
  FdsSearchSelectedItem,
  FDS_GLOBAL_RECENT_SEARCH_KEY,
  FDS_GLOBAL_SEARCH_INPUT_CHANGED,
  FDS_GLOBAL_SEARCH_ITEM_REMOVED,
  FDS_GLOBAL_SEARCH_ITEM_SELECTED,
  FDS_GLOBAL_SEARCH_PAGE_SELECTED,
  MAX_RECENT_SEARCH
} from './global-search.model';

export class GlobalSearchBase extends LitElement {
  @property({ type: String }) value = '';
  @property({ type: String }) placeholder = '';

  private _enableRecentSearch = true;
  @property({ type: Boolean })
  set enableRecentSearch(status) {
    this._enableRecentSearch = status;
    this.requestUpdate();
  }
  get enableRecentSearch() {
    return this._enableRecentSearch;
  }

  private isOpen = false;
  private overlay: HTMLElement | null = null;
  private recentSearch: FdsSearchItem[] = [];
  private wrapperElement: HTMLElement | null | undefined = null;
  private wrapperContainerElement: HTMLElement | null | undefined = null;
  private textFieldElement: HTMLInputElement | null | undefined = null;
  private clearButtonElement: HTMLElement | null | undefined = null;

  constructor() {
    super();
    this.addEventListener(FDS_GLOBAL_SEARCH_ITEM_REMOVED, (event) => {
      if (this.enableRecentSearch) {
        const itemToRemove = (event as CustomEvent).detail;
        this.recentSearch = this.recentSearch.filter((item) => item.text !== itemToRemove.text);
        this.updateRecentSearch();
        this.requestUpdate();
      }
    });
    this.addEventListener(FDS_GLOBAL_SEARCH_ITEM_SELECTED, (e) => {
      const selectedText = (e as CustomEvent).detail.text;
      if (this.enableRecentSearch) {
        this.addNewRecentSearch(selectedText);
      }
      this.setInput(selectedText);
      this.closeGlobalSearch();
    });
    this.addEventListener(FDS_GLOBAL_SEARCH_PAGE_SELECTED, () => {
      this.closeGlobalSearch();
    });
    this.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && this.isOpen) {
        if (this.enableRecentSearch) {
          this.addNewRecentSearch();
        }
        this.dispatchEvent(
          new CustomEvent(FDS_GLOBAL_SEARCH_ITEM_SELECTED, {
            bubbles: true,
            composed: true,
            detail: {
              id: '',
              text: this.getSearchInputValue(),
              title: 'Enter from search bar'
            } as FdsSearchSelectedItem
          })
        );

        this.closeGlobalSearch();
      }
    });
  }

  render() {
    return html`
      <div class="fds-global-search">
        <div class="fds-global-search-wrapper">
          <div class="fds-global-search-text-container">
            <div class="fds-global-search-text-field">
              <div class="fds-global-search-text-action">
                <fds-icon-button primary="true" icon="search" @click=${(e) => this.triggerSearchWithText(e)}> </fds-icon-button>
              </div>
              <div class="fds-global-search-text-input">
                <input
                  id="fds-global-search-textfield"
                  placeholder="${this.placeholder}"
                  value="${this.value}"
                  tabindex="-1"
                  @focus=${() => this.onGlobalSearchInputFocus()}
                  @input=${() => this.onGlobalSearchInputChanged()}
                />
              </div>
              <div class="fds-global-search-text-action">
                <fds-icon-button
                  id="fds-global-search-clear-btn"
                  class="${this.value ? '' : 'fds-global-search-action-hide'}"
                  dense
                  icon="close"
                  @click=${(e) => this.clearInput(e)}
                >
                </fds-icon-button>
              </div>
            </div>
            <fds-divider></fds-divider>
          </div>

          <div class="fds-global-search-container ${this.isOpen ? 'fds-global-search-container-open' : ''}">
            <div class="fds-global-search-block">
              ${this.renderRecentSearch()}
              <slot name="searches"></slot>
              <slot name="pages"></slot>
              <slot name="“summary"></slot>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderRecentSearch() {
    if (!this.recentSearch || !this.enableRecentSearch) {
      return '';
    }

    const recentList = this.getRecentList();

    if (recentList.length === 0) {
      return '';
    }

    return html`
      <fds-global-search-group
        id="fds-global-search-recent"
        title="Recent searches"
        icon="history"
        displayCloseBtn="true"
        .items=${recentList}
      >
      </fds-global-search-group>
    `;
  }

  getRecentList(): FdsSearchItem[] {
    if (!this.enableRecentSearch) {
      return [];
    }
    if (this.recentSearch.length === 0) {
      let recentSearchText: [] = [];
      try {
        recentSearchText = JSON.parse(localStorage.getItem(FDS_GLOBAL_RECENT_SEARCH_KEY)!) || [];
      } catch {
        recentSearchText = [];
      }
      this.recentSearch = recentSearchText.map((text) => {
        return {
          text: text
        };
      });
    }
    return this.recentSearch;
  }

  onGlobalSearchInputFocus() {
    if (!this.isOpen) {
      this.isOpen = true;
      this.toggleGlobalSearch();
      this.requestUpdate();
    }
  }

  onGlobalSearchInputChanged() {
    this.isOpen = true;

    this.value = this.getSearchInputValue();

    if (this.value) {
      this.toggleSearchClearButton(true);
    } else {
      this.toggleSearchClearButton(false);
    }

    const inputEvent = new CustomEvent(FDS_GLOBAL_SEARCH_INPUT_CHANGED, {
      bubbles: true,
      composed: true,
      detail: this.value
    });
    this.dispatchEvent(inputEvent);
    this.requestUpdate();
  }

  setInput(text: string) {
    if (!text) {
      text = '';
    }

    this.value = text;
    const inputElement = this.getSearchInputElement();
    if (inputElement) {
      inputElement.value = text;
    }

    if (this.value) {
      this.toggleSearchClearButton(true);
    } else {
      this.toggleSearchClearButton(false);
    }
  }

  clearInput(e) {
    e.preventDefault();
    this.value = '';
    const inputElement = this.getSearchInputElement();
    if (inputElement) {
      inputElement.value = '';
    }
  }

  triggerSearchWithText(e) {
    e.preventDefault();
    if (this.enableRecentSearch) {
      this.addNewRecentSearch();
    }

    this.value = this.getSearchInputValue();
    const inputEvent = new CustomEvent(FDS_GLOBAL_SEARCH_ITEM_SELECTED, {
      bubbles: true,
      composed: true,
      detail: this.value
    });
    this.dispatchEvent(inputEvent);
  }

  addNewRecentSearch(searchText?: string) {
    if (!this.enableRecentSearch) {
      return;
    }

    const text = searchText ? searchText : this.getSearchInputValue();

    if (!text) return;

    const recentSearchIdx = this.recentSearch.findIndex((item) => item.text === text);
    if (recentSearchIdx < 0) {
      this.recentSearch.unshift({
        text: text
      });

      this.recentSearch = this.recentSearch.slice(0, MAX_RECENT_SEARCH);
    }
    this.updateRecentSearch();
    this.requestUpdate();
  }

  updateRecentSearch() {
    if (this.enableRecentSearch) {
      localStorage.setItem(FDS_GLOBAL_RECENT_SEARCH_KEY, JSON.stringify(this.recentSearch.map((item) => item.text)));
    }
  }

  closeGlobalSearch() {
    this.isOpen = false;
    this.toggleGlobalSearch();
  }

  getSearchInputValue() {
    const value = this.getSearchInputElement() ? this.getSearchInputElement()?.value : '';
    return value ? value : '';
  }

  getSearchInputElement() {
    if (!this.textFieldElement) {
      this.textFieldElement = this.shadowRoot?.querySelector('#fds-global-search-textfield');
    }
    return this.textFieldElement;
  }

  toggleGlobalSearch() {
    if (!this.wrapperElement) {
      this.wrapperElement = this.shadowRoot?.querySelector('.fds-global-search-wrapper');
    }
    if (!this.wrapperContainerElement) {
      this.wrapperContainerElement = this.shadowRoot?.querySelector('.fds-global-search-container');
    }

    if (!this.overlay) {
      this.overlay = this.getOverlayElement();
    }

    if (this.isOpen) {
      this.overlay?.classList.remove('close');
      this.overlay?.classList.add('open');
      this.wrapperElement?.classList.add('open');
      this.wrapperContainerElement?.classList.add('fds-global-search-container-open');
    } else {
      this.overlay?.classList.remove('open');
      this.overlay?.classList.add('close');
      this.wrapperElement?.classList.remove('open');
      this.wrapperContainerElement!.classList.remove('open');
      this.wrapperContainerElement?.classList.remove('fds-global-search-container-open');
    }
  }

  toggleSearchClearButton(display: boolean) {
    if (!this.clearButtonElement) {
      this.clearButtonElement = this.shadowRoot?.querySelector('#fds-global-search-clear-btn');
    }
    if (display) {
      this.clearButtonElement!.classList.remove('fds-global-search-action-hide');
    } else {
      this.clearButtonElement!.classList.add('fds-global-search-action-hide');
    }
  }

  private getOverlayElement() {
    const overlay = window.document.createElement('div');
    overlay.id = 'fds-global-search-overlay';
    overlay.classList.add('fds-global-search-backdrop');
    overlay.classList.add('close');
    overlay.onclick = () => {
      this.isOpen = false;
      this.toggleGlobalSearch();
    };

    const overlayStyleElement = window.document.createElement('style');
    overlayStyleElement.type = 'text/css';
    const overlayStyle = `
            .fds-global-search-backdrop{
                background-color: var(--fds-dialog-scrim-color, var(--fds-surface-disabled));
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                height: 0px;
                z-index: 999;
                display: flex;
                pointer-events: auto;
            }
            .fds-global-search-backdrop.open{
                height: 300vh;
                animation: fade-in 300ms ease-in;
            }
            .fds-global-search-backdrop.close{
                animation: fade-out 300ms ease-out;
            }

            @keyframes fade-in{
                0% {
                    opacity: 0;
                }
                100% {
                    opacity:1;
                }
            }
            @keyframes fade-out {
                0% {
                  opacity: 1;
                }
                100% {
                  opacity: 0;
                  height: 0px;
                }
            }
        `;
    overlayStyleElement.appendChild(window.document.createTextNode(overlayStyle));

    window.document.getElementsByTagName('head')[0].append(overlayStyleElement);
    window.document.body.appendChild(overlay);

    return overlay;
  }
}
