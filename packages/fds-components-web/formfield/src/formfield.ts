import { FormfieldBase } from '@material/mwc-formfield/mwc-formfield-base';
import { customElement } from 'lit/decorators.js';
import { styles } from './styles.css';

/**
 * @cssprop [--fds-label-font=#694ED6] - Switch color
 * @attr [label=''] - The text to display for the label and sets a11y label on input. (visually overriden by slotted label).
 * @attr [alignEnd=false] - Align the component at the end of the label..
 * @attr [spaceBetween=false] - Add space between the component and the label as the formfield grows.
 * @attr [nowrap=false] - Prevents the label from wrapping and overflow text is ellipsed.
 */

@customElement('fds-formfield')
export class Formfield extends FormfieldBase {
  static styles = styles;
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-formfield': Formfield;
  }
}
