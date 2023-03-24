/* eslint-disable @typescript-eslint/no-explicit-any */
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import { html } from 'lit';
import { FORM_EVENTS } from './constants';

import { styles } from './styles.css';

/**
 * @fires formSubmit - Emitted when the form is submitted.
 * @fires formReset - Emitted when the form is reset.
 */

@customElement('fds-form')
export class Form extends LitElement {
  static styles = styles;

  private _controlsThatSubmit = ['fds-button'];

  private _controlsWithChecked = ['fds-radio', 'fds-switch', 'fds-checkbox'];

  private _controlsWithValue = ['fds-textfield', 'fds-textarea', 'fds-select', 'fds-autocomplete', 'fds-slider'];

  static get formAssociated() {
    return true;
  }

  handleClick(event: MouseEvent) {
    const targetElement: any = event.target as HTMLElement;
    if (this._controlsThatSubmit.includes(targetElement.tagName.toLowerCase()) && targetElement.type?.toLowerCase() === 'submit') {
      this.submit();
    } else if (targetElement.type?.toLowerCase() === 'reset') {
      this.reset();
    }
    return true;
  }

  submit() {
    const formData = this.getFormData();
    const formElements = this.getFormElements();

    if (!this.reportValidity()) {
      formElements.forEach((e) => {
        if (typeof e.reportValidity === 'function') {
          e.reportValidity();
        }
      });
      return false;
    }
    this.dispatchEvent(
      new CustomEvent(FORM_EVENTS.FORM_SUBMIT, {
        bubbles: true,
        composed: true,
        detail: formData
      })
    );
    return true;
  }

  reportValidity(): boolean {
    const formElements = this.getFormElements();
    return !formElements.some((e) => typeof e.reportValidity === 'function' && e.reportValidity() === false);
  }

  getFormElements(): any[] {
    const slot = this.shadowRoot?.querySelector('slot');
    const assignedElements = slot?.assignedElements({ flatten: true });
    const formElements: any[] = [];
    assignedElements?.forEach((element: any) => {
      if (!element.disabled) {
        formElements.push(element);
      }
      const children = Array.from(element.getElementsByTagName('*')).filter((element: any) => !element.disabled);
      formElements.push(...children);
    });

    return formElements;
  }

  getFormData() {
    const formData = new FormData();
    const formElements = this.getFormElements();

    formElements.forEach((element) => {
      const tagName = element.tagName.toLowerCase();
      const keyName = element.name ? element.name : element.label;
      if (tagName === 'fds-select' || tagName === 'fds-autocomplete') {
        for (let i = 0; i < (element as HTMLElement).children.length; i++) {
          const option = element.children[i];
          if (option.selected) {
            formData.append(keyName, option.value);
          }
        }
      } else if (this._controlsWithChecked.includes(tagName)) {
        if (element.checked || element.selected) {
          formData.append(keyName, element.value || 'on');
        } else {
          formData.append(keyName, 'off');
        }
      } else if (
        this._controlsWithValue.includes(tagName) &&
        element.type !== 'checkbox' &&
        element.type !== 'radio' &&
        element.type !== 'submit'
      ) {
        formData.append(keyName, element.value);
      }
    });
    return formData;
  }

  reset() {
    const formElements = this.getFormElements();
    formElements.forEach((element) => {
      const tagName = element.tagName.toLowerCase();
      if (tagName === 'fds-select') {
        for (let i = 0; i < (element as HTMLElement).children.length; i++) {
          const option = element.children[i];
          option.selected = option.defaultSelected;
        }
      } else if (tagName === 'fds-checkbox') {
        if (element.checked) {
          element.removeAttribute('checked');
        }
      } else if (tagName === 'fds-textfield' || tagName === 'fds-textarea') {
        element.value = element.getAttribute('value') ? element.getAttribute('value') : '';
      }
    });

    this.dispatchEvent(
      new CustomEvent(FORM_EVENTS.FORM_RESET, {
        bubbles: true,
        composed: true
      })
    );
  }

  constructor() {
    super();
    this.addEventListener('click', this.handleClick);
  }

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-form': Form;
  }
}
