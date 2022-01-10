import { LitElement, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

import '@material/mwc-menu';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-select';
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

  @property({type: Number}) count = 0;

  render() {
    return html` 
    <div style="position: absolute;">
    <fds-button id="button" raised label="Open Menu"  @click="${this._showMenu}"></fds-button></p>

    <mwc-menu id="menu" fullwidth>
    <mwc-list-item>Item 0</mwc-list-item>
    <mwc-list-item>Item 1</mwc-list-item>
    <mwc-list-item>Item 2</mwc-list-item>
    <mwc-list-item>Item 3</mwc-list-item>
  </mwc-menu>
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


// <div style="position: relative;">
//     <mwc-button id="button" raised label="Open Menu" @click="${this.handleClick()}></mwc-button>
//     <mwc-menu id="menu">
//       <mwc-list-item>Item 0</mwc-list-item>
//       <mwc-list-item>Item 1</mwc-list-item>
//       <mwc-list-item>Item 2</mwc-list-item>
//       <mwc-list-item>Item 3</mwc-list-item>
//     </mwc-menu>
//   </div>