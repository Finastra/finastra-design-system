import { ListBase } from "@material/mwc-list/mwc-list-base";
import { customElement } from 'lit/decorators.js';
import { styles } from './list-styles.css';

@customElement('fds-list')
export class List extends ListBase {
  static override styles = [styles];
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-list': List;
  }
}
