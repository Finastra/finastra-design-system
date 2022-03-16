import { customElement } from 'lit/decorators.js';
import { SwitchBase } from '@material/mwc-switch/mwc-switch-base';

import { styles } from './styles.css';
import { html, TemplateResult } from 'lit-html';

/**
 * @cssprop {color} [--fds-primary=#694ED6] - Switch color
 * @cssprop {color} [--fds-track-opacity=0.54] - track color opacity
 * @attr [selected=false] - Whether the checkbox is checked.
 * @attr [disabled=false] - When true, the checkbox cannot be interacted with.
 */

@customElement('fds-switch')
export class Switch extends SwitchBase {
  static override styles = [styles];
  constructor() {
    super();
  }

  renderHandle(): TemplateResult {
    return html`
      <div class="mdc-switch__handle">
        <div class="mdc-switch__icons"></div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-switch': Switch;
  }
}
