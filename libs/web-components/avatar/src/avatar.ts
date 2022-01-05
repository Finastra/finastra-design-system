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

  @property({ type: Boolean })
  large = false;

  @property({ type: Boolean })
  primary = false;

  @property({ type: Boolean })
  secondary = false;

  render() {
    if (this.primary && this.secondary) {
      return new Error('cannot use both primary and secondary attribute! ');
    }
    if (this.dense && this.large) {
      return new Error('cannot use both dense and large attribute!');
    }
    if (!this.shortName) {
      return html`<div title="${this.name}" class="fds-avatar">${this.transformName(this.name, this.dense)}</div>`;
    } else {
      if (!this.name) {
        return new Error('Please specify a name to your avatar');
      } else return html`<div title="${this.name}" class="fds-avatar">${this.transformShortName(this.shortName, this.dense)}</div>`;
    }
  }

  transformName(fullName: string, dense?: any): string {
    const [name, surname] = fullName.split(' ');
    let initials = name.charAt(0).toUpperCase();
    if (!dense) {
      if (surname) {
        initials += surname.charAt(0).toUpperCase();
      } else if (name.length >= 2) {
        initials += name.charAt(1).toUpperCase();
      }
    }
    return initials;
  }

  transformShortName(shortName: string, dense?: any): string {
    if (!dense) {
      if (shortName.length > 2) {
        return shortName.substring(0, 2);
      }
    } else {
      return shortName.substring(0, 1);
    }
    return shortName;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-avatar': Avatar;
  }
}
