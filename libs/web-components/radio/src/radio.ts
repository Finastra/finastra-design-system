import { RadioBase } from '@material/mwc-radio/mwc-radio-base';
import { customElement } from 'lit/decorators.js';
import { styles } from './styles.css';

/**
 * @cssprop {color} [--fds-primary=#694ED6] - FDS Primary color.
 * @attr [checked=false] - Whether this radio button is the currently-selected one in its group.
 * @attr [disabled=false] - If true, this radio button cannot be selected or de-selected.
 * @attr [name=''] - Name of the input for form submission, and identifier for the selection group. Only one radio button can be checked for a given selection group.
 * @attr [value=''] - Value of the input for form submission.
 * @attr [global=false] - If true, this radio button will use a global, document-level scope for its selection group rather than its local shadow root.
 * @attr [reducedTouchTarget=false] - When true, the radio removes touch target that extends beyond visual boundary of the component.
 */

@customElement('fds-radio')
export class Radio extends RadioBase {
  static override styles = [styles];
  constructor() {
    super();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-radio': Radio;
  }
}
