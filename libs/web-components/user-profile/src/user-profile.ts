import { LitElement, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { renderAvatarSVG } from './user-profile-decorations';

import '@material/mwc-menu';
import '@material/mwc-icon-button';
import '@finastra/avatar';
import '@finastra/divider';

import { styles } from './styles.css';

/**
 * @slot actions -Actions that a user can perform
 * @slot userInfo -The user info
 * @cssprop [--fds-avatar-size=48px] -Size of the avatar that triggers the menu
 * @cssprop [--fds-avatar-font-size=16px] -Font size of the avatar that triggers the menu
 */
@customElement('fds-user-profile')
export class UserProfile extends LitElement {
  static styles = styles;

  @query('#menu')
  menu;

  @query('[name="actions"]') protected _actionsSlot!: HTMLSlotElement;

  /**
   * Name of the avatar, used to generate the initials (Displayed on hover)
   */
  @property({ type: String })
  userName = '';

  /**
   * Use this property to override the initials
   */
  @property({ type: String })
  shortName = '';

  /**
   * Align the default avatar with user info
   */
  @property({ type: Boolean })
  dense = false;

  protected actionsCount = 0;
  public divider = true;

  render() {
    return html` <mwc-icon-button @click="${this._showMenu}"> ${renderAvatarSVG()} </mwc-icon-button>
      <mwc-menu id="menu" fullwidth corner="BOTTOM_START">
        ${this.dense
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
    this.menu!.show();
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
