import { CircularProgressBase } from '@material/mwc-circular-progress/mwc-circular-progress-base';
import { customElement } from 'lit/decorators.js';
import { styles } from './styles.css';

/**
 * @cssprop {color} [--fds-primary=#694ED6] - Sets the color of primary progress bar.
 * @cssprop {color} [--primary-lighter=rgba(105, 78, 214, 0.08)] - Sets the color of the buffer progress bar.
 * @attr [progress=0] - Sets the primary progress bar's value. Value should be between [0, 1].
 * @attr [indeterminate=false] - Sets the linear-progress into its indeterminate state.
 */

@customElement('fds-circular-progress')
export class CircularProgress extends CircularProgressBase {
  static override styles = [styles];

  constructor() {
    super();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-circular-progress': CircularProgress;
  }
}
