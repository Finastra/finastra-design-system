import { LitElement, html, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@material/mwc-top-app-bar';
import { styles } from './styles.css';

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
      <slot name="menu"></slot>
      ${this.renderLogo()}
      <span class="app-name">${this.appName}</span>
      <div class="app-bar-content">
        <slot name="navigation" class="bar-block"></slot>
        <slot name="content" class="bar-block"></slot>
        <slot name="actions" class="bar-block"></slot>
      </div>
    </div>`;
  }

  renderLogo(): TemplateResult {
    return this.logo ? html`<img src="${this.logo}" class="logo" @click="${this.navigateToLogoUri}" />` : html``;
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
