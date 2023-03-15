import '@finastra/avatar';
import '@finastra/divider';
import '@finastra/icon-button';
import '@finastra/menu';
import { Menu } from '@finastra/menu';
import { html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { styles } from './styles.css';
import { renderAvatarSVG } from './user-profile-decorations';

/**
 * @slot actions -Actions that a user can perform
 * @slot userInfo -The user info
 */
@customElement('fds-user-profile')
export class UserProfile extends LitElement {
  static styles = styles;

  @query('#menu') protected menu!: Menu;

  @query('#anchor') protected anchor;

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
    return html` <fds-icon-button @click="${this._showMenu}" id="anchor" aria-label="avatar button"> ${renderAvatarSVG()} </fds-icon-button>
      <fds-menu id="menu" fullwidth>
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
      </fds-menu>`;
  }

  connectedCallback() {
    super.connectedCallback();
    setTimeout(() => {
      this.menu.anchor = this.anchor;
      this.menu.corner = 'BOTTOM_START';
      this.menu.menuCorner = 'END';
      this.menu.x = 40;
      this.menu.y = -50;
    }, 0);
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
