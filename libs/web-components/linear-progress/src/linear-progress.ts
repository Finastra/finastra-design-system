import { LinearProgressBase } from '@material/mwc-linear-progress/mwc-linear-progress-base';
import { customElement } from 'lit/decorators.js';
import { styles } from './styles.css';

/**
 * @cssprop {color} [--fds-primary=#694ED6] - Sets the color of primary progress bar.
 * @cssprop {color} [--primary-lighter=rgba(105, 78, 214, 0.08)] - Sets the color of the buffer progress bar.
 * @attr [progress=0] - Sets the primary progress bar's value. Value should be between [0, 1].
 * @attr [indeterminate=false] - Sets the linear-progress into its indeterminate state.
 */

@customElement('fds-linear-progress')
export class LinearProgress extends LinearProgressBase {
  static override styles = [styles];

  constructor() {
    super();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-linear-progress': LinearProgress;
  }
}
