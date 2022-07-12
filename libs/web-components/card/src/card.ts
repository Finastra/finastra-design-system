import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BaseCard } from './base-card';
import { styles } from './styles.css';


/**
  * @attr {boolean} [outlined=false] - Change the card style to outlined, default style is elevated.
  * @attr {boolean} [selectable=false] - Change the card style to an action card.
  * @attr {boolean} [disabled=false] - Disabled style of the card.
  * @slot default - Slot to add content to the card, see the documentation for more details.
*/

@customElement('fds-card')
export class Card extends BaseCard {
  static styles = styles;

  renderCardContent() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-card': Card;
  }
}
