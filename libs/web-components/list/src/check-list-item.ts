import { CheckListItemBase } from '@material/mwc-list/mwc-check-list-item-base';
import { customElement } from 'lit/decorators.js';
import { styles as controlStyle } from './control-list-item-styles.css';
import { styles } from './list-item-styles.css';

@customElement('fds-check-list-item')
export class CheckListItem extends CheckListItemBase {
  static override styles = [styles, controlStyle];
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-check-list-item': CheckListItem;
  }
}
