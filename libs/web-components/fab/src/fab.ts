import { FabBase } from '@material/mwc-fab/mwc-fab-base';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './styles.css';

@customElement('fds-fab')
export class Fab extends FabBase {
  static override styles = [styles];

  @property({ type: Boolean })
  dense = false;

  @property({ type: Boolean })
  gradient = false;

}

declare global {
  interface HTMLElementTagNameMap {
    'fds-fab': Fab;
  }
}