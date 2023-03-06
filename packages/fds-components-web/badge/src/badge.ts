import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { COLOR, POSITION, TYPE } from './badge.interface';
import { styles } from './styles.css';

/**
 * @attr [value=''] - Badge value
 * @attr {"primary"|"secondary"|"success"|"error"|"white"|"outlined"} color - Badge color
 * @attr {"topLeft"|"topRight"|"center"} position - Badge position
 * @attr {""|"indicator"} type - Badge type
 * @slot default - Content of the badge
 */

@customElement('fds-badge')
export class Badge extends LitElement {
  static styles = styles;

  @property({ type: String })
  value = '';

  @property({ reflect: true }) color: COLOR = COLOR.outlined;

  @property({ reflect: true }) type: TYPE = TYPE.none;

  @property({ reflect: true }) position: POSITION = POSITION.center;

  render() {
    return html`
      <div class="container">
        <slot></slot>
        <div class="badge" position=${this.position}>
          <span class="badge-value ${this.color?.toLowerCase()}"> ${!this.type ? this.value : ''} </span>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-badge': Badge;
  }
}
