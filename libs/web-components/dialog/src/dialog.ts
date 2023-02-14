import { DialogBase } from '@material/mwc-dialog/mwc-dialog-base';
import { customElement } from 'lit/decorators.js';
import { styles } from './styles.css';
/**
 * @cssprop [--fds-dialog-max-height=calc(100% - 32px)] - Sets dialog max height
 * @cssprop [--fds-dialog-max-width=560px]- Sets dialog max width
 * @cssprop [--fds-dialog-min-width=280px]- Sets dialog min width
 * @cssprop [--fds-dialog-z-index=7] - Sets the z-index of the dialog and scrim
 * @cssprop [--fds-dialog-content-padding=0px 32px 16px 32px]- Sets the content padding
 * @cssprop {color} [--fds-dialog-scrim-color=rgba(0, 0, 0, 0.12)] - Color of the scrim
 * @slot primaryAction - Footer area containing the dialog's primary action button.
 * @slot secondaryAction - Footer area containing the dialog's secondary action button.
 * @attr [stacked=false] - Whether to stack the action buttons
 * @attr [scrimClickAction=""] - Setting this attribute to an empty string "" will prevent clicks outside the dialog from closing the dialog
 * @attr [escapeKeyAction=""] - Setting this attribute to an empty string "" will prevent the escape key from closing the dialog
 * @attr [heading=''] - Heading text of the dialog.
 * @attr [open=false] - Whether the dialog should open
 * @attr [hideActions=false] - Hides the actions footer of the dialog
 */
@customElement('fds-dialog')
export class Dialog extends DialogBase {
  static styles = styles;

  constructor() {
    super();
    this.open = false;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-dialog': Dialog;
  }
}
