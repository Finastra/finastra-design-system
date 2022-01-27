import { LitElement, html, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@material/mwc-top-app-bar';
import { styles } from './styles.css';
import '@finastra/logo';

@customElement('fds-app-bar')
export class AppBar extends LitElement {
  static styles = styles;

  @property({ type: String }) appName = '';
  @property({ type: String }) logo = '';
  @property({ type: String }) logoRedirectUri = '';

  @property({ type: Boolean }) prominent = false;
  @property({ type: Boolean }) transparent = false;
  @property({ type: Boolean }) hideOnScroll = false;

  render(): TemplateResult {
    return html`<div class="bar">
      <div class="top-bar">
        <slot name="menu"></slot>
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

  navigateToLogoUri() {
    location.href = this.logoRedirectUri;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-app-bar': AppBar;
  }
}
