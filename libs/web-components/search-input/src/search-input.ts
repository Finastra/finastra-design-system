import '@finastra/circular-progress';
import '@finastra/icon-button';
import { BaseTextField } from '@finastra/textfield';
import { html, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styles } from './styles.css';

/**
 * @cssprop {color} [--fds-primary=#694ED6] - TextField color
 * @cssprop {color} [--fds-icon-color=#694ED6] - Icon color.
 * @cssprop {color} [--fds-icon-trailing-color=#694ED6] - Icon trailing color.
 * @cssprop {text} [--fds-text-field-radius=4px] - Border radius of the outline.
 * @attr [loading=false] - Display searchInput loader.
 * @attr [showClearButton=true] - Show clear button.
 * @attr [label=''] - Sets floating label value.
 * @attr [placeholder='Search ...'] - Sets placeholder value displayed when input is empty.
 * @attr [required=false] - Displays error state if value is empty and input is blurred.
 * @attr [icon='search'] - Leading icon to display in input. See `fds-icon`.
 * @attr [type=''] - A string specifying the type of control to render.
 * @attr [validationMessage=''] - Message to show in the error color when the textfield is invalid. (Helper text will not be visible)
 * @attr [disabled=false] - Whether or not the input should be disabled.
 * @attr [dense=false] - Smaller text field size.
 * @attr [helper=''] - Helper text to display below the input.
 * @attr [labelInside=false] - Is the label included in the text field.
 */

@customElement('fds-search-input')
export class SearchInput extends BaseTextField {
  static styles = styles;

  @property({ type: Boolean }) loading = false;
  @property({ type: Boolean }) showClearButton = false;

  constructor() {
    super();
    this.showActionButton = false;
    this.icon = 'search';
  }

  protected override renderTrailingIcon(): TemplateResult | string {
    return this.loading ? this.renderLoadingButton() : this.renderClearButton();
  }

  protected renderLoadingButton(): TemplateResult {
    return html`<fds-circular-progress class="circular-loader" indeterminate density="-6"></fds-circular-progress>`;
  }

  protected renderClearButton(): TemplateResult | string {
    const showClearButton = this.value.length && this.showClearButton;
    const clearButtonclasses = {
      'fds-search-input-clear-button--show': !!showClearButton,
      'fds-search-input-clear-button--hide': !showClearButton
    };
    return this.disabled
      ? html`<fds-icon-button
          class="clear-icon ${classMap(clearButtonclasses)}"
          icon="close"
          @click="${this.clear}"
          disabled
        ></fds-icon-button>`
      : html`<fds-icon-button class="clear-icon ${classMap(clearButtonclasses)}" icon="close" @click="${this.clear}"></fds-icon-button>`;
  }

  private clear() {
    this.value = '';
    const inputEvent = new CustomEvent('input');
    this.dispatchEvent(inputEvent);
    this.focus();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-search-input': SearchInput;
  }
}
