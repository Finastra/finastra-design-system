import { SelectBase } from '@material/mwc-select/mwc-select-base';
import { html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styles } from './styles.css';

/**
 * @cssprop {color} [--fds-primary=#694ED6] - Primary color.
 * @cssprop {color} [--fds-error=#E40046] - Error color.
 * @attr [value=''] - The select control's value determined by the value property of the currently selected list item.
 * @attr [label=''] - Sets label value.
 * @attr [icon=''] - Leading icon to display in input. See `mwc-icon`.
 * @attr [disabled=false] - Whether or not the input should be disabled.
 * @attr [outlined=false] - Whether or not to show the material outlined variant.
 * @attr [helper=''] - Helper text to display below the input. Display default only when focused.
 * @attr [required=false] - Displays error state if value is empty and input is blurred.
 * @attr [validationMessage=''] - Message to show in the error color when the textfield is invalid. (Helper text will not be visible).
 * @attr [selected=null] - Selected list item element type ListItemBase.
 * @attr [items=[]] - List of selectable items.
 * @attr [index=-1] - Index of selected list item.
 * @attr [dense=false] - Smaller select field size.
 * @attr [labelInside=false] - Keep the label in the input.
 * @attr [fixedMenuPosition=false] - Sets the dropdown menu's position to fixed. This is useful when the select is inside of a stacking context e.g. inside of an fds-dialog.
 * @slot default - Content to display in the selects internal <mwc-menu> element.
 */

@customElement('fds-select')
export class Select extends SelectBase {
  static override styles = [styles];
  @property({ type: Boolean }) dense = false;
  @property({ type: Boolean }) labelInside = false;
  @property({ type: Boolean }) fixedMenuPosition = false;
  constructor() {
    super();
    this.outlined = true;
  }

  override render() {
    const classes = {
      'mdc-select--disabled': this.disabled,
      'mdc-select--no-label': !this.label,
      'mdc-select--filled': !this.outlined,
      'mdc-select--outlined': this.outlined,
      'mdc-select--with-leading-icon': !!this.icon,
      'mdc-select--required': this.required,
      'mdc-select--invalid': !this.isUiValid,
      'fds-select--label-inside': this.labelInside
    };

    const labelledby = this.label ? 'label' : undefined;
    const describedby = this.shouldRenderHelperText ? 'helper-text' : undefined;

    return html` ${!this.labelInside ? this.renderLabelOutside() : ''}
      <div class="mdc-select ${classMap(classes)}">
        <input
          class="formElement"
          name="${this.name}"
          .value="${this.value}"
          hidden
          ?disabled="${this.disabled}"
          ?required=${this.required}
        />
        <!-- @ts-ignore -->
        <div
          class="mdc-select__anchor"
          aria-autocomplete="none"
          role="combobox"
          aria-expanded=${this.menuOpen}
          aria-invalid=${!this.isUiValid}
          aria-haspopup="listbox"
          aria-labelledby=${ifDefined(labelledby)}
          aria-required=${this.required}
          aria-describedby=${ifDefined(describedby)}
          @click=${this.onClick}
          @focus=${this.onFocus}
          @blur=${this.onBlur}
          @keydown=${this.onKeydown}
        >
          ${this.renderRipple()} ${this.outlined ? this.renderOutline() : this.renderLabel()} ${this.renderLeadingIcon()}
          <span class="mdc-select__selected-text-container">
            <span class="mdc-select__selected-text">${this.selectedText}</span>
          </span>
          <span class="mdc-select__dropdown-icon">
            <svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5" focusable="false">
              <polygon class="mdc-select__dropdown-icon-inactive" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon>
              <polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon>
            </svg>
          </span>
          ${this.renderLineRipple()}
        </div>
        ${this.renderMenu()}
      </div>
      ${this.renderHelperText()}`;
  }

  protected override renderOutline() {
    if (!this.outlined) {
      return nothing;
    }

    return html` <mwc-notched-outline .width=${this.outlineWidth} .open=${false} class="mdc-notched-outline">
      ${this.labelInside ? this.renderLabel() : ''}
    </mwc-notched-outline>`;
  }

  protected renderLabelOutside() {
    if (!this.label) {
      return nothing;
    }

    return html` <span class="fds-select__label" id="label"> ${this.label} ${this.renderRequired()} </span> `;
  }

  protected renderRequired() {
    if (!this.required) {
      return nothing;
    }
    return '*';
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-select': Select;
  }
}
