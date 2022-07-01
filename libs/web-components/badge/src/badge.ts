import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './styles.css';

export enum POSITION {
  topLeft = 'topLeft',
  topRight = 'topRight',
  center = 'center'
}

export enum TYPE {
  none = '',
  indicator = 'indicator',
}

export enum COLOR {
  primary = 'primary',
  secondary = 'secondary',
  success = 'success',
  error = 'error',
  white = 'white',
  outlined = 'outlined',
}

@customElement('fds-badge')
export class Badge extends LitElement {
  static styles = styles;

  @property({ type: String })
  value = '';

  /**
   * @type {"primary"|"secondary"|"success"|"error"|"white"|"outlined"} color - Badge color
   */
  @property({ reflect: true }) color: COLOR = COLOR.outlined;

    /**
   * @type {""|"indicator"} type - Badge type
   */
  @property({ reflect: true }) type: TYPE = TYPE.none;

  /**
   * @type {"topLeft"|"topRight"|"center"} positon - Badge postion
   */
  @property({ reflect: true }) position: POSITION = POSITION.center;


  render() {
    return html`<span class="badgeValue ${this.color?.toLowerCase()}  ${this.position?.toLowerCase()}" position=${this.position}>
        ${!this.type ? this.value : ''}
  </span>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-badge': Badge;
  }
}
