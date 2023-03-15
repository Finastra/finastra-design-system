import { customElement } from 'lit/decorators.js';
import { GlobalSearchGroupBase } from './global-search-group-base';
import { styles } from './global-search-group.css';

/**
 * @attr [title=""] - Global Search group section titile.
 * @attr [items=[FdsSearchItem]] - Array of Global Search group items.
 */

@customElement('fds-global-search-group')
export class GlobalSearchGroup extends GlobalSearchGroupBase {
  static styles = styles;
}
declare global {
  interface HTMLElementTagNameMap {
    'fds-global-search-item': GlobalSearchGroup;
  }
}
