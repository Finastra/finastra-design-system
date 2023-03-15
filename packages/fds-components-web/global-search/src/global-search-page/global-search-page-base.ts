import { html, LitElement, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { FdsSearchPageItem, FdsSearchPageSelectedItem, FDS_GLOBAL_SEARCH_PAGE_SELECTED } from '../global-search.model';

export class GlobalSearchPageBase extends LitElement {
  @property({ type: String }) title = '';
  @property({ type: Array }) items: FdsSearchPageItem[] = [];
  protected render(): TemplateResult {
    return html`
      <div class="fds-global-search-page">
        <h4 class="fds-global-search-page-title">${this.title}</h4>
        ${this.getSearchPageItemList()}
      </div>
    `;
  }

  private getSearchPageItemList() {
    return html`
      <div class="fds-global-search-page-list">
        ${this.items.map((item) => {
          return html`
            <a @click=${() => this.onPageItemClick(item)} class="fds-global-search-page-item">
              <div class="fds-global-search-page-logo-container">
                <img src="${item.logo}" alt="logo" class="fds-global-search-page-logo" />
              </div>
              <span class="fds-global-search-page-name">${item.text}</span>
            </a>
          `;
        })}
      </div>
    `;
  }

  onPageItemClick(item: FdsSearchPageItem) {
    this.dispatchEvent(
      new CustomEvent(FDS_GLOBAL_SEARCH_PAGE_SELECTED, {
        bubbles: true,
        composed: true,
        detail: {
          id: item.id,
          text: item.text,
          logo: item.logo
        } as FdsSearchPageSelectedItem
      })
    );
  }
}
