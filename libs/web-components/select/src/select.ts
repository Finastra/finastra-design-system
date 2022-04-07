import { SelectBase } from '@material/mwc-select/mwc-select-base';
import { customElement } from 'lit/decorators.js';
import { styles } from './styles.css';

/**
 * @cssprop {color} [--fds-primary=#694ED6] - Primary color.
 * @cssprop {color} [--fds-error=#E40046] - Error color.
 * @attr [value=''] - The select control's value determined by the value property of the currently selected list item.
 * @attr [label=''] - Sets floating label value.
 * @attr [icon=''] - Leading icon to display in input. See `mwc-icon`.
 * @attr [disabled=false] - Whether or not the input should be disabled.
 * @attr [outlined=false] - Whether or not to show the material outlined variant.
 * @attr [helper=''] - Helper text to display below the input. Display default only when focused.
 * @attr [required=false] - Displays error state if value is empty and input is blurred.
 * @attr [validationMessage=''] - Message to show in the error color when the textfield is invalid. (Helper text will not be visible).
 * @attr [selected=null] - Selected list item element type ListItemBase.
 * @attr [items=[]] - List of selectable items.
 * @attr [index=-1] - Index of selected list item.
 * @slot default - Content to display in the selects internal <mwc-menu> element.
 */

@customElement('fds-select')
export class Select extends SelectBase {
  static override styles = [styles];
  constructor() {
    super();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-select': Select;
  }
}
