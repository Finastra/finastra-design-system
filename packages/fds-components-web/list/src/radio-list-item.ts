import { RadioListItemBase } from '@material/mwc-list/mwc-radio-list-item-base';
import { customElement } from 'lit/decorators.js';
import { styles as controlStyle } from './control-list-item-styles.css';
import { styles } from './list-item-styles.css';

@customElement('fds-radio-list-item')
export class RadioListItem extends RadioListItemBase {
  static override styles = [styles, controlStyle];
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-radio-list-item': RadioListItem;
  }
}
