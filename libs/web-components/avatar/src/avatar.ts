import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { styles } from './styles.css';

@customElement('fds-avatar')
export class Avatar extends LitElement {
  static styles = styles;

  @property({ type: String })
  name = '';

  @property({ type: String })
  shortName = '';

  @property({ type: Boolean })
  dense = false;

  render() {
    if (!this.shortName) {
      return html`<div class="fds-avatar">${this.transform(this.name,this.dense)}</div>`;
    } else {
      return html`<div class="fds-avatar">${this.shortName}</div>`;
    }
  }

  transform(fullName: string, dense?: any): string {
    const [name, surname] = fullName.split(' ');
    let initials = name.charAt(0).toUpperCase();
    if (!dense) {
      console.log("not dense")
      if (surname) {
        initials += surname.charAt(0).toUpperCase();
      } else if (name.length >= 2) {
        initials += name.charAt(1).toUpperCase();
      }
    }
    return initials;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-avatar': Avatar;
  }
}
