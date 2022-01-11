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

  @property()
  name = '';

  @property()
  buttonLabel = 'Menu';

  @property({ type: Boolean })
  dense = false;

  @property({ type: Number }) count = 0;

  render() {
    return html` <div>
      <fds-button text id="button" label="${this.buttonLabel}" raised label="Open Menu" @click="${this._showMenu}"></fds-button>
      <mwc-menu id="menu" fullwidth>
          ${
            this.dense
              ? html` <div class="header-dense">
                  <fds-avatar name=${this.name}></fds-avatar>
                  <div class="title">${this.name}</div>
                  <slot name="subtitle"></slot>
                </div>
                <div class="content">
                <slot name="divider"></slot>
                <slot name="actions">
                <slot name="divider"></slot>
              </div> 
                `
              : html`
            <div class="header">
              <fds-avatar name=${this.name} large></fds-avatar>
              <div class="title">${this.name}</div>
              <slot name="subtitle"></slot>
            </div>
            <div class="content">
              <slot name="divider"></slot>
              <slot name="actions">
              <slot name="divider"></slot>
            </div> 
      `
          } 
      </mwc-menu>
      </div>
    </div>`;
  }

  private _showMenu() {
    this.menu.show();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-user-profile': UserProfile;
  }
}
