import { FabBase } from '@material/mwc-fab/mwc-fab-base';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './styles.css';

/**
 * @attr [icon='add'] - Fab icon.
 * @attr [extended=false] - Make the fab extended.
 * @attr [label='Action'] - Label in the extended fab.
 * @attr [dense=false] - Make the fab smaller.
 * @attr [gradient=false] - Apply gradient color.
 * @cssprop {color} [--fds-primary=#694ED6] - Primary color.
 * @cssprop {color} [--fds-secondary=#C137A2] - Secondary color.
 */

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
