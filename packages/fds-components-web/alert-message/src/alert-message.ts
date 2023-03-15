import '@finastra/icon';
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { choose } from 'lit/directives/choose.js';
import { classMap } from 'lit/directives/class-map.js';
import { styles } from './styles.css';

export const enum ALERT_TYPE {
  INFO = 'info',
  ERROR = 'error',
  SUCCESS = 'success',
  WARNING = 'warning'
}

export enum ALERT_LAYOUT {
  multiLines = 'multiLines',
  singleLine = 'singleLine'
}

/**
 * @attr {string} [title=''] - Alert title.
 * @attr {string} [description=''] - Alert description.
 * @attr {string} [icon=''] - Alert Icon.
 * @attr {info|error|success|warning} [type=info] - Define the alert type
 * @attr {multiLines|singleLine} [layout=multiLines] - Define the layout type
 * @attr {boolean} [withoutIcon] - Remove the Icon from the alert message.
 * @attr {boolean} [dense] - dense .
 * @attr {boolean} [showCloseButton] - Display the close button to dismiss the alert message.
 */

@customElement('fds-alert-message')
export class AlertMessage extends LitElement {
  static styles = styles;

  @property({ reflect: true }) layout: ALERT_LAYOUT = ALERT_LAYOUT.multiLines;

  @property({ reflect: true }) type: ALERT_TYPE = ALERT_TYPE.SUCCESS;

  @property({ type: String })
  title = '';

  @property({ type: String })
  description = '';

  @property({ type: Boolean }) withoutIcon = false;

  @property({ type: Boolean }) showCloseButton = false;

  @property({ type: Boolean }) dense = false;

  @property({ type: String })
  icon = '';

  render() {
    const startLineClass = {
      multiLines: this.layout === ALERT_LAYOUT.multiLines,
      'single-line': this.layout === ALERT_LAYOUT.singleLine
    };

    return html`
      <div class="container ${classMap(startLineClass)}">
        ${this.showCloseButton ? html`<fds-icon class="close-btn" @click="${this._handleCloseClick}">close</fds-icon> ` : ''}
        <div class="alert">
          <div class="message">
            ${!this.withoutIcon ? html`<div class="icon-container">${this.renderIcon()}</div>` : ''}
            <div class="description">
              <div class="title">${this.title}</div>
              <div class="subtitle">${this.description}</div>
            </div>
          </div>
          <div class="actions">
            <slot name="primaryAction"></slot>
            <slot name="secondaryAction"></slot>
          </div>
        </div>
      </div>
    `;
  }

  renderIcon() {
    return html`
      ${choose(
        this.type,
        [
          ['success', () => html`<fds-icon class="icon" success> ${this.icon ? this.icon : 'done'}</fds-icon>`],
          ['error', () => html`<fds-icon class="icon" error>${this.icon ? this.icon : 'error_outline'}</fds-icon>`],
          ['info', () => html`<fds-icon class="icon" primary> ${this.icon ? this.icon : 'info_outline'} </fds-icon>`],
          ['warning', () => html`<fds-icon class="icon" warning>${this.icon ? this.icon : 'warning'} </fds-icon>`]
        ],
        () => html`<fds-icon class="icon" primary>${this.icon ? this.icon : 'info_outline'}</fds-icon>`
      )}
    `;
  }

  _handleCloseClick() {
    this.remove();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-alert-message': AlertMessage;
  }
}
