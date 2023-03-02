import { TextAreaBase } from '@material/mwc-textarea/mwc-textarea-base';
import { html, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

export class BaseTextarea extends TextAreaBase {
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
      'fds-textarea--label-inside': this.labelInside
    };

    return html`
      ${!this.labelInside ? this.renderLabelOutside() : ''}
      <label class="mdc-text-field mdc-text-field--textarea ${classMap(classes)}">
        ${this.renderRipple()} ${this.renderOutline()} ${this.renderInput()}
      </label>
      ${this.renderHelperText(shouldRenderHelperText, shouldRenderCharCounter)}
    `;
  }

  protected renderLabelOutside(): TemplateResult | string {
    return this.label ? html` <span id="label" class="fds-textarea__label"> ${this.label} ${this.renderRequired()} </span> ` : ``;
  }

  protected override renderOutline(): TemplateResult | string {
    return !this.outlined ? '' : html` <div class="fds-textarea__outline">${this.labelInside ? this.renderLabel() : ''}</div>`;
  }

  protected renderRequired(): TemplateResult | string {
    return !this.required ? '' : '*';
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-base-textarea': BaseTextarea;
  }
}
