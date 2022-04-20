import { LitElement, html } from 'lit';
import { customElement, eventOptions, property, queryAsync, state } from 'lit/decorators.js';
import {ClassInfo, classMap} from 'lit/directives/class-map.js';
import {RippleHandlers} from '@material/mwc-ripple/ripple-handlers';
import {Ripple} from '@material/mwc-ripple/mwc-ripple';
import { styles } from './styles.css';

@customElement('fds-chip')
export class Chip extends LitElement {
  static styles = styles;
  @property({type: String}) icon = '';
  @property({type: String}) trailingIcon = '';
  @property({type: String}) label = '';
  @property({type: Boolean}) outlined = true;
  @property({type: Boolean}) disabled = false;
  @property({type: Boolean}) selected = false;
  @property({type: Boolean}) secondary = false;
  @property({type: Boolean}) dense = false;
  @property({type: Boolean}) large = false;

  @queryAsync('mwc-ripple') ripple!: Promise<Ripple|null>;

  @state() protected shouldRenderRipple = false;

  protected getRenderClasses(): ClassInfo {
    return {
      'mdc-button--outlined': this.outlined,
      'mdc-button--dense': this.dense,
    };
  }

  protected rippleHandlers = new RippleHandlers(() => {
    this.shouldRenderRipple = true;
    return this.ripple;
  });

  render() {
    return html`
      <button
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
          @touchcancel="${this.handleRippleDeactivate}">
        ${this.renderRipple()}
        <span class="leading-icon">
          <slot name="icon">
            ${this.icon ? this.renderIcon(this.icon) : ''}
          </slot>
        </span>
        <span class="mdc-button__label">${this.label}</span>
        <span class="trailing-icon">
          <slot name="trailingIcon">
            ${this.trailingIcon ? this.renderIcon(this.trailingIcon) : ''}
          </slot>
        </span>
      </button>`;
  }

   renderIcon(icon:string) {
    return html`
    <mwc-icon class="mdc-button__icon">
      ${icon}
    </mwc-icon>`;
  }

   renderRipple() {
    return  html`<mwc-ripple class="ripple" .disabled="${
            this.disabled}"></mwc-ripple>`;
  }

  @eventOptions({passive: true})
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
