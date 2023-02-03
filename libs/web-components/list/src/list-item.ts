import { ListItemBase } from '@material/mwc-list/mwc-list-item-base';
import { customElement } from 'lit/decorators.js';
import { styles } from './list-item-styles.css';

@customElement('fds-list-item')
export class ListItem extends ListItemBase {
  static override styles = [styles];
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-list-item': ListItem;
  }
}
