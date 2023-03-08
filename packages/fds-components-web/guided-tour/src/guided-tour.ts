import '@finastra/button';
import '@finastra/card';
import { arrow, computePosition, offset } from '@floating-ui/dom';
import { html, LitElement, PropertyValues, svg } from 'lit';
import { customElement, property, queryAsync, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import type { StyleInfo } from 'lit/directives/style-map';
import { styleMap } from 'lit/directives/style-map.js';
import { Tour } from './guided-tour.model';
import { styles } from './styles.css';

const STEP_INFO_TEMPLATE = 'Step ${currentStep} of ${totalSteps}';

export function strTemplate(template: string, context: { [key: string]: string | number }): string {
  const templateRegex = /(\\)?\$\{([^{}\\]+)\}/g;

  return template.replace(templateRegex, (matched) => {
    const exp = matched[0] === '\\' ? matched.slice(1) : matched.match(/\{(.*)\}/)![1];

    return context.hasOwnProperty(exp) ? String(context[exp]) : matched;
  });
}

/**
 * @cssprop [--fds-guided-tour-card-max-width=500px] - Max width of panel information.
 *
 * @attr [data]-Data for component.
 * @attr [show=false] - Whether the tour should display.
 * @attr [currentStepIndex=0] - Current step in the tour.
 * @attr [showStepInfo=false] -  Whether the step info should display.
 *
 * @slot skip-button - Content for skip button.
 * @slot back-button - Content for back button.
 * @slot next-button - Content for next button.
 * @slot done-button - Content for done button.
 */
@customElement('fds-guided-tour')
export class GuidedTour extends LitElement {
  static styles = styles;

  @property() data: Tour = { steps: [] };
  @property({ type: Boolean, reflect: true }) show = false;
  @property({ type: Number }) currentStepIndex = 0;
  @property({ type: Boolean }) showStepInfo = false;

  @queryAsync('.step-card') stepCardElement!: Promise<HTMLElement>;
  @queryAsync('.step-card__arrow') stepCardArrowElement!: Promise<HTMLElement>;

  currentStepElement: Element | null | undefined = undefined;
  @state() cardPosition: StyleInfo = {};
  @state() arrowPosition: StyleInfo = {};
  oldBodyOverflowValue = '';

  private renderStepInfo() {
    const template = this.data.stepInfo || STEP_INFO_TEMPLATE;
    const context = { currentStep: this.currentStepIndex + 1, totalSteps: this.data.steps.length };
    return html`
      <div class="step-info">
        <span>${strTemplate(template, context)}</span>
      </div>
    `;
  }

  private overlayBackdrop() {
    const { innerWidth: w, innerHeight: h } = window;
    return svg`
      <g class="backdrop">
        <path d="M 0,0 H ${w} V ${h} H 0 Z"/>
      <g>
    `;
  }

  private overlayBackdropWidthHeighlightElement() {
    const { innerWidth: vw, innerHeight: vh } = window;
    const itemClientRect = this.currentStepElement!.getBoundingClientRect();
    const currentStep = this.data.steps[this.currentStepIndex];

    const r = currentStep.radius ?? 4;
    const marginLeft = currentStep.marginLeft ?? 0;
    const marginRight = currentStep.marginRight ?? 0;
    const marginTop = currentStep.marginTop ?? 0;
    const marginBottom = currentStep.marginBottom ?? 0;

    const x = Math.max(itemClientRect.x - marginLeft, 0);
    const y = Math.max(itemClientRect.y - marginTop, 0);
    const w = itemClientRect.width + marginLeft + marginRight;
    const h = itemClientRect.height + marginBottom + marginTop;

    return svg`
        <path class="backdrop" d=" M ${vw}, ${vh} V ${-vh} H ${-vw} V ${vh} H ${vw} z
        M ${x + r} ${y}\
        h ${Math.max(w - 2 * r, 0)}
        a ${r} ${r} 0, 0, 1 ${r} ${r}\
        v ${h - r * 2}
        a ${r} ${r} 0, 0, 1 ${-r} ${r}\
        h ${-w + r * 2}
        a ${r} ${r} 0, 0, 1 ${-r} ${-r}\
        v ${-h + r * 2}
        a ${r} ${r} 0, 0, 1 ${r} ${-r}\
        z"
        />
    `;
  }

  private renderStepCardArrow(show = false) {
    const currentStep = this.data.steps[this.currentStepIndex];
    const placement = currentStep.placement ?? 'bottom';
    const staticSide = 'step-card__arrow-' + placement.split('-')[0];
    const classes = {
      'step-card--hide': !show,
      'step-card__arrow': true,
      [staticSide]: true
    };
    return html`<div class=${classMap(classes)} style=${styleMap(this.arrowPosition)}></div>`;
  }

  private async calculatePosition() {
    const currentStep = this.data.steps[this.currentStepIndex];
    this.currentStepElement = undefined;
    if (currentStep.selector) {
      this.currentStepElement = await this.getElement(currentStep.selector);
    } else {
      this.currentStepElement = null;
    }
    const stepCard = await this.stepCardElement;
    const stepCardArrow = await this.stepCardArrowElement;
    const cardPosition: StyleInfo = { left: '50%', top: '50%', transform: 'translate(-50%, -50%)' };
    const arrowPosition: StyleInfo = { display: 'none' };
    if (this.currentStepElement) {
      const { x, y, middlewareData } = await computePosition(this.currentStepElement, stepCard, {
        placement: currentStep.placement ?? 'bottom',
        middleware: [
          offset({ crossAxis: currentStep.crossAxis ?? 0, mainAxis: currentStep.mainAxis ?? 0 }),
          arrow({ element: stepCardArrow })
        ]
      });
      cardPosition.left = `${x}px`;
      cardPosition.top = `${y}px`;
      cardPosition.transform = undefined;
      const { x: arrowX, y: arrowY } = middlewareData.arrow ?? {};

      arrowPosition.left = arrowX !== undefined ? `${arrowX}px` : undefined;
      arrowPosition.top = arrowY !== undefined ? `${arrowY}px` : undefined;
      arrowPosition.display = undefined;
    }
    this.cardPosition = cardPosition;
    this.arrowPosition = arrowPosition;
  }

  override render() {
    const currentStep = this.data.steps[this.currentStepIndex];
    if (!this.show || !currentStep) return html``;
    const show = this.currentStepElement !== undefined;
    const classes = {
      'step-card--hide': !show,
      'step-card': true
    };

    const isLastStep = this.data.steps.length === this.currentStepIndex + 1;
    const isFirstStep = this.currentStepIndex === 0;
    const hasNextStep = this.currentStepIndex < this.data.steps.length - 1;
    const hasBackStep = !isFirstStep;

    return html` <div class="guided-tour-container">
      <svg class="overlay">${this.currentStepElement ? this.overlayBackdropWidthHeighlightElement() : this.overlayBackdrop()}</svg>
      <div class=${classMap(classes)} style=${styleMap(this.cardPosition)}>
        <fds-card>
          <div class="card-content">
            ${this.showStepInfo ? this.renderStepInfo() : ''}
            <div class="step-title">${currentStep.title}</div>
            <div class="step-description">${currentStep.description}</div>
            <div class="step-button-container">
              ${!isLastStep
                ? html`<slot name="skip-button" @click=${this.stop}>
                    <fds-text-button class="skip-button" label="Skip"></fds-text-button>
                  </slot>`
                : ''}
              ${hasBackStep
                ? html` <slot name="back-button" @click=${this.back}>
                    <fds-outlined-button label="Back"></fds-outlined-button>
                  </slot>`
                : ''}
              ${hasNextStep
                ? html` <slot name="next-button" @click=${this.next}>
                    <fds-button label="Next"></fds-button>
                  </slot>`
                : ''}
              ${isLastStep
                ? html`
                    <slot name="done-button" @click=${this.stop}>
                      <fds-button label="Done"></fds-button>
                    </slot>
                  `
                : ''}
            </div>
          </div>
        </fds-card>
        ${this.renderStepCardArrow(show)}
      </div>
    </div>`;
  }

  start(currentTourIndex = 0) {
    this.currentStepIndex = currentTourIndex;
    this.show = true;
  }

  stop() {
    this.show = false;
    this.currentStepIndex = 0;
  }

  override update(changedProperties: PropertyValues) {
    // change show
    if (changedProperties.has('show')) {
      if (this.show) {
        this.focus();
        this.fixScrollbar();
        this.calculatePosition();
      } else {
        this.resetScrollbar();
      }
    } else {
      // change only currentStepIndex
      if (changedProperties.has('currentStepIndex') && this.show) {
        this.calculatePosition();
      }
    }
    super.update(changedProperties);
  }

  private fixScrollbar() {
    this.oldBodyOverflowValue = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
  }

  private resetScrollbar() {
    document.body.style.overflow = this.oldBodyOverflowValue;
  }

  private getElement(selector: string): Promise<Element> {
    return new Promise((resolve) => {
      const element = document.querySelector(selector);
      if (element) {
        return resolve(element);
      }
      const observer = new MutationObserver(() => {
        const element = document.querySelector(selector);
        if (element) {
          resolve(element);
          observer.disconnect();
        }
      });
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    });
  }

  next() {
    this.currentStepIndex++;
  }

  back() {
    this.currentStepIndex--;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-guided-tour': GuidedTour;
  }
}
