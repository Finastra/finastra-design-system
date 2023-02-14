import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './styles.css';

/**
 * @cssprop {color} [--fds-primary=#694ED6] - Color of the start of the gradient
 * @cssprop {color} [--fds-secondary=#C137A2] - Color of the end of the gradient
 * @cssprop [--fds-avatar-size=48px] - Size of the avatar
 * @cssprop [--fds-avatar-font-size=16px] - Font size of the avatar
 */
@customElement('fds-avatar')
export class Avatar extends LitElement {
  static styles = styles;

  /**
   * Name of the avatar, used to generate the initials (Displayed on hover)
   */
  @property({ type: String })
  name = '';

  /**
   * Use this property to override the initials
   */
  @property({ type: String })
  shortName = '';

  /**
   * Make the avatar smaller
   */
  @property({ type: Boolean })
  dense = false;

  /**
   * Make the avatar bigger
   */
  @property({ type: Boolean })
  large = false;

  /**
   * Use theme's primary color as background
   */
  @property({ type: Boolean })
  primary = false;

  /**
   * Use theme's secondary color as background
   */
  @property({ type: Boolean })
  secondary = false;

  render() {
    if (this.primary && this.secondary) {
      console.warn('Cannot use both primary and secondary attribute');
    }
    if (this.large && this.dense) {
      console.warn('Cannot use both large and dense attribute');
    }
    if (!this.name) {
      if (this.shortName) {
        console.warn('Please specify a name to your avatar');
      }
      return html`<div class="fds-avatar"></div>`;
    }

    return html`<div title="${this.name}" class="fds-avatar">
      ${!this.shortName ? this.transformName(this.name, this.dense) : this.transformShortName(this.shortName, this.dense)}
    </div>`;
  }

  transformName(fullName: string, dense?: boolean): string {
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

  transformShortName(shortName: string, dense?: boolean): string {
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
