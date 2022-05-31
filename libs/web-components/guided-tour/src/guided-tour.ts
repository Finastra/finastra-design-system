import '@finastra/button';
import "@material/mwc-icon-button";
import "@material/mwc-list/mwc-list-item";
import "@material/mwc-menu";
import { Menu } from "@material/mwc-menu";
import { html, LitElement } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";
import { getElement, newCustomEvent } from './guided-tour-helpers';
import "./guided-tour-step";
import { Tour } from "./guided-tour.model";
import { styles } from './styles.css';

@customElement("fds-guided-tour")
export class GuidedTour extends LitElement {
  static styles = styles;

  @query("#menu") protected menu!: Menu;
  @query("#anchor") protected anchor!: HTMLDivElement;
  @query("#spotlight-element") spotlightElement!: Element;
  @query("#guide-tooltip") tooltipElement!: HTMLElement;

  @state()
  private _showTour = false;
  @state()
  private currentStep = 0;
  @state()
  private currentTour!: Tour;
  
  @property({
    type: Array
  })
  data: Tour[] = [];
  
  bodyOverflow = '';
  
  override render() {
    return html `
            <div @click="${this._showMenu}" id="anchor">
              <slot name="trigger" id="trigger"> </slot>
            </div>

            <mwc-menu id="menu" .anchor=${this.anchor} corner="BOTTOM_LEFT">
              ${this._listTours(this.data)}
            </mwc-menu>
            ${this._showTour ? this.renderTourStep(this.currentTour, this.currentStep) : ''}
            `;
  }

  override async connectedCallback() {
    super.connectedCallback();
    const sessionInfo = this._getTourState();
    this.bodyOverflow = (document.querySelector('body') as HTMLBodyElement).style.overflow;
    if (sessionInfo && sessionInfo.tourInProgress) {
      this._setBodyOverflow("hidden");
      this.currentStep = sessionInfo.currentStep;
      this.currentTour = sessionInfo.tour;
      const activeStep: any = this.currentTour.steps[this.currentStep];
      activeStep?.selector ? await getElement(activeStep.selector): null;
      this._showTour = sessionInfo.tourInProgress;
    }
  }

  private _listTours(tours: Tour[]) {
    return tours?.length ? tours.map(
      (tour) =>
        html`<mwc-list-item @click="${() => this.startTour(tour)}" .listItems=${tours}>
          ${tour.name} 
        </mwc-list-item>`
    ) : html `<mwc-list-item>No tours added.</mwc-list-item>`
  }

  private _showMenu() {
    this.menu!.show();
    this.requestUpdate();
  }

  startTour(tour: Tour) {
    this._setBodyOverflow("hidden");

    if(tour.startingUrl && window.location.href !== tour.startingUrl) {
      this._setTourState(true, this.currentStep, tour)
      window.location.href = tour.startingUrl;
    }else{
      this._showTour = true;
      this.currentTour = tour;
      this._setTourState(this._showTour, this.currentStep, tour)
    }
  }
  

  private async _nextStep(){
      const activeStep = this.currentTour.steps[this.currentStep];
      const nextStep = this.currentTour.steps[this.currentStep + 1];
      this.dispatchEvent(newCustomEvent('onNextClick', activeStep));
      
      if(nextStep && !activeStep?.nextChangeUrl) {
        this._showTour = false;
        nextStep.selector ? await getElement(nextStep?.selector): null;
        this._showTour = true;
      }
      
      this.currentStep++;
      this._setTourState(this._showTour, this.currentStep, this.currentTour);
  }

  private async _previousStep (){
    const activeStep = this.currentTour.steps[this.currentStep];
    const previousStep = this.currentTour.steps[this.currentStep - 1];
    this.dispatchEvent(newCustomEvent('onBackClick', activeStep));
    
    if(previousStep && !previousStep?.nextChangeUrl) {
      this._showTour = false;
      previousStep.selector ? await getElement(previousStep.selector) : null;
      this._showTour = true;
    }

    this.currentStep--;
    this._setTourState(this._showTour, this.currentStep, this.currentTour);
 
    if(previousStep?.nextChangeUrl){
        this._showTour = false;
        history.back();
    }
}

  private _completeTour() {
    this._showTour = false;
    this.currentStep = 0;
    this._setBodyOverflow(this.bodyOverflow);
    window.sessionStorage.removeItem(
      "guided-tour-info"
    );
    this.requestUpdate();
  }

  renderTourStep(tour: Tour, currentStep: number) {
    const tourStep = tour.steps[currentStep];
    const lastStep = tour.steps.length;
    return html`<fds-guided-tour-step @close-step="${this._completeTour}" @next-step="${this._nextStep}"
      @previous-step="${this._previousStep}" .step=${tourStep} ?isLast="${this.currentStep === lastStep - 1}"
      ?isFirst="${this.currentStep === 0}"></fds-guided-tour-step>`;
  }

  private _getTourState(){
    const tourInfo = window.sessionStorage.getItem("guided-tour-info");
    return tourInfo ? JSON.parse(tourInfo) : null;
  }

  private _setTourState(tourInProgress: boolean, currentStep: number, tour: Tour){
    const tourInfo = { tourInProgress, tour, currentStep }
    window.sessionStorage.setItem("guided-tour-info", JSON.stringify(tourInfo))
  }

  private _setBodyOverflow(value: string){
    (document.querySelector('body') as HTMLBodyElement).style.overflow = value;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "fds-guided-tour": GuidedTour;
  }
}
