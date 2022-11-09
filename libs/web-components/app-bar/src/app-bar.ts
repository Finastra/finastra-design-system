import '@finastra/logo';
import '@material/mwc-top-app-bar';
import { html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { EVENTS } from './constants';
import { styles } from './styles.css';

/**
 * @slot navigationIcon - Slot to add a navigation icon (e.g. hamburger menu)
 * @slot navigation - Slot to add content in the left of the app bar, just after the app name or in the second line in prominent app bar
 * @slot content - Slot to add content in the center of the app bar
 * @slot actions - Slot to add content in the right side of the app bar
 * 
 * @fires MDCTopAppBar:nav - Fired when clicking on burger button
 *
 * @cssprop --fds-logo - String representing an image encoded in base64
 */
@customElement('fds-app-bar')
export class AppBar extends LitElement {
  static styles = styles;

  /**
   * Application's name
   */
  @property({ type: String }) appName = '';

  /**
   * Set the logo redirect Uri
   */
  @property({ type: String }) logoRedirectUri = '';

  /**
   * Extend the app bar
   */
  @property({ type: Boolean }) prominent = false;

  /**
   * Give a transparent background to the app bar
   */
  @property({ type: Boolean }) transparent = false;

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
    return html`<slot name="navigation" class="bar-block"></slot>`;
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
