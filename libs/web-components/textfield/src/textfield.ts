import { TextFieldBase } from '@material/mwc-textfield/mwc-textfield-base';
import { customElement, property } from 'lit/decorators.js';

import { html, TemplateResult } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { styles } from './styles.css';

/**
 * @cssprop {color} [--fds-primary=#694ED6] - Textfield color
 * @cssprop {color} [--fds-icon-color=#694ED6] - Icon color.
 * @cssprop {color} [--fds-icon-trailing-color=#694ED6] - Icon trailing color.
 * @attr [label='textfield'] - Sets floating label value.
 * @attr [placeholder='textfield'] - Sets placeholder value displayed when input is empty.
 * @attr [required=false] - Displays error state if value is empty and input is blurred.
 * @attr [icon=''] - Leading icon to display in input. See `mwc-icon`.
 * @attr [iconTrailing=''] - Leading icon to display in input. See `mwc-icon`.
 * @attr [type=''] - A string specifying the type of control to render.
 * @attr [validationMessage=''] - Message to show in the error color when the textfield is invalid. (Helper text will not be visible)
 * @attr [disabled=false] - Whether or not the input should be disabled.
 * @attr [helper=''] - Helper text to display below the input.
 * @attr [pattern=''] - A JavaScript regular expression. The textfield value must match this pattern.
 * @attr [showActionButton=false] - Enable the use of a the actionButton slot.
 * @slot actionButton - Slot to replace iconTrailing with an action button.
 */

@customElement('fds-textfield')
export class Textfield extends TextFieldBase {
  static styles = [styles];
  @property({ type: Boolean }) showActionButton = false;
  @property({ type: Boolean }) dense = false;
  @property({ type: Boolean }) labelInside = false;
  constructor() {
    super();
    this.outlined = true;
    this.helperPersistent = true;
  }

  override render(): TemplateResult {
    const shouldRenderCharCounter = this.charCounter && this.maxLength !== -1;
    const shouldRenderHelperText =
        !!this.helper || !!this.validationMessage || shouldRenderCharCounter;

    /** @classMap */
    const classes = {
      'mdc-text-field--disabled': this.disabled,
      'mdc-text-field--no-label': !this.label,
      'mdc-text-field--filled': !this.outlined,
      'mdc-text-field--outlined': this.outlined,
      'mdc-text-field--with-leading-icon': this.icon,
      'mdc-text-field--with-trailing-icon': this.iconTrailing,
      'mdc-text-field--end-aligned': this.endAligned,
      'fds-text-field--label-inside': this.labelInside
    };

    return html`
      ${!this.labelInside ? this.renderLabelOutside() : ''}
      <label class="mdc-text-field ${classMap(classes)}">
        ${this.renderRipple()}
        ${this.renderOutline()}
        ${this.renderLeadingIcon()}
        ${this.renderPrefix()}
        ${this.renderInput(shouldRenderHelperText)}
        ${this.renderSuffix()}
        ${this.renderTrailingIcon()}
        ${this.renderLineRipple()}
      </label>
      ${this.renderHelperText(shouldRenderHelperText, shouldRenderCharCounter)}
    `;
  }

  protected renderTrailingIcon(): TemplateResult | string {
    return this.showActionButton
      ? html`
      <slot name="actionButton"></slot>`
      : html`<i class="material-icons mdc-text-field__icon  mdc-text-field__icon--trailing">${this.iconTrailing}</i> `;
  }

  protected renderLabelOutside(): TemplateResult | string {
    return html`
      <span class="fds-text-field__label">
        ${this.label}
        ${this.renderRequired()}
      </span>
    `;
  }

  protected override renderOutline(): TemplateResult|string {
    return !this.outlined ? '' : html`
      <mwc-notched-outline
          .width=${this.outlineWidth}
          .open=${this.outlineOpen}
          class="mdc-notched-outline">
        ${this.labelInside ? this.renderLabel() : ''}
      </mwc-notched-outline>`;
  }

  protected renderRequired(): TemplateResult | string {
    return !this.required ?
    '' :
    '*';
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-textfield': Textfield;
  }
}
