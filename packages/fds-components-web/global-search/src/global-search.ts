import { customElement } from 'lit/decorators.js';
import { GlobalSearchBase } from './global-search-base';
import { styles } from './global-search.css';

/**
 * @cssprop {text} [--fds-global-search-width=400px] - length of global search component.
 * @attr [value=""] -  Sets value displayed in input.
 * @attr [placeholder=""] - Sets placeholder value displayed when input is empty.
 * @attr [enableRecentSearch=true] - Whether display recent search section.
 * @slot searches - Slot to place a set of search items. We provide another web component:fds-global-search-group.
 * @slot pages - Slot to place a set of search pages with icon.We provide another web component: fds-global-search-page.
 * @slot summary - Slot to place a summary of search result.
 */
@customElement('fds-global-search')
export class GlobalSearch extends GlobalSearchBase {
  static styles = styles;
}
declare global {
  interface HTMLElementTagNameMap {
    'fds-global-search': GlobalSearch;
  }
}
