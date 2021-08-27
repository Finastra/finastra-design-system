import { customElement, LitElement } from 'lit-element';

import { styles } from './styles.css';

@customElement('fds-logo')
export class Logo extends LitElement {
  static styles = styles;
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-logo': Logo;
  }
}
