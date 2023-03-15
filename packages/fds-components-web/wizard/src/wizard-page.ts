import '@finastra/chip';
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wizard-page.css';

@customElement('fds-wizard-page')
export class WizardPage extends LitElement {
  static styles = styles;

  @property({ type: String, attribute: 'page-title' })
  pageTitle = '';

  @property({ type: String })
  icon = '';

  @property({ type: String })
  description = '';

  @property({ type: String })
  stepsCounter = '';

  @property({ type: Boolean })
  disabled = false;

  @property({ type: Boolean })
  header = false;

  @property({ type: Boolean })
  current = false;

  @property({ type: Boolean })
  completed = false;

  @property({ type: String, attribute: 'next-label' })
  nextBtnLabel = '';

  render() {
    return html` ${this.header
        ? html` <div class="header">
            ${this.renderIcon()}
            <div class="title ${this.icon ? 'title-with-icon' : ''}">${this.pageTitle}</div>
            ${this.renderStepsCounter()}
          </div>`
        : ''}
      <div class="page-container">
        <slot></slot>
      </div>`;
  }

  renderIcon() {
    return html`${this.icon
      ? html` <div class="icon">
          <img loading="lazy" src="${this.icon}" />
        </div>`
      : ''}`;
  }

  renderStepsCounter() {
    return html`${this.stepsCounter ? html` <fds-chip label=${this.stepsCounter}></fds-chip>` : ''}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-wizard-page': WizardPage;
  }
}
