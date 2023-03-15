import { html, LitElement, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { FdsSearchSelectedItem, FDS_GLOBAL_SEARCH_ITEM_SELECTED } from '../global-search.model';

export class GlobalSearchSummaryBase extends LitElement {
  @property({ type: String }) searchText = '';
  @property({ type: Number }) resultCount = 0;

  protected render(): TemplateResult {
    return this.resultCount > 0
      ? html`
          <a class="fds-global-search-summary-result" @click=${() => this.onClick()}>
            <span
              >Show ${this.resultCount} results for
              <span class="fds-global-search-summary-search-text">${this.searchText}</span>
            </span>
            <fds-icon-button dense icon="chevron_right"></fds-icon-button>
          </a>
        `
      : html`
          <span class="fds-global-search-summray-no-result"
            >No results for
            <span class="fds-global-search-summary-search-text"> ${this.searchText}</span>
          </span>
        `;
  }

  private onClick() {
    this.dispatchEvent(
      new CustomEvent(FDS_GLOBAL_SEARCH_ITEM_SELECTED, {
        bubbles: true,
        composed: true,
        detail: {
          text: this.searchText,
          title: 'summary'
        } as FdsSearchSelectedItem
      })
    );
  }
}
