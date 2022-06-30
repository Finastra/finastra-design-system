import { MenuBase } from '@material/mwc-menu/mwc-menu-base';
import { styles as baseStyle } from '@material/mwc-menu/mwc-menu.css.js';
import { customElement } from 'lit/decorators.js';
import { styles } from './styles.css';

@customElement('fds-menu')
export class Menu extends MenuBase {
  static override styles = [baseStyle, styles];
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-menu': Menu;
  }
}
