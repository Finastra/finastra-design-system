import '@finastra/icon';
import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { events } from './constants';

export interface Step {
  label: string;
  description?: string;
  activeStepIcon?: string;
  disabled?: Boolean;
  error?: Boolean;
}

/**
 * @cssprop {text} [--fds-stepper-line-space=8px] - Stepper line space.
 * @attr {boolean} [secondary=false] - Use Secondary color.
 * @attr {boolean} [readonly=false] - Read only mode.
 * @attr {boolean} [hideIndex=false] - Hide the index of each steps.
 * @attr [currentStepIndex=-1] - Index of current active step.
 */
export class BaseStepper extends LitElement {
  @property({ attribute: false })
  steps: Step[] = [];

  @property({ type: Number })
  currentStepIndex = 0;

  @property({ type: Boolean })
  readonly = false;

  @property({ type: Boolean })
  hideIndex = false;

  renderIconAndLine(step: Step, index: number) {
    const startLineClass = {
      hidden: index === 0,
      current: index === this.currentStepIndex + 1 && !this.steps[index - 1]?.disabled,
      error: this.steps[index - 1]?.error ? true : false,
      first: index === 0
    };
    const endLineClass = { hidden: index === this.steps.length - 1, last: index === this.steps.length - 1 };
    return html`
      <div class="line start-line ${classMap(startLineClass)}"></div>
      <div class="circle step-item-icon">${this.renderIcon(step, index)}</div>
      <div class="line end-line ${classMap(endLineClass)}"></div>
    `;
  }

  renderIcon(step: Step, index: number) {
    if (index >= this.currentStepIndex) {
      const activeStepIcon = this.steps[this.currentStepIndex]?.activeStepIcon;
      if (index === this.currentStepIndex && this.steps[this.currentStepIndex]?.error) {
        return html`<fds-icon>error_outline</fds-icon>`;
      } else if (index === this.currentStepIndex && activeStepIcon) {
        return html`<fds-icon>${activeStepIcon}</fds-icon>`;
      } else {
        return this.hideIndex ? null : index + 1;
      }
    } else {
      if (step?.error) {
        return html`<fds-icon>error_outline</fds-icon>`;
      } else {
        return html`<fds-icon>done</fds-icon>`;
      }
    }
  }

  render() {
    return html`<div class="container">
      ${this.steps.map(
        (step, idx) =>
          html`<div
            class="step-item
              ${idx < this.currentStepIndex ? 'done' : ''}
              ${idx === this.currentStepIndex && !step.disabled ? 'current' : ''}
              ${step.disabled ? 'disabled' : ''}
              ${step.error ? 'error' : ''}
              ${this.readonly ? 'readonly' : ''}"
            @click="${() => this._onStepClick(idx)}"
          >
            ${this.renderIconAndLine(step, idx)}
            <div class="text-wrapper">
              ${step.description
                ? html` <div class="step-item-label">${step.label}</div>
                    <div class="step-item-description">${step.description}</div>`
                : html` <div class="step-item-label">${step.label}</div> `}
            </div>
          </div>`
      )}
    </div>`;
  }

  _onStepClick(index: number) {
    if (!this.steps[index]?.disabled && !this.readonly) {
      this.currentStepIndex = index;
      this.dispatchEvent(
        new CustomEvent(events.STEPCLICK, {
          bubbles: true,
          composed: true,
          detail: {
            value: `${index}`
          }
        })
      );
    } else {
      return;
    }
  }
}
