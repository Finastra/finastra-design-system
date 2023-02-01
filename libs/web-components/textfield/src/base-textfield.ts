import { TextFieldBase } from '@material/mwc-textfield/mwc-textfield-base';
import { html, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

export class BaseTextField extends TextFieldBase {
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
    const shouldRenderHelperText = !!this.helper || !!this.validationMessage || shouldRenderCharCounter;

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
        ${this.renderRipple()} ${this.renderOutline()} ${this.renderLeadingIcon()} ${this.renderPrefix()}
        ${this.renderInput(shouldRenderHelperText)} ${this.renderSuffix()} ${this.renderTrailingIcon()} ${this.renderLineRipple()}
      </label>
      ${this.renderHelperText(shouldRenderHelperText, shouldRenderCharCounter)}
    `;
  }

  protected _handleClick() {
    if (
      !this.disabled &&
      (this.type === 'date' || this.type === 'datetime-local' || this.type === 'month' || this.type === 'week' || this.type === 'time')
    ) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const input = this.formElement as any;
      input.showPicker();
    }
  }

  protected renderTrailingIcon(): TemplateResult | string {
    return this.showActionButton
      ? html` <slot name="actionButton"></slot>`
      : html`<i class="material-icons mdc-text-field__icon  mdc-text-field__icon--trailing">${this.iconTrailing}</i> `;
  }

  protected renderLabelOutside(): TemplateResult | string {
    return this.label ? html` <span id="label" class="fds-text-field__label"> ${this.label} ${this.renderRequired()} </span> ` : ``;
  }

  protected override renderOutline(): TemplateResult | string {
    return !this.outlined ? '' : html` <div class="fds-text-field__outline">${this.labelInside ? this.renderLabel() : ''}</div>`;
  }

  protected renderRequired(): TemplateResult | string {
    return !this.required ? '' : '*';
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    for (const child of Array.from(this.children)) {
      if (child.slot === 'actionButton' && this.disabled) {
        child.setAttribute('disabled', 'true');
      } else if (child.slot === 'actionButton') {
        child.removeAttribute('disabled');
      }
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-base-textfield': BaseTextField;
  }
}
