import { customElement } from 'lit/decorators.js';

import { styles } from './styles.css';

import { CheckboxBase } from '@material/mwc-checkbox/mwc-checkbox-base';

/**
 * @cssprop {color} [--fds-primary=#694ED6] - Checkbox color
 * @attr [checked=true] - Whether the checkbox is checked.
 * @attr [indeterminate=false] - It is used on the parent to indicate that some but not all of its children are checked.
 * @attr [disabled=false] - When true, the checkbox cannot be interacted with.
 */

@customElement('fds-checkbox')
export class Checkbox extends CheckboxBase {
  static override styles = [styles];

  constructor() {
    super();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-checkbox': Checkbox;
  }
}
