import { LitElement, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

import '@material/mwc-menu';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-select';
import '@finastra/avatar';
import '@finastra/button';

import { styles } from './styles.css';

@customElement('fds-user-profile')
export class UserProfile extends LitElement {
  static styles = styles;

  @query('#button')
  button;

  @query('#menu')
  menu;

  @query('[name="actions"]') protected _actionsSlot!: HTMLSlotElement;

  @property()
  name = '';

  @property({ type: Boolean })
  dense = false;

  protected actionsCount = 0;
  public divider = true;

  render() {
    return html` <fds-avatar dense id="button" @click="${this._showMenu}"></fds-avatar>
      <mwc-menu id="menu" fullwidth>
        ${this.dense
          ? html`
              <div class="header-dense">
                <fds-avatar name=${this.name}></fds-avatar>
                <div class="title">${this.name}</div>
                <slot name="userInfo"></slot>
              </div>
              ${this.divider ? html` <fds-divider></fds-divider>` : ''}
              <slot name="actions" id="actions"> </slot>
            `
          : html`
              <div class="header">
                <fds-avatar name=${this.name} large></fds-avatar>
                <div class="title">${this.name}</div>
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
