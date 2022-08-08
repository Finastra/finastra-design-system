import { TextFieldBase } from '@material/mwc-textfield/mwc-textfield-base';
import { customElement, property } from 'lit/decorators.js';

import { html, TemplateResult } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { styles } from './styles.css';

/**
 * @cssprop {color} [--fds-primary=#694ED6] - Textfield color
 * @cssprop {color} [--fds-icon-color=#694ED6] - Icon color.
 * @cssprop {color} [--fds-icon-trailing-color=#694ED6] - Icon trailing color.
 * @cssprop {text} [--fds-text-field-radius=4px] - Border radius of the outline.
 * @attr [label='textfield'] - Sets floating label value.
 * @attr [placeholder='textfield'] - Sets placeholder value displayed when input is empty.
 * @attr [required=false] - Displays error state if value is empty and input is blurred.
 * @attr [icon=''] - Leading icon to display in input. See `mwc-icon`.
 * @attr [iconTrailing=''] - Leading icon to display in input. See `mwc-icon`.
 * @attr [type=''] - A string specifying the type of control to render.
 * @attr [validationMessage=''] - Message to show in the error color when the textfield is invalid. (Helper text will not be visible)
 * @attr [disabled=false] - Whether or not the input should be disabled.
 * @attr [dense=false] - Smaller text field size.
 * @attr [helper=''] - Helper text to display below the input.
 * @attr [labelInside=false] - Is the label included in the text field.
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
      <label class="mdc-text-field ${classMap(classes)}" @click="${this._handleClick}">
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

  protected _handleClick(e) {
    if (!this.disabled && (this.type === "date" || "datetime-local" || "month" || "week" || "time")) {
      e.path.forEach(p => {
        if (p.nodeName === "INPUT") {
          p.showPicker();
        }
      });
    }
  }

  protected renderTrailingIcon(): TemplateResult | string {
    return this.showActionButton
      ? html`
      <slot name="actionButton"></slot>`
      : html`<i class="material-icons mdc-text-field__icon  mdc-text-field__icon--trailing">${this.iconTrailing}</i> `;
  }

  protected renderLabelOutside(): TemplateResult | string {
    return html`
      <span id="label" class="fds-text-field__label">
        ${this.label}
        ${this.renderRequired()}
      </span>
    `;
  }

  protected override renderOutline(): TemplateResult|string {
    return !this.outlined ? '' : html`
      <div class="fds-text-field__outline">
        ${this.labelInside ? this.renderLabel() : ''}
      </div>`;
  }

  protected renderRequired(): TemplateResult | string {
    return !this.required ?
    '' :
    '*';
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    for(const child of Array.from(this.children)) {
      if(child.slot === "actionButton" && this.disabled) {
        child.setAttribute("disabled", "true");
      }
      else if(child.slot === "actionButton") {
        child.removeAttribute("disabled");
      }
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-textfield': Textfield;
  }
}
