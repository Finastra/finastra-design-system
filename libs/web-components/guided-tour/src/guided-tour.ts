import { html, LitElement, PropertyValues, svg } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { until } from 'lit/directives/until.js';
import { strTemplate } from './guided-tour-helpers';
import { Tour } from './guided-tour.model';
import { styles } from './styles.css';

const STEP_INFO_TEMPLATE = 'Step ${currentStep} of ${totalSteps}';

@customElement('fds-guided-tour')
export class GuidedTour extends LitElement {
  static styles = styles;

  @property({ type: Array }) data: Tour = { steps: [] };
  @property({ type: Boolean, reflect: true }) show = false;
  @property({ type: Number }) currentStepIndex = 0;
  @property({ type: Number }) showStepInfo = false;

  // @query('#menu') protected menu!: Menu;
  @query('#anchor') protected anchor!: HTMLDivElement;
  @query('#spotlight-element') spotlightElement!: Element;
  @query('#guide-tooltip') tooltipElement!: HTMLElement;

  currentStepElement: Element | null = null;
  oldBodyOverflowValue = '';

  private renderStepInfo() {
    const template = this.data.stepInfo || STEP_INFO_TEMPLATE;
    const context = { currentStep: this.currentStepIndex + 1, totalSteps: this.data.steps.length + 1 };
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
    const margin = currentStep.margin ?? 8;

    const x = Math.max(itemClientRect.x - margin, 0);
    const y = Math.max(itemClientRect.y - margin, 0);
    const w = itemClientRect.width + margin * 2;
    const h = itemClientRect.height + margin * 2;

    return svg`
        <path class="backdrop" d=" M 0,0 H ${vw} V ${vh} H 0 z
        M ${x + r} ${y}\
        h ${Math.max(w - r, 0)} 
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

  private renderElementHighlight() {
    return html`
      <svg class="overlay">${this.currentStepElement ? this.overlayBackdropWidthHeighlightElement() : this.overlayBackdrop()}</svg>
    `;
  }
  private async asyncRender() {
    const currentStep = this.data.steps[this.currentStepIndex];

    if (currentStep.selector) {
      this.currentStepElement = await this.getElement(currentStep.selector);
    }
    return html` ${this.renderElementHighlight()}
      <div>
        ${this.showStepInfo ? this.renderStepInfo() : ''}
        <div>${currentStep.description}</div>
      </div>`;
  }

  override render() {
    const currentStep = this.data.steps[this.currentStepIndex];
    if (!this.show || !currentStep) return html``;
    return html`${until(this.asyncRender())} `;
  }

  start(currentTourIndex: number = 0) {
    this.currentStepIndex = currentTourIndex;
    this.show = true;
  }

  stop() {
    this.show = false;
  }

  override update(changedProperties: PropertyValues) {
    if (changedProperties.has('show')) {
      if (this.show) {
        this.fixScrollbar();
      } else {
        this.resetScrollbar();
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
  // private async _nextStep() {
  // const activeStep = this.currentTour.steps[this.currentStep];
  // const nextStep = this.currentTour.steps[this.currentStep + 1];
  // this.dispatchEvent(newCustomEvent('onNextClick', activeStep));
  // if (nextStep && !activeStep?.nextChangeUrl) {
  //   this._showTour = false;
  //   nextStep.selector ? await getElement(nextStep?.selector) : null;
  //   this._showTour = true;
  // }
  // this.currentStep++;
  // this._setTourState(this._showTour, this.currentStep, this.currentTour);
  // }

  // private async _previousStep() {
  // const activeStep = this.currentTour.steps[this.currentStep];
  // const previousStep = this.currentTour.steps[this.currentStep - 1];
  // this.dispatchEvent(newCustomEvent('onBackClick', activeStep));
  // if (previousStep && !previousStep?.nextChangeUrl) {
  //   this._showTour = false;
  //   previousStep.selector ? await getElement(previousStep.selector) : null;
  //   this._showTour = true;
  // }
  // this.currentStep--;
  // this._setTourState(this._showTour, this.currentStep, this.currentTour);
  // if (previousStep?.nextChangeUrl) {
  //   this._showTour = false;
  //   history.back();
  // }
  // }

  // private _completeTour() {
  // this._showTour = false;
  // this.currentStep = 0;
  // this._setBodyOverflow(this.bodyOverflow);
  // window.sessionStorage.removeItem('guided-tour-info');
  // this.requestUpdate();
  // }

  // renderTourStep(tour: Tour, currentStep: number) {
  // const tourStep = tour.steps[currentStep];
  // const lastStep = tour.steps.length;
  // return html`<fds-guided-tour-step
  //   @close-step="${this._completeTour}"
  //   @next-step="${this._nextStep}"
  //   @previous-step="${this._previousStep}"
  //   .step=${tourStep}
  //   ?isLast="${this.currentStep === lastStep - 1}"
  //   ?isFirst="${this.currentStep === 0}"
  // ></fds-guided-tour-step>`;
  // }

  // private _getTourState() {
  //   const tourInfo = window.sessionStorage.getItem('guided-tour-info');
  //   return tourInfo ? JSON.parse(tourInfo) : null;
  // }

  // private _setTourState(tourInProgress: boolean, currentStep: number, tour: Tour) {
  //   const tourInfo = { tourInProgress, tour, currentStep };
  //   window.sessionStorage.setItem('guided-tour-info', JSON.stringify(tourInfo));
  // }

  // private _setBodyOverflow(value: string) {
  //   (document.querySelector('body') as HTMLBodyElement).style.overflow = value;
  // }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-guided-tour': GuidedTour;
  }
}
