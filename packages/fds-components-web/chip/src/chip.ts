import { Ripple } from '@material/mwc-ripple/mwc-ripple';
import { RippleHandlers } from '@material/mwc-ripple/ripple-handlers';
import { html, LitElement } from 'lit';
import { customElement, eventOptions, property, queryAsync, state } from 'lit/decorators.js';
import { ClassInfo, classMap } from 'lit/directives/class-map.js';
import { styles } from './styles.css';

@customElement('fds-chip')
export class Chip extends LitElement {
  static styles = styles;

  /**
   * Chip label
   */
  @property({ type: String }) label = '';
  /**
   * Material design icon name to display in the left side of the label
   */
  @property({ type: String }) icon = '';
  /**
   * Material design trailing icon name to display in the right side of the label
   */
  @property({ type: String }) trailingIcon = '';
  /**
   * Disable a chip.
   */
  @property({ type: Boolean }) disabled = false;
  /**
   * Select a chip
   */
  @property({ type: Boolean }) selected = false;
  /**
   * Use Secondary color.
   */
  @property({ type: Boolean }) secondary = false;
  /**
   * Make the chip smaller.
   */
  @property({ type: Boolean }) dense = false;
  /**
   * Make the chip bigger.
   */
  @property({ type: Boolean }) large = false;

  @queryAsync('mwc-ripple') ripple!: Promise<Ripple | null>;

  @state() protected shouldRenderRipple = false;

  /**
   * Override this callback with what you want to happen whenever there's a click on the trailing icon
   */
  trailingIconAction?: () => void;

  protected getRenderClasses(): ClassInfo {
    return {
      'mdc-button--outlined': true,
      'mdc-button--dense': this.dense
    };
  }

  protected rippleHandlers = new RippleHandlers(() => {
    this.shouldRenderRipple = true;
    return this.ripple;
  });

  render() {
    return html` <button
      id="button"
      class="mdc-button ${classMap(this.getRenderClasses())}"
      ?disabled="${this.disabled}"
      ?selected="${this.selected}"
      @focus="${this.handleRippleFocus}"
      @blur="${this.handleRippleBlur}"
      @mousedown="${this.handleRippleActivate}"
      @mouseenter="${this.handleRippleMouseEnter}"
      @mouseleave="${this.handleRippleMouseLeave}"
      @touchstart="${this.handleRippleActivate}"
      @touchend="${this.handleRippleDeactivate}"
      @touchcancel="${this.handleRippleDeactivate}"
    >
      ${this.renderRipple()}
      <span class="leading-icon">
        <slot name="icon"> ${this.icon ? this.renderIcon(this.icon) : ''} </slot>
      </span>
      <span class="mdc-button__label">${this.label}</span>
      <span class="trailing-icon">
        <slot name="trailingIcon" @click="${this._handleClick}"> ${this.trailingIcon ? this.renderIcon(this.trailingIcon) : ''} </slot>
      </span>
    </button>`;
  }

  _handleClick() {
    try {
      if (this.trailingIconAction) {
        this.trailingIconAction();
      }
    } catch (error) {
      console.debug(error);
    }
  }

  private renderIcon(icon: string) {
    return html` <fds-icon class="mdc-button__icon"> ${icon} </fds-icon>`;
  }

  private renderRipple() {
    return html`<mwc-ripple class="ripple" .disabled="${this.disabled}"></mwc-ripple>`;
  }

  @eventOptions({ passive: true })
  protected handleRippleActivate(evt?: Event) {
    const onUp = () => {
      window.removeEventListener('mouseup', onUp);

      this.handleRippleDeactivate();
    };

    window.addEventListener('mouseup', onUp);
    this.rippleHandlers.startPress(evt);
  }

  protected handleRippleDeactivate() {
    this.rippleHandlers.endPress();
  }

  protected handleRippleMouseEnter() {
    this.rippleHandlers.startHover();
  }

  protected handleRippleMouseLeave() {
    this.rippleHandlers.endHover();
  }

  protected handleRippleFocus() {
    this.rippleHandlers.startFocus();
  }

  protected handleRippleBlur() {
    this.rippleHandlers.endFocus();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-chip': Chip;
  }
}
