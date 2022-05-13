import { html, LitElement, svg } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

export interface Step {
  label: string;
  description?: string;
  disabled: Boolean
}

/**
 * @cssprop {text} [--fds-stepper-line-space=8px] - Stepper line space.
 * @attr {boolean} [secondary=false] - Use Secondary color.
 * @attr [currentStepIndex=-1] - Index of current active step.
 */
export class BaseStepper extends LitElement {
  @property({ attribute: false })
  steps: Step[] = [];

  @property({ type: Number })
  currentStepIndex = -1;

  renderIconAndLine(index: number) {
    const startLineClass = { hidden: index === 0, current: index === (this.currentStepIndex + 1) && !this.steps[index-1].disabled, first: index === 0};
    const endLineClass = { hidden: index === this.steps.length - 1, last: index === this.steps.length - 1 };
    return html`
      <div class="line  start-line ${classMap(startLineClass)}"></div>
      <div class="circle step-item-icon">
        ${index >= this.currentStepIndex
        ? index + 1
        : svg`<svg width="14" height="11" viewBox="0 0 14 11">
<path d="M4.75012 8.12757L1.62262 5.00007L0.557617 6.05757L4.75012 10.2501L13.7501 1.25007L12.6926 0.192566L4.75012 8.12757Z"/>
</svg>
`}
      </div>
      <div class="line end-line ${classMap(endLineClass)}"></div>
    `;
  }

  render() {
    return html`<div class="container">
      ${this.steps.map(
      (step, idx) =>
        html`<div class="step-item ${idx < this.currentStepIndex? 'done' : ''} ${idx === this.currentStepIndex && !step.disabled? 'current' : ''} ${step.disabled && idx >= this.currentStepIndex ? 'disabled' : ''} ">
            ${this.renderIconAndLine(idx)}
            ${step.description
            ? html`<div class="text-wrapper">
                  <div class="step-item-label">${step.label}</div>
                  <div class="step-item-description">${step.description}</div>
                </div>`
            : html`<div class="step-item-label">${step.label}</div>`}
          </div>`
    )}
    </div>`;
  }
}
