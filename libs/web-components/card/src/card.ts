import { customElement } from 'lit-element';
import { CardBase } from './card-base';

import { styles } from './styles.css';

@customElement('fds-card')
export class Card extends CardBase {
  static styles = styles;
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-card': Card;
  }
}
