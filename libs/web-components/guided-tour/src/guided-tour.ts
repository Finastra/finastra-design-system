import '@finastra/button';
import '@material/mwc-icon-button';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-menu';
import { Menu } from '@material/mwc-menu';
import { html, LitElement, PropertyValues } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import './guided-tour-step';
import { Tour } from './guided-tour.model';
import { styles } from './styles.css';

@customElement('fds-guided-tour')
export class GuidedTour extends LitElement {
  static styles = styles;

  @property({ type: Array }) data: Tour[] = [];
  @property({ type: Boolean, reflect: true }) show = false;

  @query('#menu') protected menu!: Menu;
  @query('#anchor') protected anchor!: HTMLDivElement;
  @query('#spotlight-element') spotlightElement!: Element;
  @query('#guide-tooltip') tooltipElement!: HTMLElement;

  @state() private currentTour?: Tour;

  oldBodyOverflowValue = '';

  override render() {
    if (!this.show || !this.currentTour) return html``;
    return html``;
  }

  start(currentTourIndex: number = 0) {
    this.currentTour = this.data[currentTourIndex];
    this.show = true;

    // this._setBodyOverflow('hidden');

    // if (tour.startingUrl && window.location.href !== tour.startingUrl) {
    //   this._setTourState(true, this.currentStep, tour);
    //   window.location.href = tour.startingUrl;
    // } else {
    //   this._showTour = true;
    //   this.currentTour = tour;
    //   this._setTourState(this._showTour, this.currentStep, tour);
    // }
  }

  override update(changedProperties: PropertyValues) {
    if (changedProperties.has('show')) {
      if (this.show) {
        this.addOverlay();
      } else {
        this.removeOverlay();
      }
    }
    super.update(changedProperties);
  }

  private addOverlay() {
    this.oldBodyOverflowValue = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
  }

  private removeOverlay() {
    document.body.style.overflow = this.oldBodyOverflowValue;
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
