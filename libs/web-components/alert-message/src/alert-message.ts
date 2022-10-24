import '@finastra/icon';
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { choose } from 'lit/directives/choose.js';
import { styles } from './styles.css';

export const enum ALERT_TYPE {
  INFO = 'info',
  ERROR = 'error',
  SUCCESS = 'success',
  WARNING = 'warning'
}

/**
 * @attr {info|error|success|warning} [type=text] - Define the alert type
 */

@customElement('fds-alert-message')
export class AlertMessage extends LitElement {
  static styles = styles;

  @property({ type: String, reflect: true })
  type: 'info' | 'error' | 'success' | 'alert' = 'success';

  @property({ type: String })
  title = '';

  @property({ type: String })
  description = '';

  @property({ type: Boolean }) withoutIcon = false;

  @property({ type: String })
  icon = '';

  render() {
    return html`
      <div class="container">
        <div class="message">
          ${!this.withoutIcon ? html` ${this.renderIcon()} ` : ''}
          <div class="description">
            <div class="title">${this.title}</div>
            <div class="message">${this.description}</div>
          </div>
        </div>
        <div class="actions">
          <slot name="primaryAction"></slot>
          <slot name="secondaryAction"></slot>
        </div>
      </div>
    `;
  }

  renderIcon() {
    return html`
      ${choose(
        this.type,
        [
          ['success', () => html`<fds-icon class="message-icon" success> ${this.icon ? this.icon : 'done'}</fds-icon>`],
          ['error', () => html`<fds-icon class="message-icon" error>${this.icon ? this.icon : 'error_outline'}</fds-icon>`],
          ['info', () => html`<fds-icon class="message-icon" primary> ${this.icon ? this.icon : 'info_outline'} </fds-icon>`],
          ['warning', () => html`<fds-icon class="message-icon" warning>${this.icon ? this.icon : 'warning'} </fds-icon>`]
        ],
        () => html`<fds-icon class="message-icon" primary>${this.icon ? this.icon : 'info_outline'}</fds-icon>`
      )}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-alert-message': AlertMessage;
  }
}
