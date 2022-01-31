import { LitElement, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

import '@material/mwc-menu';
import '@finastra/avatar';
import '@finastra/divider';

import { styles } from './styles.css';

/**
 * @cssprop [--fds-avatar-size=48px]
 * @cssprop [--fds-avatar-font-size=16px]
 */
@customElement('fds-user-profile')
export class UserProfile extends LitElement {
  static styles = styles;

  @query('#menu')
  menu;

  @query('[name="actions"]') protected _actionsSlot!: HTMLSlotElement;

  @property()
  userName = '';

  @property()
  shortName = '';

  @property({ type: Boolean })
  denseMenu = false;

  @property({ type: Boolean })
  open = false;

  protected actionsCount = 0;
  public divider = true;

  render() {
    return html` <fds-avatar  denseMenu=${this.denseMenu} name="${this.userName}" shortName="${this.shortName}" @click="${this._showMenu}" open="${this.open}"></fds-avatar>
      <mwc-menu id="menu" fullwidth ?open=${this.open}>
        ${this.denseMenu
          ? html`
              <div class="header-dense">
                <fds-avatar name=${this.userName} shortName=${this.shortName}></fds-avatar>
                <div class="title">${this.userName}</div>
                <slot name="userInfo"></slot>
              </div>
              ${this.divider ? html` <fds-divider></fds-divider>` : ''}
              <slot name="actions" id="actions"> </slot>
            `
          : html`
              <div class="header">
                <fds-avatar name=${this.userName} shortName=${this.shortName} large></fds-avatar>
                <div class="title">${this.userName}</div>
                <slot name="userInfo"></slot>
              </div>
              ${this.divider ? html` <fds-divider></fds-divider>` : ''}
              <slot name="actions" id="actions"> </slot>
            `}
      </mwc-menu>`;
  }

  private _showMenu() {
    this.menu.show();
    this.actionsCount = this._actionsSlot.assignedNodes().length;
    this.requestUpdate();
    if (this.actionsCount > 0) {
      this.divider = true;
    } else {
      this.divider = false;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-user-profile': UserProfile;
  }
}
