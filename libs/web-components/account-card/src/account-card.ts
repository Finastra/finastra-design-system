import { BaseCard } from '@finastra/card';
import '@finastra/divider';
import '@finastra/icon';
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './styles.css';

/**
 * @attr {string} [name='Account'] - Account Name.
 * @attr {number} [balance=0] - Account balance.
 * @attr {string} [currency='USD'] - Account currency ISO format.
 * @attr {string} [number='XXXX XXXX XXXX XXXX XXXX XX'] - Account number.
 * @attr {string} [icon=credit_card] - Change card icon.
 * @attr {boolean} [iconAriaLabel='Credit Card'] - Change the card icon aria label.
 * @attr {boolean} [selectable=false] - Change the card style to an action card.
 * @attr {boolean} [disabled=false] - Disabled style of the card.
 */

@customElement('fds-account-card')
export class AccountCard extends BaseCard {
  static styles = styles;

  @property({ type: String }) name = 'Account';
  @property({ type: Number }) balance = 0;
  @property({ type: String }) currency = 'USD';
  @property({ type: String }) number = 'XXXX XXXX XXXX XXXX XXXX XX';
  @property({ type: String }) icon = 'credit_card';
  @property({ type: String }) iconAriaLabel = 'Credit Card';

  renderCardContent() {
    return html`
      <fds-card-content class="account-content">
        <div class="account-icon">
          ${this.disabled
            ? html`<fds-icon aria-label="${this.iconAriaLabel}" disabled>${this.icon}</fds-icon>`
            : html`<fds-icon aria-label="${this.iconAriaLabel}" primary>${this.icon}</fds-icon>`}
        </div>
        <div>
          <div class="account-name">${this.name}</div>
          <div class="account-balance">${this.renderBalance()}</div>
        </div>
      </fds-card-content>
      <fds-card-footer>
        <fds-divider></fds-divider>
        <div class="account-number">${this.number}</div>
      </fds-card-footer>
    `;
  }

  renderBalance() {
    const dollarUSLocale = Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: this.currency
    });
    return dollarUSLocale.format(this.balance);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-account-card': AccountCard;
  }
}
