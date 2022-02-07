import '@finastra/logo';
import '@material/mwc-top-app-bar';
import { html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { EVENTS } from './constants';
import { styles } from './styles.css';

/**
 * @slot navigationIcon - Slot to add a navigation icon (e.g. hamburger menu)
 * @slot navigation - Slot to add content next to app bar title (hidden in tablet and mobile)
 * @slot content - Slot to add content in the center of the app bar
 * @slot actions - Slot to add content in the right side of the app bar
 *
 * @cssprop --fds-logo - String representing an image encoded in base64
 */
@customElement('fds-app-bar')
export class AppBar extends LitElement {
  static styles = styles;

  @property({ type: String }) appName = '';
  @property({ type: String }) logoRedirectUri = '';

  @property({ type: Boolean }) prominent = false;
  @property({ type: Boolean }) transparent = false;
  //@property({ type: Boolean }) hideOnScroll = false;

  render(): TemplateResult {
    return html`<div class="bar">
      <div class="top-bar">
        <slot name="navigationIcon" @click=${this.handleNavigationClick}></slot>
        <fds-logo dense @click=${this.navigateToLogoUri}></fds-logo>
        <span class="app-name">${this.appName}</span>
        <div class="app-bar-content">
          ${!this.prominent ? this.renderNavigationSlot() : html`<div></div>`}
          <slot name="content" class="bar-block"></slot>
          <slot name="actions" class="bar-block"></slot>
        </div>
      </div>
      ${this.prominent ? this.renderNavigationSlot() : ''}
    </div>`;
  }

  renderNavigationSlot(): TemplateResult {
    return html`<div class="slot__navigation">
      <slot name="navigation" class="bar-block"></slot>
    </div>`;
  }

  handleNavigationClick() {
    this.dispatchEvent(new Event(EVENTS.NAVIGATION, { bubbles: true, cancelable: true }));
  }

  navigateToLogoUri() {
    location.href = this.logoRedirectUri;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-app-bar': AppBar;
  }
}
